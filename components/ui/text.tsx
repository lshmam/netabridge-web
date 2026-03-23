import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "muted" | "faint";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const colorMap = {
  body: "text-nb-text",
  muted: "text-nb-text2",
  faint: "text-nb-text3",
};

const sizeMap = {
  sm: "text-[11px]",
  md: "text-[13px]",
  lg: "text-base",
};

export function Text({
  variant = "muted",
  size = "md",
  children,
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "font-light leading-relaxed",
        colorMap[variant],
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
