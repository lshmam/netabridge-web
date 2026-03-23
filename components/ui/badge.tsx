import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-mono text-[10px] px-2 py-0.5 rounded",
  {
    variants: {
      variant: {
        accent: "bg-[rgba(45,127,249,0.08)] text-nb-accent",
        green: "bg-[rgba(16,185,129,0.08)] text-nb-green",
        amber: "bg-[rgba(245,158,11,0.08)] text-nb-amber",
        neutral: "bg-nb-surface text-nb-text3",
      },
    },
    defaultVariants: {
      variant: "accent",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export function Badge({ children, variant, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
}

export { badgeVariants };
