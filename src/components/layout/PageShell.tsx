import { cn } from "@/lib/utils";

export function PageShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return <main className={cn("bg-white text-portfolio-charcoal", className)}>{children}</main>;
}
