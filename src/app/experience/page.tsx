import { ArrowRight, Award, BriefcaseBusiness, BrainCircuit, Building2, CalendarDays, Download, FlaskConical, Layers3, Mail, MapPin, Network, Rocket, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { experience, researchMilestones, type ExperienceRole } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience for Odelola Solomon Oluwatobiloba across AI engineering, data science, automation, MLOps and AI research."
};

const careerStats = [
  { value: "5+", label: "Years building AI/ML systems" },
  { value: "8+", label: "Product verticals supported" },
  { value: "6+", label: "Production AI solutions shipped" }
];

const capabilityTracks = [
  {
    icon: <BrainCircuit size={20} />,
    title: "Agentic AI Architecture",
    text: "Intent routing, governed tool execution, permissions, approvals, audit logging, prompt safety and model governance."
  },
  {
    icon: <Network size={20} />,
    title: "Data & Automation Systems",
    text: "Financial data pipelines, monitoring workflows, real-time analysis, forecasting and multi-agent insight synthesis."
  },
  {
    icon: <Rocket size={20} />,
    title: "Production ML Delivery",
    text: "Containerized ML pipelines, model-serving infrastructure, MLOps workflows, API integration and deployment reliability."
  }
];

const emphasisStyles: Record<ExperienceRole["emphasis"], { icon: ReactNode; label: string; className: string }> = {
  leadership: {
    icon: <ShieldCheck size={18} />,
    label: "Leadership",
    className: "bg-portfolio-blue text-white"
  },
  systems: {
    icon: <Layers3 size={18} />,
    label: "Systems",
    className: "bg-portfolio-blue-soft text-portfolio-blue"
  },
  research: {
    icon: <FlaskConical size={18} />,
    label: "Applied Research",
    className: "bg-portfolio-orange-soft text-portfolio-orange"
  },
  mlops: {
    icon: <Rocket size={18} />,
    label: "MLOps",
    className: "bg-portfolio-charcoal text-white"
  }
};

export default function ExperiencePage() {
  return (
    <>
      <Header activeHref="/experience" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
          <div className="portfolio-container min-w-0 space-y-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Experience" }]} />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="min-w-0 space-y-5">
                <Tag tone="orange">Professional Experience</Tag>
                <h1 className="max-w-4xl text-[clamp(2.55rem,6vw,4.8rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">
                  Professional Experience
                </h1>
                <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">
                  A professional record of technical leadership, production AI systems, automation, healthcare LLM work, recommendation systems, MLOps and applied computer vision research.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={profile.resumeHref} download className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-portfolio bg-portfolio-blue px-5 py-2.5 text-sm font-semibold text-white shadow-portfolio-soft transition hover:bg-blue-700">
                    <Download size={17} /> Download Resume
                  </a>
                  <Button href={`mailto:${profile.email}`} variant="secondary">
                    <Mail size={17} /> Discuss Collaboration
                  </Button>
                </div>
              </div>

              <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {careerStats.map((stat) => (
                  <Card key={stat.label} className="p-5">
                    <p className="text-3xl font-semibold text-portfolio-blue">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-portfolio-slate">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="min-w-0 space-y-6 lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="Career Timeline"
                title="Roles and technical mandates"
                description="Each role below focuses on concrete engineering responsibilities, shipped systems, technical leadership and measurable outcomes."
              />
              <div className="grid min-w-0 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {capabilityTracks.map((track) => (
                  <div key={track.title} className="rounded-portfolio border border-portfolio-grey bg-portfolio-soft p-5">
                    <div className="grid size-10 place-items-center rounded-full bg-white text-portfolio-blue shadow-sm">{track.icon}</div>
                    <h2 className="mt-4 text-base font-semibold text-portfolio-charcoal">{track.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-portfolio-slate">{track.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-w-0 space-y-6 lg:pl-8">
              <div className="absolute bottom-4 left-3 top-4 hidden w-px bg-portfolio-grey lg:block" aria-hidden="true" />
              {experience.map((role, index) => <ExperienceCard key={`${role.organization}-${role.period}`} role={role} index={index} />)}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Research & Academic Milestones"
              title="Applied research connected to production practice"
              description="Research work from the resume that supports the same technical direction: robust computer vision, medical imaging and practical model performance."
            />
            <div className="grid min-w-0 gap-5 lg:grid-cols-2">
              {researchMilestones.map((milestone) => (
                <Card key={milestone.title} className="p-5 sm:p-6">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <Tag tone="blue">Research</Tag>
                    <Tag tone="orange">{milestone.context}</Tag>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold leading-7 text-portfolio-charcoal">{milestone.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-portfolio-slate">{milestone.detail}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="min-w-0 space-y-4">
              <p className="text-sm font-semibold uppercase text-portfolio-orange">Working Style</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-normal text-white md:text-4xl">Technical leadership across model quality, platform reliability and shipped product value.</h2>
              <p className="max-w-2xl text-base leading-7 text-white/70">
                My experience combines research discipline with production engineering: validated model behavior, reliable APIs, deployment automation, auth-aware system design and measurable operational impact.
              </p>
            </div>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              <ContrastPoint icon={<Building2 size={18} />} title="Cross-functional delivery" text="Support, CRM, finance, recruitment, healthcare, investment operations and travel-personalization workflows." />
              <ContrastPoint icon={<Award size={18} />} title="Measured outcomes" text="Measured gains in incident reduction, retention, latency, production speed, accuracy and engagement." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ExperienceCard({ role, index }: { role: ExperienceRole; index: number }) {
  const emphasis = emphasisStyles[role.emphasis];

  return (
    <article className="relative min-w-0">
      <div className="absolute -left-[2.42rem] top-7 hidden size-5 rounded-full border-4 border-white bg-portfolio-blue shadow-sm lg:block" aria-hidden="true" />
      <Card className="overflow-hidden">
        <div className="grid min-w-0 gap-0 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)]">
          <div className="border-b border-portfolio-grey bg-portfolio-soft p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full bg-white text-sm font-semibold text-portfolio-blue shadow-sm">{String(index + 1).padStart(2, "0")}</span>
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${emphasis.className}`}>{emphasis.icon}{emphasis.label}</span>
            </div>
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-2 text-sm font-semibold text-portfolio-orange"><CalendarDays size={16} /> {role.period}</p>
              <h2 className="text-2xl font-semibold leading-8 text-portfolio-charcoal">{role.title}</h2>
              <p className="flex items-center gap-2 text-sm font-semibold text-portfolio-blue"><BriefcaseBusiness size={16} /> {role.organization}</p>
              {role.location ? <p className="flex items-center gap-2 text-sm text-portfolio-slate"><MapPin size={16} /> {role.location}</p> : null}
            </div>
            <div className="mt-6 grid gap-3">
              {role.highlights.map((highlight) => (
                <div key={highlight} className="rounded-portfolio border border-portfolio-grey bg-white px-4 py-3 text-sm font-semibold leading-6 text-portfolio-charcoal">
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 p-5 sm:p-6">
            <p className="text-base leading-8 text-portfolio-slate">{role.summary}</p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase text-portfolio-blue">Core responsibilities & outcomes</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-portfolio-slate">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex min-w-0 gap-3">
                    <ArrowRight className="mt-1.5 shrink-0 text-portfolio-orange" size={15} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex min-w-0 flex-wrap gap-2">
              {role.technologies.map((technology) => <Tag key={technology} tone="blue">{technology}</Tag>)}
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
}

function ContrastPoint({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-portfolio border border-white/15 bg-white/5 p-5">
      <div className="grid size-10 place-items-center rounded-full bg-white/10 text-portfolio-orange">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
    </div>
  );
}




