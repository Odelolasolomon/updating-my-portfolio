import { Award, BookOpen, BrainCircuit, Download, GraduationCap, Mail, MapPin, Network, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { achievements } from "@/data/achievements";
import { profileAssets } from "@/data/assets";
import { profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: "About Odelola Solomon Oluwatobiloba, Senior Data Scientist and AI/ML Engineer."
};

const focusAreas = [
  "AI agents and governed tool execution",
  "LLM fine-tuning and RAG systems",
  "Computer vision for medical imaging",
  "MLOps, APIs, Docker, Kubernetes and cloud deployment"
];

const education = [
  {
    school: "University of Nigeria, Nsukka",
    program: "B.Sc. Statistics",
    period: "2020 - 2024",
    detail: "Final CGPA: 4.71/5.00; Top 5 in the Department of Statistics."
  },
  {
    school: "Obafemi Awolowo University",
    program: "Civil Engineering",
    period: "2016 - 2019",
    detail: "Earlier engineering foundation before specializing in data science and AI/ML systems."
  }
];

const principles = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Governed intelligence",
    text: "AI systems should include permissions, approvals, audit logging, validation and model governance when they affect real workflows."
  },
  {
    icon: <Network size={20} />,
    title: "Production-first design",
    text: "Models become useful when they are integrated through reliable APIs, monitored services, documented endpoints and maintainable deployment patterns."
  },
  {
    icon: <Sparkles size={20} />,
    title: "Measurable impact",
    text: "The strongest AI products improve decisions, reduce manual work, increase engagement and create visible operational value."
  }
];

