import { cn } from "@/lib/utils";

interface GlowProps {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
}

export function Glow({
  className,
  color = "rgba(45, 127, 249, 0.06)",
  size = 800,
  opacity = 1,
}: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-0 -translate-x-1/2",
        className
      )}
      style={{
        width: size,
        height: size * 0.75,
        background: `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)`,
        opacity,
      }}
    />
  );
}
