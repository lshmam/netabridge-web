import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-nb-surface p-8 transition-colors duration-300",
        hover && "hover:bg-nb-surface2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardGrid({
  children,
  className,
  columns = 3,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { columns?: 2 | 3 }) {
  return (
    <div
      className={cn(
        "grid gap-px bg-nb-border rounded-xl overflow-hidden",
        columns === 3 && "grid-cols-1 md:grid-cols-3",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
