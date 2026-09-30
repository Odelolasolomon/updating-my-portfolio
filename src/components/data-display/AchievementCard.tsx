import { ArrowRight, Award, BookOpen, GraduationCap, Medal, Puzzle, Sparkles } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { AchievementCategory, AchievementRecord, AchievementTone } from "@/data/achievements";

const categoryIcon: Record<AchievementCategory, React.ReactNode> = {
  research: <Award size={20} />,
  academic: <GraduationCap size={20} />,
  fellowship: <Sparkles size={20} />,
  certification: <BookOpen size={20} />,
  challenge: <Puzzle size={20} />
};

const toneClass: Record<AchievementTone, string> = {
  blue: "bg-portfolio-blue text-white",
  orange: "bg-portfolio-orange text-white",
  charcoal: "bg-portfolio-charcoal text-white"
};

export function AchievementCard({ achievement, featured = false }: { achievement: AchievementRecord; featured?: boolean }) {
  return (
    <Card className="flex h-full min-w-0 flex-col overflow-hidden">
      <div className={`${toneClass[achievement.tone]} p-5 sm:p-6`}>
        <div className="flex min-w-0 items-start justify-between gap-4">
          <div className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 text-white">
            {categoryIcon[achievement.category]}
          </div>
          {achievement.year ? (
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">{achievement.year}</span>
          ) : null}
        </div>
        <p className="mt-5 text-sm font-semibold uppercase text-white/80">{achievement.status}</p>
        <h2 className={`${featured ? "text-3xl leading-9" : "text-2xl leading-8"} mt-3 font-semibold text-white`}>{achievement.title}</h2>
        <p className="mt-2 text-sm font-semibold leading-6 text-white/75">{achievement.organization}</p>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-7 text-portfolio-slate">{achievement.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Tag tone={achievement.category === "research" ? "blue" : achievement.category === "fellowship" ? "orange" : "neutral"}>{formatCategory(achievement.category)}</Tag>
          <Tag tone="neutral">{achievement.status}</Tag>
        </div>
        {achievement.links?.length ? (
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {achievement.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-portfolio border border-portfolio-grey bg-white px-4 py-2 text-sm font-semibold text-portfolio-charcoal transition hover:border-portfolio-blue hover:text-portfolio-blue"
                prefetch={false}
              >
                {link.label} <ArrowRight size={15} />
              </Link>
            ))}
          </div>
        ) : null}
        <div className="mt-auto pt-6">
          <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase text-portfolio-slate">
            <Medal className="shrink-0 text-portfolio-orange" size={15} />
            <span>Evidence recorded</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function formatCategory(category: AchievementCategory) {
  const labels: Record<AchievementCategory, string> = {
    research: "Research",
    academic: "Academic",
    fellowship: "Fellowship",
    certification: "Certification",
    challenge: "Challenge"
  };

  return labels[category];
}

