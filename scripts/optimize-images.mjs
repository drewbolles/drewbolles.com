import sharp from 'sharp';
import { readdir, stat, writeFile, readFile } from 'node:fs/promises';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const UPLOADS_DIR = join(ROOT, 'public', 'uploads');
const MANIFEST_PATH = join(UPLOADS_DIR, '.optimized-manifest.json');

const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function loadManifest() {
  try {
    const data = await readFile(MANIFEST_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function saveManifest(manifest) {
  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

async function getImages(dir) {
  const images = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      images.push(...(await getImages(fullPath)));
    } else if (SUPPORTED_EXTS.has(extname(entry.name).toLowerCase())) {
      images.push(fullPath);
    }
  }
  return images;
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const input = await readFile(filePath);
  let output;

  if (ext === '.png') {
    output = await sharp(input)
      .png({ quality: 90, compressionLevel: 9, effort: 10 })
      .toBuffer();
  } else if (ext === '.jpg' || ext === '.jpeg') {
    output = await sharp(input)
      .jpeg({ quality: 90, mozjpeg: true })
      .toBuffer();
  } else if (ext === '.webp') {
    output = await sharp(input)
      .webp({ quality: 90, effort: 6 })
      .toBuffer();
  }

  return output;
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const force = process.argv.includes('--force');
  const manifest = await loadManifest();
  const images = await getImages(UPLOADS_DIR);

  console.log(`Found ${images.length} image(s) in public/uploads/\n`);

  let optimized = 0;
  let skipped = 0;
  let totalSaved = 0;

  for (const filePath of images) {
    const relativePath = filePath.replace(ROOT + '/', '');
    const fileStat = await stat(filePath);
    const fileKey = relativePath;
    const currentSize = fileStat.size;

    if (!force && manifest[fileKey] === currentSize) {
      skipped++;
      continue;
    }

    const output = await optimizeImage(filePath);
    if (!output) continue;

    const saved = currentSize - output.length;
    const pct = ((saved / currentSize) * 100).toFixed(1);

    if (saved <= 0) {
      console.log(`  ${relativePath} — already optimal`);
      manifest[fileKey] = currentSize;
      skipped++;
      continue;
    }

    const sizeKB = (currentSize / 1024).toFixed(0);
    const newKB = (output.length / 1024).toFixed(0);
    console.log(`  ${relativePath}: ${sizeKB}KB → ${newKB}KB (${pct}% saved)`);

    if (!dryRun) {
      await writeFile(filePath, output);
      manifest[fileKey] = output.length;
    }

    optimized++;
    totalSaved += saved;
  }

  if (!dryRun) {
    await saveManifest(manifest);
  }

  console.log(`\n${optimized} optimized, ${skipped} skipped`);
  if (totalSaved > 0) {
    const totalKB = (totalSaved / 1024).toFixed(0);
    console.log(`Total saved: ${totalKB}KB${dryRun ? ' (dry run — no files changed)' : ''}`);
  }
}

main().catch((err) => {
  console.error('Image optimization failed:', err);
  process.exit(1);
});
