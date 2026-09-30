import { ArrowRight, Award, BookOpenCheck, GraduationCap, Mail, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import { AchievementCard } from "@/components/data-display/AchievementCard";
import { EvidenceShowcase } from "@/components/data-display/EvidenceShowcase";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import {
  academicAchievements,
  certificationAchievements,
  challengeAchievements,
  featuredAchievements,
  fellowshipAchievements,
  researchAchievements,
  type AchievementRecord
} from "@/data/achievements";
import { achievementEvidence } from "@/data/assets";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Achievements and recognition for Odelola Solomon Oluwatobiloba across research, academic distinction, fellowships and professional development."
};

const stats = [
  { value: "9", label: "Verified entries" },
  { value: "MICCAI", label: "Research award listed" },
  { value: "Top 5", label: "Academic distinction" }
];

const categorySummary = [
  {
    icon: <Award size={20} />,
    title: "Research Recognition",
    text: "Medical-imaging research recognition linked to the MICCAI 2025 pediatric chest X-ray denoising contribution.",
    href: "/research"
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Academic Distinction",
    text: "Statistics background from the University of Nigeria, Nsukka, including top-five graduating class standing.",
    href: "/about"
  },
  {
    icon: <Sparkles size={20} />,
    title: "Fellowship Recognition",
    text: "Data science fellowship recognition included where supplied in the achievement materials.",
    href: "/skills"
  }
];

const awards = [...researchAchievements, ...academicAchievements, ...fellowshipAchievements, ...challengeAchievements];

