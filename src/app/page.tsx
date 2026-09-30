import { Award, BrainCircuit, CloudCog, Download, ExternalLink, FlaskConical, Mail, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { TestimonialCard } from "@/components/data-display/TestimonialCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroVideo } from "@/components/home/HeroVideo";
import { StrengthCard } from "@/components/home/StrengthCard";
import { achievements } from "@/data/achievements";
import { experience } from "@/data/experience";
import { homepage, profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { skillGroups } from "@/data/skills";
import { linkedinRecommendationsHref, testimonials } from "@/data/testimonials";

const strengths = [
  {
    icon: <BrainCircuit size={20} />,
    label: "AI Agents",
    title: "Agentic Systems",
    description: "Designing governed AI agents with intent routing, tool execution, permissions, approvals, audit logging, and model governance."
  },
  {
    icon: <Sparkles size={20} />,
    label: "Generative AI",
    title: "LLMs and RAG",
    description: "Fine-tuning domain-specific LLMs and building retrieval-augmented systems for healthcare, travel, finance, and support workflows."
  },
  {
    icon: <FlaskConical size={20} />,
    label: "Research",
    title: "Computer Vision",
    description: "Working on medical-imaging research with transformer, graph neural network, and self-supervised learning methods."
  },
  {
    icon: <CloudCog size={20} />,
    label: "Delivery",
    title: "MLOps and Deployment",
    description: "Shipping intelligent systems through APIs, Docker, Kubernetes, cloud platforms, validation, monitoring, and production model management."
  }
];

const heroStats = [
  { value: "5+", label: "Years in AI/ML" },
  { value: "6+", label: "Production AI solutions shipped" },
  { value: "8+", label: "Product verticals supported" }
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-16">
          <div className="portfolio-container grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(480px,0.92fr)] xl:grid-cols-[minmax(0,1.12fr)_minmax(520px,0.88fr)]">
            <div className="order-2 min-w-0 space-y-6 lg:order-1 lg:space-y-7">
              <Tag tone="orange">Video-first portfolio introduction</Tag>
              <div className="min-w-0 space-y-4 lg:space-y-5">
                <h1 className="max-w-[12ch] text-[clamp(2.25rem,9vw,4.7rem)] font-semibold leading-[1.02] tracking-normal text-portfolio-charcoal sm:max-w-[13ch] lg:max-w-[11.5ch] xl:max-w-[12.5ch]">
                  {homepage.headline}
                </h1>
                <p className="max-w-3xl text-base font-semibold leading-7 text-portfolio-blue sm:text-lg">{profile.roleLine}</p>
                <p className="max-w-2xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">{homepage.intro}</p>
              </div>
              <div className="grid min-w-0 gap-3 sm:flex sm:flex-wrap">
                <a href={profile.resumeHref} download className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-portfolio bg-portfolio-blue px-5 py-2.5 text-sm font-semibold text-white shadow-portfolio-soft transition hover:bg-blue-700 sm:w-auto">
                  <Download size={17} /> Download Resume
                </a>
                <Button href={`mailto:${profile.email}`} variant="secondary" className="w-full sm:w-auto">
                  <Mail size={17} /> Get in Touch
                </Button>
              </div>
              <dl className="hidden min-w-0 gap-3 sm:grid sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-portfolio border border-portfolio-grey bg-white p-4 shadow-sm">
                    <dt className="text-2xl font-semibold text-portfolio-charcoal">{stat.value}</dt>
                    <dd className="mt-1 text-xs font-medium leading-5 text-portfolio-slate">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="order-1 min-w-0 lg:order-2">
              <HeroVideo />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Core Strengths"
              title="Professional Expertise"
              description="A focused mix of AI agent engineering, LLM systems, computer vision research, and production deployment."
            />
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {strengths.map((strength, index) => <StrengthCard key={strength.title} className={index === 3 ? "hidden md:flex" : undefined} {...strength} />)}
            </div>
          </div>
        </section>

        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Portfolio"
              title="Selected AI systems"
              description="A focused preview of AI systems, agent workflows, and applied ML platforms from my work."
            />
            <FeaturedProjects />
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Research"
              title="Computer vision research"
              description="Selected medical-imaging research using transformer, graph neural network, and self-supervised learning methods."
            />
            <div id="research-highlights" className="grid min-w-0 gap-5 lg:grid-cols-2">
              {publications.map((publication) => (
                <Card key={publication.title} className="min-w-0 p-5 sm:p-6">
                  <div className="flex min-w-0 flex-wrap items-center gap-3 text-sm text-portfolio-slate">
                    <Tag tone="blue">{publication.venue}</Tag>
                    <Tag tone="orange">{publication.note}</Tag>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-7 text-portfolio-charcoal">{publication.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-portfolio-slate">{publication.summary}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>


        <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                eyebrow="Social Proof"
                title="Recommendations from collaborators"
                description="A concise preview of verified LinkedIn recommendations, preserved as exact excerpts from the supplied source text."
              />
              <Link href={linkedinRecommendationsHref} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-portfolio border border-portfolio-grey bg-white px-4 py-2 text-sm font-semibold text-portfolio-charcoal transition hover:border-portfolio-blue hover:text-portfolio-blue">
                LinkedIn recommendations <ExternalLink size={15} />
              </Link>
            </div>
            <div className="grid min-w-0 gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
            </div>
          </div>
        </section>
        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Career Path"
              title="Selected experience"
              description="Selected roles spanning production AI agents, automation systems, healthcare LLMs, and intelligent product delivery."
              className="[&_h2]:text-white [&_p:not(:first-child)]:text-white/70"
            />
            <div className="grid min-w-0 gap-5 lg:grid-cols-3">
              {experience.map((role) => (
                <div key={`${role.organization}-${role.period}-${role.title}`} className="min-w-0 rounded-portfolio border border-white/15 bg-white/5 p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-sm font-semibold text-portfolio-orange">
                    <span className="size-2 shrink-0 rounded-full bg-portfolio-orange" /> {role.period}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{role.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{role.organization}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-white/70">
                    {role.bullets.map((bullet) => <li key={bullet}>+ {bullet}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader eyebrow="Skills & Recognition" title="Technical toolkit and recognition" description="A practical stack for building, deploying, and operating intelligent systems." />
            <div className="grid min-w-0 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <Card className="min-w-0 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-portfolio-charcoal">Technical Toolkit</h3>
                <div className="mt-5 flex min-w-0 flex-wrap gap-2">
                  {skillGroups.map((skill) => <Tag key={skill} tone="blue">{skill}</Tag>)}
                </div>
              </Card>
              <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <Card key={achievement} className="min-w-0 p-5">
                    <div className="grid size-10 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">
                      {index % 2 === 0 ? <Award size={18} /> : <ShieldCheck size={18} />}
                    </div>
                    <p className="mt-4 text-sm font-semibold leading-6 text-portfolio-charcoal">{achievement}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}







