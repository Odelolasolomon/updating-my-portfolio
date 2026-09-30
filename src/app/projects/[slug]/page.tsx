import { ArrowRight, ExternalLink, LockKeyhole } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudySection, slugify } from "@/components/projects/CaseStudySection";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectSpecs } from "@/components/projects/ProjectSpecs";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.shortTitle,
    description: project.excerpt
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const toc = ["Executive Summary", "Problem and Objectives", "My Role and Contributions", "Architecture and System Design", "Implementation Approach", "Evaluation and Outcomes", "Confidentiality Note", ...project.sections.map((section) => section.title)];

  return (
    <>
      <Header activeHref="/projects" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <ProjectHero project={project} />

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div className="min-w-0">
              <CaseStudySection title="Executive Summary">
                <div className="space-y-4 text-base leading-8 text-portfolio-slate">
                  <p>{project.overview}</p>
                  <p>{project.excerpt}</p>
                </div>
              </CaseStudySection>

              <CaseStudySection title="Problem and Objectives">
                <div className="space-y-5 text-sm leading-7 text-portfolio-slate">
                  <p>{project.sections[0]?.body[0] ?? project.overview}</p>
                  <ul className="space-y-3">
                    {(project.sections[0]?.bullets ?? project.responsibilities).map((item) => <Bullet key={item}>{item}</Bullet>)}
                  </ul>
                </div>
              </CaseStudySection>

              <CaseStudySection title="My Role and Contributions">
                <div className="space-y-5 text-sm leading-7 text-portfolio-slate">
                  <p>{project.sections[1]?.body[0] ?? `As ${project.role}, I contributed to the architecture, implementation and delivery of this project.`}</p>
                  <ul className="space-y-3">
                    {project.responsibilities.map((item) => <Bullet key={item}>{item}</Bullet>)}
                  </ul>
                </div>
              </CaseStudySection>

              <CaseStudySection title="Architecture and System Design">
                <div className="space-y-5 text-sm leading-7 text-portfolio-slate">
                  <ArchitectureDiagram items={project.architecture} />
                  <ul className="space-y-3">
                    {project.architecture.map((item) => <Bullet key={item}>{item}</Bullet>)}
                  </ul>
                </div>
              </CaseStudySection>

              <CaseStudySection title="Implementation Approach">
                <ul className="space-y-3 text-sm leading-7 text-portfolio-slate">
                  {project.implementation.map((item) => <Bullet key={item}>{item}</Bullet>)}
                </ul>
              </CaseStudySection>

              <CaseStudySection title="Evaluation and Outcomes">
                <div className="grid min-w-0 gap-4 sm:grid-cols-3">
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} className="rounded-portfolio border border-portfolio-grey bg-portfolio-orange-soft p-4">
                      <p className="text-sm font-semibold leading-6 text-portfolio-orange">{outcome}</p>
                    </div>
                  ))}
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-portfolio-slate">
                  {project.evaluation.map((item) => <Bullet key={item}>{item}</Bullet>)}
                </ul>
              </CaseStudySection>

              <CaseStudySection title="Confidentiality Note">
                <div className="flex gap-3 text-sm leading-7 text-portfolio-slate">
                  <LockKeyhole className="mt-1 shrink-0 text-portfolio-blue" size={18} />
                  <p>{project.confidentiality}</p>
                </div>
              </CaseStudySection>

              {project.sections.slice(2).map((section) => (
                <CaseStudySection key={section.title} title={section.title}>
                  <div className="space-y-4 text-sm leading-7 text-portfolio-slate">
                    {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets?.length ? <ul className="space-y-3">{section.bullets.map((item) => <Bullet key={item}>{item}</Bullet>)}</ul> : null}
                  </div>
                </CaseStudySection>
              ))}

              {project.links?.length ? (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {project.links.map((link) => (
                    <Button key={link.href} href={link.href} variant="secondary" target="_blank" rel="noreferrer">
                      <ExternalLink size={17} /> {link.label}
                    </Button>
                  ))}
                </div>
              ) : null}
            </div>

            <aside className="min-w-0 space-y-5">
              <ProjectSpecs project={project} />
              <Card className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-portfolio-charcoal">On This Page</h2>
                <nav className="mt-4 space-y-2 text-sm text-portfolio-slate" aria-label="Case study sections">
                  {toc.map((item) => <a key={item} href={`#${slugify(item)}`} className="focus-ring block rounded-md px-2 py-1.5 hover:bg-portfolio-blue-soft hover:text-portfolio-blue">{item}</a>)}
                </nav>
              </Card>
            </aside>
          </div>
        </section>

        <RelatedProjects project={project} />
      </main>
      <Footer />
    </>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex min-w-0 gap-3">
      <ArrowRight className="mt-1.5 shrink-0 text-portfolio-orange" size={15} />
      <span>{children}</span>
    </li>
  );
}

function ArchitectureDiagram({ items }: { items: string[] }) {
  return (
    <div className="grid min-w-0 gap-3 rounded-portfolio border border-portfolio-grey bg-portfolio-soft p-4 sm:grid-cols-3">
      {items.slice(0, 3).map((item, index) => (
        <div key={item} className="relative min-w-0 rounded-portfolio border border-portfolio-grey bg-white p-4">
          <span className="grid size-8 place-items-center rounded-full bg-portfolio-blue text-xs font-semibold text-white">{index + 1}</span>
          <p className="mt-3 text-sm font-semibold leading-6 text-portfolio-charcoal">{item}</p>
        </div>
      ))}
    </div>
  );
}


