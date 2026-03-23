import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Eyebrow({ children, className, ...props }: EyebrowProps) {
  return (
    <div
      className={cn(
        "font-mono text-[11px] uppercase tracking-[3px] text-nb-accent mb-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
