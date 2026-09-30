import { Award, BrainCircuit, CloudCog, Code2, Database, FlaskConical, GitBranch, Mail, Network, ServerCog, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import type { Metadata } from "next";

import { SkillGroup } from "@/components/data-display/SkillGroup";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and expertise for Odelola Solomon Oluwatobiloba across AI agents, LLMs, machine learning, medical AI, backend engineering and MLOps."
};

const iconMap = [
  <Network key="agent" size={20} />,
  <Sparkles key="llm" size={20} />,
  <BrainCircuit key="ml" size={20} />,
  <FlaskConical key="vision" size={20} />,
  <Database key="data" size={20} />,
  <Code2 key="api" size={20} />,
  <CloudCog key="cloud" size={20} />,
  <ShieldCheck key="governance" size={20} />,
  <Workflow key="leadership" size={20} />
];

const stats = [
  { value: "9", label: "Capability categories" },
  { value: "5+", label: "Years in AI/ML systems" },
  { value: "7", label: "Evidence-linked case studies" }
];

const deliveryAreas = [
  {
    icon: <ServerCog size={20} />,
    title: "Production AI Delivery",
    text: "Backend APIs, model management, deployment automation, validation and service reliability."
  },
  {
    icon: <GitBranch size={20} />,
    title: "Research-to-System Translation",
    text: "Computer vision and medical AI methods connected to usable products, case studies and reproducible technical narratives."
  },
  {
    icon: <Award size={20} />,
    title: "Leadership and Governance",
    text: "Architecture ownership, innovation-team leadership, approvals, permissions, auditability and cross-functional AI delivery."
  }
];

export default function SkillsPage() {
  return (
    <>
      <Header activeHref="/skills" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
          <div className="portfolio-container min-w-0 space-y-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Skills" }]} />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div className="min-w-0 space-y-5">
                <Tag tone="orange">Skills & Technical Expertise</Tag>
                <h1 className="max-w-4xl text-[clamp(2.55rem,6vw,4.8rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">Skills</h1>
                <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">
                  A structured view of my technical capabilities across AI agents, LLM systems, machine learning, medical AI, backend engineering, MLOps, governance and technical leadership.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href="/projects">
                    <Sparkles size={17} /> View Evidence Projects
                  </Button>
                  <Button href={`mailto:${profile.email}`} variant="secondary">
                    <Mail size={17} /> Discuss Technical Fit
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

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Capability Matrix"
              title="Technical categories backed by project evidence"
              description="Each category is organized around resume, project and research evidence, with emphasis on real systems rather than abstract proficiency scoring."
            />
            <div className="grid min-w-0 gap-5 lg:grid-cols-2">
              {skillCategories.map((category, index) => <SkillGroup key={category.id} category={category} icon={iconMap[index]} />)}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Technical Delivery"
              title="How the skills work together"
              description="The page is organized as a practical engineering matrix: model capability, software delivery, reliability controls and leadership all reinforce one another."
            />
            <div className="grid min-w-0 gap-5 lg:grid-cols-3">
              {deliveryAreas.map((area) => (
                <Card key={area.title} className="p-5 sm:p-6">
                  <div className="grid size-11 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{area.icon}</div>
                  <h2 className="mt-5 text-xl font-semibold text-portfolio-charcoal">{area.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-portfolio-slate">{area.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="min-w-0 space-y-4">
              <p className="text-sm font-semibold uppercase text-portfolio-orange">Capability Summary</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-normal text-white md:text-4xl">A senior AI engineering toolkit for building, shipping and governing intelligent systems.</h2>
              <p className="max-w-2xl text-base leading-7 text-white/70">
                The skill set is intentionally balanced: research literacy, product-focused AI engineering, backend integration, cloud delivery and governance patterns that make intelligent systems usable in real workflows.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/experience" variant="accent">
                  <Workflow size={17} /> View Experience Timeline
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {[
                "AI agent architecture",
                "LLM and RAG delivery",
                "Computer vision research",
                "MLOps and cloud deployment",
                "Backend API integration",
                "Model governance and reliability"
              ].map((item) => (
                <div key={item} className="rounded-portfolio border border-white/15 bg-white/5 p-4 text-sm font-semibold leading-6 text-white/80">{item}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

