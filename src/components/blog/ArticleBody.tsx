import { PortableText } from "@portabletext/react";
import type { ReactNode } from "react";

import type { BlogArticle } from "@/data/blog";

const portableComponents = {
  block: {
    h2: ({ children }: { children?: ReactNode }) => <h2 className="mt-10 text-2xl font-semibold tracking-normal text-portfolio-charcoal md:text-3xl">{children}</h2>,
    h3: ({ children }: { children?: ReactNode }) => <h3 className="mt-8 text-xl font-semibold tracking-normal text-portfolio-charcoal">{children}</h3>,
    normal: ({ children }: { children?: ReactNode }) => <p className="text-base leading-8 text-portfolio-slate">{children}</p>,
    blockquote: ({ children }: { children?: ReactNode }) => <blockquote className="border-l-4 border-portfolio-orange bg-portfolio-orange-soft p-5 text-base font-medium leading-8 text-portfolio-charcoal">{children}</blockquote>
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => <ul className="ml-5 list-disc space-y-2 text-base leading-8 text-portfolio-slate">{children}</ul>,
    number: ({ children }: { children?: ReactNode }) => <ol className="ml-5 list-decimal space-y-2 text-base leading-8 text-portfolio-slate">{children}</ol>
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => <strong className="font-semibold text-portfolio-charcoal">{children}</strong>,
    em: ({ children }: { children?: ReactNode }) => <em>{children}</em>,
    link: ({ children, value }: { children?: ReactNode; value?: { href?: string } }) => (
      <a href={value?.href} className="font-semibold text-portfolio-blue underline underline-offset-4" target={value?.href?.startsWith("http") ? "_blank" : undefined} rel={value?.href?.startsWith("http") ? "noreferrer" : undefined}>
        {children}
      </a>
    )
  }
};

export function ArticleBody({ article }: { article: BlogArticle }) {
  if (article.body?.length) {
    return (
      <article className="min-w-0 space-y-6 text-portfolio-charcoal">
        <PortableText value={article.body} components={portableComponents} />
      </article>
    );
  }

  return (
    <article className="min-w-0 space-y-10 text-portfolio-charcoal">
      {article.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-normal text-portfolio-charcoal md:text-3xl">{section.title}</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-portfolio-slate">
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {section.bullets?.length ? (
            <ul className="mt-5 space-y-3 text-sm leading-7 text-portfolio-slate">
              {section.bullets.map((bullet) => <li key={bullet} className="rounded-portfolio border border-portfolio-grey bg-portfolio-soft p-4">{bullet}</li>)}
            </ul>
          ) : null}
          {section.code ? (
            <pre className="mt-6 overflow-x-auto rounded-portfolio bg-portfolio-charcoal p-5 text-sm leading-7 text-white"><code>{section.code}</code></pre>
          ) : null}
        </section>
      ))}
    </article>
  );
}
