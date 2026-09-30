import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { EmptyRelatedArticles, RelatedArticles } from "@/components/blog/RelatedArticles";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getPublicArticle, getPublicArticles, getRelatedPublicArticles } from "@/lib/blog";
import { isNewsletterConfigured } from "@/lib/newsletter";
import { profile } from "@/data/profile";

export async function generateStaticParams() {
  const articles = await getPublicArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

type BlogArticleRouteProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: BlogArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublicArticle(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt
  };
}

export default async function BlogArticlePage({ params }: BlogArticleRouteProps) {
  const { slug } = await params;
  const article = await getPublicArticle(slug);
  if (!article) notFound();
  const related = await getRelatedPublicArticles(article);

  return (
    <>
      <Header activeHref="/blog" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <ArticleHero article={article} />
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="portfolio-container grid min-w-0 gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <ArticleBody article={article} />
            <aside className="min-w-0 space-y-5 lg:sticky lg:top-28">
              <TableOfContents article={article} />
              <NewsletterSignup compact configured={isNewsletterConfigured} source="blog-article" />
              <Card className="p-5 sm:p-6">
                <h2 className="text-sm font-semibold uppercase text-portfolio-blue">Stay Connected</h2>
                <p className="mt-3 text-sm leading-7 text-portfolio-slate">Reach out about article topics, technical reviews or collaboration around AI engineering and applied research.</p>
                <Button href={`mailto:${profile.email}`} className="mt-5 w-full" variant="secondary">
                  <Mail size={17} /> Contact Solomon
                </Button>
              </Card>
              <EmptyRelatedArticles />
            </aside>
          </div>
        </section>
        <RelatedArticles articles={related} />
      </main>
      <Footer />
    </>
  );
}