export default function AboutPage() {
  return (
    <>
      <Header activeHref="/about" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
          <div className="portfolio-container min-w-0 space-y-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <aside className="min-w-0 space-y-5 lg:sticky lg:top-28">
                <Card className="overflow-hidden">
                  <div className="relative aspect-[4/5] min-h-[320px] bg-portfolio-charcoal sm:min-h-[420px] lg:min-h-[500px]">
                    <Image src={profileAssets.portrait.src} alt={profileAssets.portrait.alt} fill priority sizes="(min-width: 1024px) 430px, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(37,43,54,0.02),rgba(37,43,54,0.58))]" />
                    <div className="absolute inset-5 rounded-portfolio border border-white/20" />
                    <div className="absolute inset-x-5 bottom-5 rounded-portfolio bg-white/92 p-4 shadow-portfolio-card backdrop-blur">
                      <p className="text-sm font-semibold uppercase tracking-normal text-portfolio-blue">AI/ML Engineer</p>
                      <p className="mt-1 text-sm font-semibold text-portfolio-charcoal">Odelola Solomon</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-5 sm:p-6">
                  <h2 className="text-sm font-semibold uppercase text-portfolio-blue">Operational Snapshot</h2>
                  <dl className="mt-5 space-y-4 text-sm">
                    <SnapshotItem label="Location" value={profile.location} icon={<MapPin size={17} />} />
                    <SnapshotItem label="Current role" value="Senior Data Scientist / AI Engineer at GoPaddi" icon={<BrainCircuit size={17} />} />
                    <SnapshotItem label="Experience" value="5+ years designing, deploying and optimizing AI-driven systems" icon={<Award size={17} />} />
                    <SnapshotItem label="Research" value="Medical imaging, denoising, OCT angiography and computer vision" icon={<BookOpen size={17} />} />
                  </dl>
                </Card>
              </aside>

              <div className="min-w-0 space-y-8 lg:space-y-10">
                <div className="space-y-5">
                  <Tag tone="orange">About Me</Tag>
                  <h1 className="max-w-4xl text-[clamp(2.35rem,6vw,4rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">
                    AI systems builder, data scientist and applied AI researcher.
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-portfolio-slate">
                    I am {profile.name}, a Senior Data Scientist and AI/ML Engineer with 5+ years of experience designing, deploying and optimizing AI-driven systems across multiple industries.
                  </p>
                </div>

                <Card className="p-5 sm:p-7">
                  <h2 className="text-2xl font-semibold text-portfolio-charcoal">Who I Am</h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-portfolio-slate">
                    <p>
                      My work focuses on AI agent development, large language model fine-tuning, computer vision and scalable AI solutions including recommendation engines, predictive analytics and real-time personalization platforms.
                    </p>
                    <p>
                      I have built production agentic systems with governed tool registries, permission controls and audit logging, while also contributing to computer vision research applying hybrid transformer and graph neural network architectures to medical imaging.
                    </p>
                  </div>
                </Card>

                <div className="grid min-w-0 gap-5 md:grid-cols-2">
                  <Card className="p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-portfolio-charcoal">Engineering Philosophy</h2>
                    <p className="mt-4 text-sm leading-7 text-portfolio-slate">
                      I approach intelligent systems as production products: reliable, observable, permission-aware and measurable. The goal is not only to produce accurate model outputs, but to place them inside workflows that people can trust and operate.
                    </p>
                  </Card>
                  <Card className="p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-portfolio-charcoal">Leadership & Mentoring</h2>
                    <p className="mt-4 text-sm leading-7 text-portfolio-slate">
                      My leadership work includes Innovation Team Lead responsibilities and architecture leadership on the GoPaddi Unified AI Agent, with emphasis on reusable endpoints, model management, validation and cross-functional AI delivery.
                    </p>
                  </Card>
                </div>


                <Card className="overflow-hidden">
                  <div className="grid min-w-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-[260px] bg-portfolio-soft">
                      <Image src={profileAssets.journey.src} alt={profileAssets.journey.alt} fill sizes="(min-width: 1024px) 430px, 100vw" className="object-cover" />
                    </div>
                    <div className="p-5 sm:p-7">
                      <Tag tone="orange">Early Foundations</Tag>
                      <h2 className="mt-4 text-2xl font-semibold text-portfolio-charcoal">Quantitative curiosity shaped early.</h2>
                      <div className="mt-4 space-y-4 text-sm leading-7 text-portfolio-slate">
                        <p>
                          Before my professional AI work, I built a strong interest in mathematics, science and communication through early STEM leadership, debate and peer teaching.
                        </p>
                        <p>
                          I served in JETS, debate and mathematics-club leadership contexts, taught mathematics and science topics to peers, represented my school in mathematics competitions, and participated in a Lagos State science camp. Those experiences helped deepen my interest in quantitative problem-solving, especially calculus and applied statistics.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={profile.resumeHref} download className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-portfolio bg-portfolio-blue px-5 py-2.5 text-sm font-semibold text-white shadow-portfolio-soft transition hover:bg-blue-700">
                    <Download size={17} /> Download Resume
                  </a>
                  <Button href={`mailto:${profile.email}`} variant="secondary">
                    <Mail size={17} /> Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Focus Areas"
              title="Engineering and research interests"
              description="The strongest through-line in my work is taking advanced AI methods into operational systems that can be shipped, governed and improved."
            />
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((area) => (
                <Card key={area} className="p-5">
                  <div className="grid size-10 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">
                    <BrainCircuit size={18} />
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6 text-portfolio-charcoal">{area}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Education"
              title="Academic background"
              description="A quantitative foundation in statistics, strengthened by earlier engineering training and applied AI research experience."
            />
            <div className="grid min-w-0 gap-5">
              {education.map((item) => (
                <Card key={item.school} className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-full bg-portfolio-blue text-white">
                      <GraduationCap size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-portfolio-orange">{item.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-portfolio-charcoal">{item.program}</h3>
                      <p className="mt-1 text-sm font-semibold text-portfolio-blue">{item.school}</p>
                      <p className="mt-3 text-sm leading-6 text-portfolio-slate">{item.detail}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Technical Expertise"
              title="Tools and capabilities"
              description="A practical toolkit across model development, agent orchestration, APIs, infrastructure and deployment."
            />
            <Card className="p-5 sm:p-6">
              <div className="flex min-w-0 flex-wrap gap-2">
                {skillGroups.map((skill) => <Tag key={skill} tone="blue">{skill}</Tag>)}
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Principles"
              title="How I think about AI delivery"
              description="AI work becomes durable when research quality, product discipline and operational controls reinforce one another."
              className="[&_h2]:text-white [&_p:not(:first-child)]:text-white/70"
            />
            <div className="grid min-w-0 gap-5 lg:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-portfolio border border-white/15 bg-white/5 p-5 sm:p-6">
                  <div className="grid size-11 place-items-center rounded-full bg-white/10 text-portfolio-orange">{principle.icon}</div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1fr_1fr]">
            <Card className="p-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-portfolio-charcoal">Research Contributions</h2>
              <div className="mt-6 space-y-5">
                {publications.map((item) => (
                  <div key={item.title} className="border-t border-portfolio-grey pt-5 first:border-t-0 first:pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Tag tone="blue">{item.venue}</Tag>
                      <Tag tone="orange">{item.note}</Tag>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-7 text-portfolio-charcoal">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-portfolio-slate">{item.summary}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-portfolio-charcoal">Recognition</h2>
              <div className="mt-6 space-y-4">
                {achievements.slice(0, 4).map((achievement) => (
                  <div key={achievement} className="flex gap-3 rounded-portfolio border border-portfolio-grey bg-portfolio-soft p-4">
                    <Award className="mt-0.5 shrink-0 text-portfolio-blue" size={18} />
                    <p className="text-sm font-semibold leading-6 text-portfolio-charcoal">{achievement}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SnapshotItem({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{icon}</div>
      <div>
        <dt className="font-semibold text-portfolio-charcoal">{label}</dt>
        <dd className="mt-1 leading-6 text-portfolio-slate">{value}</dd>
      </div>
    </div>
  );
}






