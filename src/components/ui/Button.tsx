import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent";

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variants: Record<Variant, string> = {
  primary: "bg-portfolio-blue text-white shadow-portfolio-soft hover:bg-blue-700",
  secondary: "border border-portfolio-grey bg-white text-portfolio-charcoal hover:border-portfolio-blue hover:text-portfolio-blue",
  ghost: "text-portfolio-charcoal hover:bg-portfolio-blue-soft hover:text-portfolio-blue",
  accent: "bg-portfolio-orange text-white hover:bg-orange-600"
};

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const styles = cn("focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-portfolio px-5 py-2.5 text-sm font-semibold transition-colors", variants[variant], className);

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return <Link href={href} className={styles} {...linkProps}>{children}</Link>;
  }

  return <button className={styles} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}
