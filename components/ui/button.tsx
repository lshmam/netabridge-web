import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-sans font-medium transition-all duration-250 cursor-pointer text-decoration-none select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-nb-accent text-white rounded-lg hover:bg-nb-accent2 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(45,127,249,0.2)]",
        ghost:
          "bg-transparent text-nb-text2 border border-nb-border2 rounded-lg hover:border-nb-text3 hover:text-nb-text",
        nav:
          "bg-nb-accent text-white rounded-md font-medium hover:bg-nb-accent2 hover:-translate-y-px",
        link:
          "bg-transparent text-nb-text3 hover:text-nb-text underline-offset-4",
      },
      size: {
        sm: "px-4 py-2 text-[13px]",
        md: "px-8 py-3.5 text-[15px]",
        lg: "px-10 py-4 text-base",
        nav: "px-5 py-2 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
