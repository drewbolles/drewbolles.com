import lighthouse, { desktopConfig } from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const DEFAULT_URLS = [
  'https://www.drewbolles.com',
  'https://www.drewbolles.com/about',
  'https://www.drewbolles.com/blog',
  'https://www.drewbolles.com/blog/inline-critical-css-using-jekyll-and-gulp',
];

const CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];
const SCORE_THRESHOLD = 0.9;
const PERF_FAIL_THRESHOLD = 80;

function parseArgs() {
  const args = process.argv.slice(2);
  const mobile = args.includes('--mobile');
  const urlIndex = args.indexOf('--url');
  const url = urlIndex !== -1 ? args[urlIndex + 1] : null;
  return { mobile, urls: url ? [url] : DEFAULT_URLS };
}

async function runLighthouse(url, port, mobile) {
  const config = mobile
    ? { extends: 'lighthouse:default', settings: { onlyCategories: CATEGORIES } }
    : { ...desktopConfig, settings: { ...desktopConfig.settings, onlyCategories: CATEGORIES } };

  const result = await lighthouse(url, { port, output: 'json' }, config);
  return result?.lhr;
}

function extractTasks(lhr) {
  const scores = {};
  const tasks = [];

  for (const categoryId of CATEGORIES) {
    const category = lhr.categories[categoryId];
    if (!category) continue;
    scores[categoryId] = Math.round(category.score * 100);

    for (const auditRef of category.auditRefs) {
      const audit = lhr.audits[auditRef.id];
      if (!audit || audit.score === null || audit.score >= SCORE_THRESHOLD) continue;

      const existing = tasks.find((t) => t.id === audit.id);
      if (existing) continue;

      tasks.push({
        id: audit.id,
        category: categoryId,
        title: audit.title,
        score: audit.score,
        displayValue: audit.displayValue || '',
        description: (audit.description || '').split('.')[0] + '.',
      });
    }
  }

  tasks.sort((a, b) => a.score - b.score);
  return { scores, tasks };
}

function generateMarkdown(results) {
  const date = new Date().toISOString().split('T')[0];
  const lines = [
    '# Lighthouse Performance Tasks',
    `Generated: ${date}`,
    '',
    '> Scores may vary between runs due to network conditions.',
    '',
    '## Summary',
    '',
    '| Page | Performance | Accessibility | Best Practices | SEO |',
    '|------|------------|---------------|----------------|-----|',
  ];

  for (const { url, scores } of results) {
    const path = new URL(url).pathname;
    lines.push(
      `| ${path} | ${scores.performance ?? '-'} | ${scores.accessibility ?? '-'} | ${scores['best-practices'] ?? '-'} | ${scores.seo ?? '-'} |`,
    );
  }

  lines.push('', '## Action Items', '');

  let totalTasks = 0;

  for (const { url, tasks } of results) {
    if (tasks.length === 0) continue;
    lines.push(`### ${url}`, '');

    const grouped = {};
    for (const task of tasks) {
      (grouped[task.category] ??= []).push(task);
    }

    for (const category of CATEGORIES) {
      const categoryTasks = grouped[category];
      if (!categoryTasks) continue;

      lines.push(
        `#### ${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}`,
        '',
      );

      for (const task of categoryTasks) {
        const scoreDisplay = task.displayValue || `score: ${task.score}`;
        lines.push(`- [ ] **${task.title}** (${scoreDisplay}) — ${task.description}`);
        totalTasks++;
      }

      lines.push('');
    }
  }

  if (totalTasks === 0) {
    lines.push('No issues found! All audits passing.');
  }

  return { markdown: lines.join('\n'), totalTasks };
}

function printSummary(results, totalTasks) {
  console.log('\n📊 Lighthouse Audit Summary\n');
  console.log(
    'Page'.padEnd(50) +
      'Perf'.padEnd(8) +
      'A11y'.padEnd(8) +
      'BP'.padEnd(8) +
      'SEO'.padEnd(8),
  );
  console.log('-'.repeat(82));

  for (const { url, scores } of results) {
    const path = new URL(url).pathname;
    console.log(
      path.padEnd(50) +
        String(scores.performance ?? '-').padEnd(8) +
        String(scores.accessibility ?? '-').padEnd(8) +
        String(scores['best-practices'] ?? '-').padEnd(8) +
        String(scores.seo ?? '-').padEnd(8),
    );
  }

  console.log(`\n${totalTasks} action item(s) found.`);
}

async function main() {
  const { mobile, urls } = parseArgs();
  const mode = mobile ? 'mobile' : 'desktop';
  console.log(`Running Lighthouse (${mode}) on ${urls.length} page(s)...\n`);

  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

  try {
    const results = [];

    for (const url of urls) {
      console.log(`  Auditing: ${url}`);
      const lhr = await runLighthouse(url, chrome.port, mobile);
      if (!lhr) {
        console.error(`  Failed to audit ${url}`);
        continue;
      }
      const { scores, tasks } = extractTasks(lhr);
      results.push({ url, scores, tasks });
    }

    const { markdown, totalTasks } = generateMarkdown(results);
    const outputPath = join(ROOT, 'lighthouse-tasks.md');
    writeFileSync(outputPath, markdown);
    console.log(`\nReport written to: lighthouse-tasks.md`);

    printSummary(results, totalTasks);

    const hasLowPerf = results.some((r) => (r.scores.performance ?? 0) < PERF_FAIL_THRESHOLD);
    if (hasLowPerf) {
      console.log(`\n⚠️  Performance score below ${PERF_FAIL_THRESHOLD} detected.`);
      process.exit(1);
    }
  } finally {
    await chrome.kill();
  }
}

main().catch((err) => {
  console.error('Lighthouse audit failed:', err);
  process.exit(1);
});
