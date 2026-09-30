import { BookOpenText, Mail, Rss, Search, Sparkles } from "lucide-react";
import type { Metadata } from "next";

import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { draftArticles } from "@/data/blog";
import { getPublicArticles } from "@/lib/blog";
import { isNewsletterConfigured } from "@/lib/newsletter";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing by Odelola Solomon Oluwatobiloba on AI agents, LLM engineering, machine learning, MLOps, medical AI and engineering leadership."
};

const focusAreas = [
  { icon: <Sparkles size={20} />, title: "AI Systems", text: "Agents, LLM workflows, RAG, orchestration, model governance and production safety." },
  { icon: <BookOpenText size={20} />, title: "Research Notes", text: "Computer vision, medical AI, evaluation boundaries and applied research translation." },
  { icon: <Rss size={20} />, title: "Engineering Practice", text: "MLOps, reliability, backend architecture, delivery leadership and operational lessons." }
];

export default async function BlogPage() {
  const articles = await getPublicArticles();
  const stats = [
    { value: String(articles.length), label: "Published articles" },
    { value: String(draftArticles.length), label: "Draft topics prepared" },
    { value: "8", label: "Editorial categories" }
  ];

  return (
    <>
      <Header activeHref="/blog" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
          <div className="portfolio-container min-w-0 space-y-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div className="min-w-0 space-y-5">
                <Tag tone="orange">Articles & Insights</Tag>
                <h1 className="max-w-4xl text-[clamp(2.45rem,6vw,4.65rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">
                  Blog
                </h1>
                <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">
                  A technical writing section prepared for essays on AI agents, LLM engineering, machine learning, MLOps, AI reliability, computer vision, medical AI and engineering leadership.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href="#articles">
                    <Search size={17} /> Browse Articles
                  </Button>
                  <Button href={`mailto:${profile.email}`} variant="secondary">
                    <Mail size={17} /> Discuss an Article
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

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Editorial Direction"
              title="Technical essays grounded in real AI engineering work"
              description="The blog is structured for long-form writing, but only approved published articles will appear in the public listing."
            />
            <div className="grid min-w-0 gap-5 lg:grid-cols-3">
              {focusAreas.map((area) => (
                <Card key={area.title} className="p-5 sm:p-6">
                  <div className="grid size-11 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{area.icon}</div>
                  <h2 className="mt-5 text-xl font-semibold text-portfolio-charcoal">{area.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-portfolio-slate">{area.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="articles" className="bg-portfolio-soft py-12 sm:py-16 lg:py-20">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Article Library"
              title="Search and filter published writing"
              description="Search and filters are functional now; the listing remains empty until verified articles are supplied and marked as published."
            />
            <BlogExplorer articles={articles} draftCount={draftArticles.length} />
            <NewsletterSignup configured={isNewsletterConfigured} source="blog-listing" />
          </div>
        </section>

        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-20">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="min-w-0 space-y-4">
              <p className="text-sm font-semibold uppercase text-portfolio-orange">Collaboration</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-normal text-white md:text-4xl">Writing that connects research, systems architecture and production delivery.</h2>
              <p className="max-w-2xl text-base leading-7 text-white/70">
                Future articles can connect portfolio case studies with practical technical breakdowns, while keeping unpublished work and unsupported claims out of public view.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={`mailto:${profile.email}`} variant="accent">
                  <Mail size={17} /> Propose a Topic
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {["AI agents", "LLM engineering", "MLOps", "AI reliability", "Medical AI", "Engineering leadership"].map((item) => (
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


