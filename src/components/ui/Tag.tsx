import { cn } from "@/lib/utils";

type TagTone = "blue" | "orange" | "neutral";

const tones: Record<TagTone, string> = {
  blue: "border-blue-100 bg-portfolio-blue-soft text-portfolio-blue",
  orange: "border-orange-100 bg-portfolio-orange-soft text-portfolio-orange",
  neutral: "border-portfolio-grey bg-white text-portfolio-slate"
};

export function Tag({ children, tone = "blue", className }: { children: React.ReactNode; tone?: TagTone; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold", tones[tone], className)}>{children}</span>;
}
