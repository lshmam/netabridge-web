import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  children: React.ReactNode;
}

const sizeMap: Record<HeadingLevel, string> = {
  h1: "text-[clamp(42px,6vw,72px)] leading-[1.1] tracking-tight",
  h2: "text-[clamp(32px,4vw,48px)] leading-[1.2]",
  h3: "text-[22px]",
  h4: "text-base font-sans font-semibold",
};

export function Heading({
  as: Tag = "h2",
  children,
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-serif font-normal text-nb-text",
        sizeMap[Tag],
        Tag !== "h4" && "font-serif",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function HeadingAccent({ children }: { children: React.ReactNode }) {
  return <em className="italic text-nb-accent2">{children}</em>;
}
