import { cn } from "@/lib/utils";

export function Metric({ value, label, className }: { value: string; label: string; className?: string }) {
  return (
    <div className={cn("rounded-portfolio border border-portfolio-grey bg-white px-4 py-3", className)}>
      <div className="text-2xl font-semibold text-portfolio-charcoal">{value}</div>
      <div className="mt-1 text-sm text-portfolio-slate">{label}</div>
    </div>
  );
}
