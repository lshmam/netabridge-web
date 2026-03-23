import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "alt" | "bordered";
}

export function Section({
  children,
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-[120px]",
        variant === "alt" && "bg-nb-bg2",
        variant === "bordered" && "border-t border-nb-border bg-nb-bg2",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
