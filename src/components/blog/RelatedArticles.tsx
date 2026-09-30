import { ArrowRight } from "lucide-react";

import { ArticleCard } from "@/components/blog/ArticleCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { BlogArticle } from "@/data/blog";

export function RelatedArticles({ articles }: { articles: BlogArticle[] }) {
  if (!articles.length) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="portfolio-container min-w-0 space-y-8">
        <SectionHeader eyebrow="Related Articles" title="Continue reading" description="Additional published writing related to this topic." />
        <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </div>
    </section>
  );
}

export function EmptyRelatedArticles() {
  return (
    <div className="rounded-portfolio border border-portfolio-grey bg-portfolio-soft p-5 text-sm leading-6 text-portfolio-slate">
      Related articles will appear here once additional approved posts are published. <ArrowRight className="ml-1 inline text-portfolio-orange" size={15} />
    </div>
  );
}
