import { ArrowRight, Award, BrainCircuit, FlaskConical, HeartPulse, Mail, Microscope, Network, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import { EvidenceShowcase } from "@/components/data-display/EvidenceShowcase";
import { PublicationCard } from "@/components/data-display/PublicationCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProjectPreview } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { researchEvidence } from "@/data/assets";
import { profile } from "@/data/profile";
import { projects, projectHref } from "@/data/projects";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Research",
  description: "Research and publications by Odelola Solomon Oluwatobiloba in applied AI, computer vision, medical imaging and trustworthy machine learning."
};

const researchProjects = projects.filter((project) => project.category === "Research");

const domains = [
  {
    icon: <Microscope size={20} />,
    title: "Medical Imaging",
    text: "Research implementations around pediatric chest X-ray denoising and OCT angiography vessel segmentation."
  },
  {
    icon: <BrainCircuit size={20} />,
    title: "Representation Learning",
    text: "Self-supervised learning, masked autoencoders and domain-aware feature learning for limited-label settings."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Trustworthy AI Systems",
    text: "A practical research lens shaped by production AI work: validation, governance, reliability and safe deployment boundaries."
  }
];

const methodology = [
  "Structure-aware denoising",
  "Dual-decoder model design",
  "Masked autoencoding",
  "Self-supervised representation learning",
  "Limited-label segmentation",
  "Downstream classification evaluation",
  "Clinical data privacy awareness",
  "Production-informed model validation"
];

const stats = [
  { value: "2", label: "Verified research entries" },
  { value: "MICCAI", label: "Medical imaging venue listed" },
  { value: "ICPR", label: "Computer vision venue listed" }
];

export default function ResearchPage() {
  return (
    <>
      <Header activeHref="/research" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
          <div className="portfolio-container min-w-0 space-y-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Research" }]} />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div className="min-w-0 space-y-5">
                <Tag tone="orange">Research & Publications</Tag>
                <h1 className="max-w-4xl text-[clamp(2.55rem,6vw,4.8rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">Research</h1>
                <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">
                  Applied AI research focused on computer vision, medical imaging, trustworthy model behavior and practical machine learning systems that can move from experiment to responsible deployment.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href={`mailto:${profile.email}`}>
                    <Mail size={17} /> Discuss Research Collaboration
                  </Button>
                  <Button href="/projects" variant="secondary">
                    <Sparkles size={17} /> View Project Case Studies
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
              eyebrow="Domains of Discovery"
              title="Research interests and technical areas"
              description="My research direction sits at the intersection of applied computer vision, medical-imaging constraints, representation learning and production-aware AI reliability."
            />
            <div className="grid min-w-0 gap-5 lg:grid-cols-3">
              {domains.map((domain) => (
                <Card key={domain.title} className="p-5 sm:p-6">
                  <div className="grid size-11 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{domain.icon}</div>
                  <h2 className="mt-5 text-xl font-semibold text-portfolio-charcoal">{domain.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-portfolio-slate">{domain.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Featured Contributions"
              title="Research implementations"
              description="Conceptual previews are shown until approved paper figures, diagrams or screenshots are supplied."
            />
            <div className="grid min-w-0 gap-6 lg:grid-cols-2">
              {researchProjects.map((project) => (
                <Link key={project.slug} href={projectHref(project.slug)} className="focus-ring group block min-w-0" prefetch={false}>
                  <Card className="h-full min-w-0 overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-portfolio-blue hover:shadow-portfolio-soft">
                    <ProjectPreview project={project} />
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap gap-2">
                        <Tag tone="blue">{project.period}</Tag>
                        <Tag tone="orange">{project.outcomes[1] ?? project.status}</Tag>
                      </div>
                      <h2 className="mt-5 text-2xl font-semibold leading-8 text-portfolio-charcoal">{project.shortTitle}</h2>
                      <p className="mt-3 text-sm leading-7 text-portfolio-slate">{project.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-portfolio-blue">Open Research Case Study <ArrowRight size={16} /></span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Research Evidence"
              title="Posters, presentations and participation evidence"
              description="Selected evidence is shown with clear caveats so the page supports research credibility without overclaiming publication status or event details."
            />
            <EvidenceShowcase items={researchEvidence} columns="two" />
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="min-w-0 space-y-6 lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="Publications"
                title="Conference research entries"
                description="Publication metadata is limited to verified details from the supplied materials, with unsupported identifiers and external links omitted."
              />
              <Card className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-portfolio-charcoal">Methodology Focus</h2>
                <div className="mt-5 flex min-w-0 flex-wrap gap-2">
                  {methodology.map((item) => <Tag key={item} tone="blue">{item}</Tag>)}
                </div>
              </Card>
            </div>
            <div className="min-w-0 space-y-5">
              {publications.map((publication) => <PublicationCard key={publication.slug} publication={publication} />)}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="min-w-0 space-y-4">
              <p className="text-sm font-semibold uppercase text-portfolio-orange">Recognition & Collaboration</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-normal text-white md:text-4xl">Applied research grounded in medical-imaging rigor and engineering delivery.</h2>
              <p className="max-w-2xl text-base leading-7 text-white/70">
                The strongest research thread in my work is practical: improving model behavior under clinical imaging constraints while carrying production engineering discipline into validation, governance and deployment readiness.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={`mailto:${profile.email}`} variant="accent">
                  <Mail size={17} /> Start a Research Conversation
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              <RecognitionCard icon={<Award size={18} />} title="MICCAI 2025" text="Structure-aware pediatric chest X-ray denoising work is listed in the resume with a Best Poster Award." />
              <RecognitionCard icon={<FlaskConical size={18} />} title="ICPR 2026" text="VAMAE OCT angiography work is listed in the resume as a vessel-aware self-supervised autoencoder contribution." />
              <RecognitionCard icon={<HeartPulse size={18} />} title="Medical Imaging" text="Research focus includes pediatric chest X-rays and OCT angiography, with sensitive data and figures omitted until approved." />
              <RecognitionCard icon={<Network size={18} />} title="Engineering Bridge" text="Research interests connect directly to production AI systems, healthcare LLMs, MLOps and trustworthy deployment patterns." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function RecognitionCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-portfolio border border-white/15 bg-white/5 p-5">
      <div className="grid size-10 place-items-center rounded-full bg-white/10 text-portfolio-orange">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
    </div>
  );
}


