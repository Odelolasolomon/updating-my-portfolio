import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-portfolio border border-portfolio-grey bg-white shadow-portfolio-card", className)}>{children}</div>;
}
