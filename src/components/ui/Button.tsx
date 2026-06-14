import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] transition-all duration-150 ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] select-none";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "surface-gradient text-white shadow-lg shadow-brand-blue/25 hover:-translate-y-px hover:shadow-xl hover:shadow-brand-blue/30 bg-[length:200%_200%] hover:bg-right",
  ghost:
    "border-[1.5px] border-slate-300 text-ink hover:border-brand-blue hover:text-brand-blue dark:border-white/20 dark:text-slate-100 dark:hover:border-brand-cyan dark:hover:text-white",
};

export default function Button({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