export default function AchievementsPage() {
  const featured = featuredAchievements[0];

  return (
    <>
      <Header activeHref="/achievements" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
          <div className="portfolio-container min-w-0 space-y-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Achievements" }]} />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div className="min-w-0 space-y-5">
                <Tag tone="orange">Achievements & Recognition</Tag>
                <h1 className="max-w-4xl text-[clamp(2.45rem,6vw,4.65rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">
                  Recognition
                </h1>
                <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">
                  A focused record of research recognition, academic distinction, fellowship recognition and professional development across AI, data science and applied machine learning.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href="/research">
                    <Award size={17} /> View Research
                  </Button>
                  <Button href={`mailto:${profile.email}`} variant="secondary">
                    <Mail size={17} /> Request Evidence
                  </Button>
                </div>
              </div>
              <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {stats.map((stat) => (
                  <Card key={stat.label} className="p-5">
                    <p className="text-3xl font-semibold text-portfolio-blue">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-portfolio-slate">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {featured ? (
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="min-w-0 space-y-6">
                <SectionHeader
                  eyebrow="Featured Distinction"
                  title="Research recognition connected to applied medical AI"
                  description="The page uses supplied recognitions and existing portfolio evidence, with unsupported external verification links left out of the interface."
                />
                <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {categorySummary.map((item) => (
                    <Link key={item.title} href={item.href} className="focus-ring group block min-w-0" prefetch={false}>
                      <Card className="h-full p-5 transition duration-200 group-hover:-translate-y-1 group-hover:border-portfolio-blue group-hover:shadow-portfolio-soft">
                        <div className="grid size-10 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{item.icon}</div>
                        <h2 className="mt-4 text-base font-semibold text-portfolio-charcoal">{item.title}</h2>
                        <p className="mt-2 text-sm leading-6 text-portfolio-slate">{item.text}</p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
              <AchievementCard achievement={featured} featured />
            </div>
          </section>
        ) : null}

        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-20">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Awards & Recognition"
              title="Recognition grouped by evidence type"
              description="Awards and distinctions are presented without inflated rankings, invented dates or unavailable certificate identifiers."
            />
            <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {awards.map((achievement) => (
                <MiniAchievement key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="min-w-0 space-y-6">
              <SectionHeader
                eyebrow="Certifications & Development"
                title="Professional learning with practical AI focus"
                description="Certification entries are included only at the level supported by supplied materials. Credential IDs and verification URLs can be added once available."
              />
              <Card className="p-5 sm:p-6">
                <div className="grid size-12 place-items-center rounded-full bg-portfolio-orange-soft text-portfolio-orange">
                  <BookOpenCheck size={21} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-portfolio-charcoal">Evidence-first presentation</h2>
                <p className="mt-3 text-sm leading-7 text-portfolio-slate">
                  Recognition is framed as a credibility record, not a certificate gallery. Public links are shown only where a working route or supplied URL exists.
                </p>
              </Card>
            </div>
            <div className="grid min-w-0 gap-5 md:grid-cols-2">
              {certificationAchievements.map((achievement) => (
                <MiniAchievement key={achievement.id} achievement={achievement} icon={<ShieldCheck size={19} />} />
              ))}
            </div>
          </div>
        </section>


        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-20">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Evidence Preview"
              title="Selected credential and participation evidence"
              description="Only selected high-signal evidence is previewed. Cards remain text-first, and Zindi is represented strictly as challenge participation."
            />
            <EvidenceShowcase items={achievementEvidence} columns="three" />
          </div>
        </section>
        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-20">
          <div className="portfolio-container grid min-w-0 gap-6 lg:grid-cols-2">
            <DetailPanel title="Academic Achievement" icon={<GraduationCap size={20} />} records={academicAchievements} />
            <DetailPanel title="Fellowships & Programmes" icon={<Sparkles size={20} />} records={fellowshipAchievements} />
          </div>
        </section>

        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-20">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="min-w-0 space-y-4">
              <p className="text-sm font-semibold uppercase text-portfolio-orange">Supporting Evidence</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-normal text-white md:text-4xl">
                Recognition that connects research quality, academic discipline and engineering growth.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/70">
                The most useful recognition is tied to substance: research contributions, quantitative training, practical AI engineering and continued skill development.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/research" variant="accent">
                  <Award size={17} /> Research Evidence
                </Button>
                <Button href="/projects/pediatric-xray-denoising" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-portfolio-charcoal">
                  <ArrowRight size={17} /> MICCAI Case Study
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {["Research recognition", "Academic distinction", "Fellowship programmes", "Professional certificates", "Medical imaging work", "Data science foundation"].map((item) => (
                <div key={item} className="rounded-portfolio border border-white/15 bg-white/5 p-4 text-sm font-semibold leading-6 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MiniAchievement({ achievement, icon }: { achievement: AchievementRecord; icon?: React.ReactNode }) {
  return (
    <Card className="h-full p-5 transition duration-200 hover:-translate-y-1 hover:border-portfolio-blue hover:shadow-portfolio-soft">
      <div className="flex min-w-0 items-start justify-between gap-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">
          {icon ?? (achievement.category === "research" ? <Trophy size={19} /> : achievement.category === "academic" ? <GraduationCap size={19} /> : <Sparkles size={19} />)}
        </div>
        {achievement.year ? <Tag tone="neutral">{achievement.year}</Tag> : null}
      </div>
      <p className="mt-5 text-xs font-semibold uppercase text-portfolio-orange">{achievement.status}</p>
      <h2 className="mt-2 text-xl font-semibold leading-7 text-portfolio-charcoal">{achievement.title}</h2>
      <p className="mt-2 text-sm font-semibold leading-6 text-portfolio-blue">{achievement.organization}</p>
      <p className="mt-3 text-sm leading-7 text-portfolio-slate">{achievement.summary}</p>
      {achievement.links?.length ? (
        <div className="mt-5 flex flex-col gap-2">
          {achievement.links.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-portfolio border border-portfolio-grey bg-white px-4 py-2 text-sm font-semibold text-portfolio-charcoal transition hover:border-portfolio-blue hover:text-portfolio-blue" prefetch={false}>
              {link.label} <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

function DetailPanel({ title, icon, records }: { title: string; icon: React.ReactNode; records: AchievementRecord[] }) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex min-w-0 items-center gap-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-portfolio-orange-soft text-portfolio-orange">{icon}</div>
        <h2 className="text-xl font-semibold text-portfolio-charcoal">{title}</h2>
      </div>
      <div className="mt-5 space-y-5">
        {records.map((record) => (
          <div key={record.id} className="border-t border-portfolio-grey pt-5 first:border-t-0 first:pt-0">
            <h3 className="text-lg font-semibold leading-7 text-portfolio-charcoal">{record.title}</h3>
            <p className="mt-1 text-sm font-semibold leading-6 text-portfolio-blue">{record.organization}</p>
            <p className="mt-2 text-sm leading-7 text-portfolio-slate">{record.summary}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

