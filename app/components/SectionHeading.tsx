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
        <span className="font-mono text-[13px] font-medium text-accent tracking-wider">
          {number}
        </span>
        <span className="text-sm font-medium text-muted-light uppercase tracking-widest">
          {label}
        </span>
      </div>
      {action && (
        <a
          href={action.href}
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          {action.label} →
        </a>
      )}
    </div>
  );
}
