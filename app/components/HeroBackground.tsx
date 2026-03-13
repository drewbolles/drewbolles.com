export function HeroBackground({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(95, 163, 255, 0.12) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(74, 158, 255, 0.05) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0, 212, 170, 0.03) 0%, transparent 50%)",
        }}
      />
      {children}
    </section>
  );
}
