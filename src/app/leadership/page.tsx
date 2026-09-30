import { ArrowRight, BrainCircuit, GitBranch, Lightbulb, Mail, Network, ShieldCheck, UsersRound, Workflow } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import { EvidenceShowcase } from "@/components/data-display/EvidenceShowcase";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { leadershipEvidence } from "@/data/assets";
import { leadershipHighlights, leadershipPrinciples, knowledgeSharing, type LeadershipCard } from "@/data/leadership";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Leadership and mentoring profile for Odelola Solomon Oluwatobiloba across AI architecture, innovation delivery, research collaboration and technical enablement."
};

const stats = [
  { value: "3", label: "Verified leadership tracks" },
  { value: "8+", label: "Product verticals influenced" },
  { value: "2", label: "Research collaborations listed" }
];

const toneStyles: Record<LeadershipCard["tone"], string> = {
  blue: "bg-portfolio-blue text-white",
  orange: "bg-portfolio-orange text-white",
  charcoal: "bg-portfolio-charcoal text-white"
};

const icons = [<BrainCircuit key="ai" size={20} />, <Workflow key="workflow" size={20} />, <GitBranch key="research" size={20} />];

export default function LeadershipPage() {
  return (
    <>
      <Header activeHref="/leadership" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
          <div className="portfolio-container min-w-0 space-y-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Leadership" }]} />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div className="min-w-0 space-y-5">
                <Tag tone="orange">Leadership & Mentoring</Tag>
                <h1 className="max-w-4xl text-[clamp(2.45rem,6vw,4.65rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">Leadership & Community</h1>
                <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">
                  A focused view of my leadership through AI architecture ownership, innovation delivery, cross-functional collaboration, research contribution and practical knowledge sharing.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href="/experience">
                    <Workflow size={17} /> View Experience
                  </Button>
                  <Button href={`mailto:${profile.email}`} variant="secondary">
                    <Mail size={17} /> Discuss Collaboration
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
              eyebrow="Vision & Management"
              title="Technical leadership grounded in shipped systems"
              description="Selected leadership evidence from shipped AI systems, innovation delivery and applied research collaboration."
            />
            <div className="grid min-w-0 gap-6 lg:grid-cols-3">
              {leadershipHighlights.map((item, index) => <LeadershipHighlight key={item.title} item={item} icon={icons[index]} />)}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="min-w-0 space-y-6 lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="Sharing Knowledge"
                title="Enablement through systems, documentation and support"
                description="The focus here is practical enablement work: reusable systems, documented integration patterns, healthcare support workflows and cross-functional technical clarity."
              />
              <Card className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-portfolio-charcoal">Leadership Philosophy</h2>
                <div className="mt-5 space-y-4">
                  {leadershipPrinciples.map((principle) => (
                    <div key={principle.title} className="border-t border-portfolio-grey pt-4 first:border-t-0 first:pt-0">
                      <h3 className="text-base font-semibold text-portfolio-charcoal">{principle.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-portfolio-slate">{principle.text}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            <div className="grid min-w-0 gap-5 md:grid-cols-3 lg:grid-cols-1">
              {knowledgeSharing.map((item, index) => (
                <Card key={item.title} className="p-5 sm:p-6">
                  <div className="grid size-11 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{index === 0 ? <Network size={20} /> : index === 1 ? <UsersRound size={20} /> : <Lightbulb size={20} />}</div>
                  <h2 className="mt-5 text-xl font-semibold text-portfolio-charcoal">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-portfolio-slate">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Teaching, Mentorship & Community"
              title="Evidence of practical knowledge sharing"
              description="Selected teaching and speaking evidence is shown as compact, privacy-conscious previews. Technical leadership remains the primary story; this section supports the community and mentorship thread."
            />
            <div className="grid min-w-0 gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <Card className="p-5 sm:p-6">
                <Tag tone="blue">Community Leadership</Tag>
                <h2 className="mt-5 text-2xl font-semibold leading-8 text-portfolio-charcoal">Ingressive for Good Community</h2>
                <p className="mt-3 text-sm font-semibold text-portfolio-blue">Data Team Lead - 2023</p>
                <p className="mt-4 text-sm leading-7 text-portfolio-slate">
                  This community work supports the broader leadership story around technical teaching, data-science enablement and practical AI education. It is not presented as a current role.
                </p>
                <Button href="/about" variant="secondary" className="mt-5">
                  Early foundations on About <ArrowRight size={16} />
                </Button>
              </Card>
              <EvidenceShowcase items={leadershipEvidence} columns="three" />
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Selected Evidence"
              title="Where the leadership shows up"
              description="Direct links to implemented pages where the underlying leadership, architecture or research collaboration is documented."
            />
            <div className="grid min-w-0 gap-5 lg:grid-cols-4">
              <EvidenceCard title="Experience Timeline" text="Role-level leadership context across GoPaddi, Lighthill and research-adjacent AI work." href="/experience" />
              <EvidenceCard title="Unified AI Agent" text="Architecture leadership for governed tool execution, model management and production agent delivery." href="/projects/unified-ai-agent" />
              <EvidenceCard title="Investment Agents" text="Innovation-team leadership and multi-agent investment intelligence delivery." href="/projects/investment-intelligence-agents" />
              <EvidenceCard title="Research" text="Medical imaging research collaboration and applied computer vision contributions." href="/research" />
            </div>
          </div>
        </section>

        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="min-w-0 space-y-4">
              <p className="text-sm font-semibold uppercase text-portfolio-orange">Collaboration</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-normal text-white md:text-4xl">Leadership that connects architecture, delivery and responsible AI practice.</h2>
              <p className="max-w-2xl text-base leading-7 text-white/70">
                I work best where AI systems need both technical depth and coordination: aligning model behavior, product workflows, governance requirements and measurable operational outcomes.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={`mailto:${profile.email}`} variant="accent">
                  <Mail size={17} /> Start a Conversation
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {["AI architecture ownership", "Innovation delivery", "Research collaboration", "Cross-functional enablement", "Governed execution", "Production reliability"].map((item) => (
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

function LeadershipHighlight({ item, icon }: { item: LeadershipCard; icon: React.ReactNode }) {
  return (
    <Card className="h-full min-w-0 overflow-hidden">
      <div className={`${toneStyles[item.tone]} p-5 sm:p-6`}>
        <div className="grid size-11 place-items-center rounded-full bg-white/15 text-white">{icon}</div>
        <p className="mt-5 text-sm font-semibold uppercase text-white/80">{item.context}</p>
        <h2 className="mt-3 text-2xl font-semibold leading-8 text-white">{item.title}</h2>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-sm leading-7 text-portfolio-slate">{item.summary}</p>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-portfolio-slate">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex min-w-0 gap-3">
              <ArrowRight className="mt-1.5 shrink-0 text-portfolio-orange" size={15} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-2">
          {item.evidence.map((link) => (
            <Link key={link.href + link.label} href={link.href} className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-portfolio border border-portfolio-grey bg-white px-4 py-2 text-sm font-semibold text-portfolio-charcoal transition hover:border-portfolio-blue hover:text-portfolio-blue" prefetch={false}>
              {link.label} <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}

function EvidenceCard({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <Link href={href} className="focus-ring group block min-w-0" prefetch={false}>
      <Card className="h-full p-5 transition duration-200 group-hover:-translate-y-1 group-hover:border-portfolio-blue group-hover:shadow-portfolio-soft">
        <div className="grid size-10 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue"><ShieldCheck size={18} /></div>
        <h2 className="mt-5 text-xl font-semibold text-portfolio-charcoal">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-portfolio-slate">{text}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-portfolio-blue">Open Evidence <ArrowRight size={16} /></span>
      </Card>
    </Link>
  );
}



