export function SectionHeading({
  number,
  label,
  action,
}: {
  number: string;
  label: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex items-baseline justify-between w-full">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs font-bold text-accent-primary">
          {number}.
        </span>
        <span className="font-mono text-xs font-semibold text-muted-light uppercase tracking-widest">
          {label}
        </span>
      </div>
      {action && (
        <a
          href={action.href}
          className="font-mono text-xs font-medium text-accent-primary hover:text-accent-secondary transition-colors"
        >
          {action.label} →
        </a>
      )}
    </div>
  );
}
