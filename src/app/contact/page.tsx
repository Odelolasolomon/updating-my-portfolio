import { BrainCircuit, BriefcaseBusiness, Download, Mail, MapPin, Microscope, Network, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Odelola Solomon Oluwatobiloba for AI/ML engineering, AI agents, research collaboration, technical leadership and consulting enquiries."
};

const contactCards = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: profile.location
  },
  {
    icon: <Download size={20} />,
    label: "Resume",
    value: "Download verified resume",
    href: profile.resumeHref
  }
];

const collaborationAreas = [
  {
    icon: <BrainCircuit size={20} />,
    title: "AI/ML Engineering",
    text: "Production machine learning systems, model integration, backend APIs, evaluation and deployment workflows."
  },
  {
    icon: <Network size={20} />,
    title: "AI Agents and LLM Systems",
    text: "Agent architecture, tool execution, RAG systems, model governance, permissions and audit-aware workflows."
  },
  {
    icon: <Microscope size={20} />,
    title: "Research Collaboration",
    text: "Applied AI research across medical imaging, computer vision, representation learning and trustworthy AI systems."
  },
  {
    icon: <UsersRound size={20} />,
    title: "Technical Leadership",
    text: "Architecture direction, cross-functional delivery, technical enablement and AI product strategy."
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    title: "Consulting and Advisory",
    text: "Focused guidance for teams evaluating AI systems, automation opportunities, MLOps practices or implementation plans."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "AI Reliability",
    text: "Validation, governance, safety boundaries, monitoring patterns and production readiness for intelligent systems."
  }
];

export default function ContactPage() {
  return (
    <>
      <Header activeHref="/contact" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
          <div className="portfolio-container min-w-0 space-y-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div className="min-w-0 space-y-5">
                <Tag tone="orange">Contact</Tag>
                <h1 className="max-w-4xl text-[clamp(2.45rem,6vw,4.65rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">
                  Get in touch
                </h1>
                <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">
                  Reach out about AI/ML engineering roles, agentic AI systems, applied research collaboration, technical leadership or focused consulting conversations.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href={`mailto:${profile.email}`}>
                    <Mail size={17} /> Email Directly
                  </Button>
                  <Button href={profile.resumeHref} variant="secondary">
                    <Download size={17} /> Download Resume
                  </Button>
                </div>
              </div>
              <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {contactCards.map((item) => (
                  <ContactInfoCard key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <Card className="p-5 sm:p-7">
              <div className="mb-7 space-y-3">
                <p className="text-sm font-semibold uppercase text-portfolio-blue">Professional Enquiry</p>
                <h2 className="text-3xl font-semibold tracking-normal text-portfolio-charcoal md:text-4xl">Inquire or initiate work</h2>
                <p className="text-base leading-7 text-portfolio-slate">
                  Share the context and the form will prepare an email draft to my verified address.
                </p>
              </div>
              <ContactForm />
            </Card>

            <div className="min-w-0 space-y-5 lg:sticky lg:top-28">
              <Card className="overflow-hidden">
                <div className="bg-portfolio-charcoal p-5 text-white sm:p-6">
                  <div className="grid size-12 place-items-center rounded-full bg-white/10 text-portfolio-orange">
                    <Sparkles size={22} />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-white">Direct communication</h2>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    For the fastest route, email me directly with the role, project, collaboration goal or research context.
                  </p>
                </div>
                <div className="p-5 sm:p-6">
                  <a href={`mailto:${profile.email}`} className="focus-ring inline-flex min-w-0 items-center gap-3 rounded-portfolio border border-portfolio-grey bg-portfolio-soft p-4 text-sm font-semibold text-portfolio-charcoal transition hover:border-portfolio-blue hover:text-portfolio-blue">
                    <Mail className="shrink-0 text-portfolio-blue" size={18} />
                    <span className="break-all">{profile.email}</span>
                  </a>
                </div>
              </Card>
              <Card className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-portfolio-charcoal">Helpful context</h2>
                <p className="mt-3 text-sm leading-7 text-portfolio-slate">
                  Include the role, project scope, research question, timeline and any relevant technical constraints so I can respond with useful next steps.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-20">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Collaboration Areas"
              title="Where a conversation can start"
              description="A concise map of the professional enquiries this page is designed to support."
            />
            <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {collaborationAreas.map((area) => (
                <Card key={area.title} className="p-5 sm:p-6">
                  <div className="grid size-11 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{area.icon}</div>
                  <h2 className="mt-5 text-xl font-semibold text-portfolio-charcoal">{area.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-portfolio-slate">{area.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-20">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="min-w-0 space-y-4">
              <p className="text-sm font-semibold uppercase text-portfolio-orange">Next Step</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-normal text-white md:text-4xl">Let us connect around AI systems that need depth, delivery and responsible execution.</h2>
              <p className="max-w-2xl text-base leading-7 text-white/70">
                I am happy to review well-scoped opportunities across AI engineering, research collaboration, technical leadership and applied intelligent systems.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={`mailto:${profile.email}`} variant="accent">
                  <Mail size={17} /> Start with Email
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {["AI/ML engineering", "Agentic AI systems", "Applied research", "Technical leadership", "MLOps strategy", "AI reliability"].map((item) => (
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

function ContactInfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <Card className="h-full p-5 transition duration-200 hover:border-portfolio-blue hover:shadow-portfolio-soft">
      <div className="grid size-10 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{icon}</div>
      <p className="mt-4 text-xs font-semibold uppercase text-portfolio-orange">{label}</p>
      <p className="mt-2 break-words text-sm font-semibold leading-6 text-portfolio-charcoal">{value}</p>
    </Card>
  );

  if (!href) return content;
  return <a href={href} className="focus-ring block min-w-0">{content}</a>;
}


