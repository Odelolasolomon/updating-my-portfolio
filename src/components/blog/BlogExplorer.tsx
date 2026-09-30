"use client";

import { FileText, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { ArticleCard } from "@/components/blog/ArticleCard";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { blogCategories, draftArticles, type BlogArticle, type BlogCategory } from "@/data/blog";
import { cn } from "@/lib/utils";

type CategoryFilter = (typeof blogCategories)[number];

export function BlogExplorer({ articles, draftCount = draftArticles.length }: { articles: BlogArticle[]; draftCount?: number }) {
  const [active, setActive] = useState<CategoryFilter>("All");
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const term = query.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatch = active === "All" || article.category === active;
      const searchMatch = !term || [article.title, article.excerpt, article.category, ...article.tags].join(" ").toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [active, query, articles]);

  const featured = filteredArticles[0];
  const rest = filteredArticles.slice(1);

  return (
    <div className="min-w-0 space-y-8 lg:space-y-10">
      <div className="grid min-w-0 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <label className="focus-within:border-portfolio-blue focus-within:ring-2 focus-within:ring-portfolio-blue/10 flex min-w-0 items-center gap-3 rounded-portfolio border border-portfolio-grey bg-white px-4 py-3 shadow-sm transition">
          <Search className="shrink-0 text-portfolio-slate" size={18} />
          <span className="sr-only">Search articles</span>
          <input
            id="blog-search"
            name="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles, topics or tags..."
            className="min-w-0 flex-1 bg-transparent text-sm text-portfolio-charcoal outline-none placeholder:text-portfolio-slate"
          />
        </label>
        <div className="flex min-w-0 flex-wrap gap-2" role="tablist" aria-label="Blog categories">
          {blogCategories.map((category) => {
            const selected = active === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(category)}
                className={cn(
                  "focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  selected ? "border-portfolio-blue bg-portfolio-blue text-white shadow-portfolio-soft" : "border-portfolio-grey bg-white text-portfolio-slate hover:border-portfolio-blue hover:text-portfolio-blue"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {featured ? (
        <div className="space-y-8">
          <ArticleCard article={featured} featured />
          <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      ) : (
        <EmptyState active={active} query={query} />
      )}

      <Card className="p-5 sm:p-6">
        <div className="flex min-w-0 items-start gap-4">
          <div className="grid size-11 shrink-0 place-items-center rounded-full bg-portfolio-orange-soft text-portfolio-orange">
            <Sparkles size={20} />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-portfolio-charcoal">Draft pipeline</h2>
            <p className="mt-2 text-sm leading-7 text-portfolio-slate">
              These topics are stored as drafts and are not presented as published articles. They are placeholders for future approved writing.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {draftArticles.slice(0, draftCount).map((article) => <Tag key={article.slug} tone="neutral">{article.category}</Tag>)}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function EmptyState({ active, query }: { active: CategoryFilter; query: string }) {
  const filtered = active !== "All" || query.trim().length > 0;
  return (
    <Card className="overflow-hidden">
      <div className="grid min-w-0 gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[240px] overflow-hidden bg-portfolio-charcoal text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(37,99,235,0.55),transparent_30%),radial-gradient(circle_at_76%_24%,rgba(249,115,22,0.32),transparent_26%),linear-gradient(135deg,#252b36,#111827)]" />
          <div className="absolute inset-5 rounded-portfolio border border-white/15" />
          <div className="relative flex h-full min-h-[240px] flex-col justify-between p-6">
            <FileText size={32} className="text-portfolio-orange" />
            <div>
              <p className="text-sm font-semibold uppercase text-white/70">No published articles yet</p>
              <div className="mt-3 h-2 w-24 rounded-full bg-portfolio-blue" />
            </div>
          </div>
        </div>
        <div className="p-5 sm:p-8">
          <Tag tone="orange">Editorial Status</Tag>
          <h2 className="mt-5 text-2xl font-semibold leading-8 text-portfolio-charcoal">Published writing will appear here after approval.</h2>
          <p className="mt-3 text-sm leading-7 text-portfolio-slate">
            {filtered
              ? "No approved published article matches the current search or category filter."
              : "No approved articles have been supplied yet, so the public blog listing is intentionally empty rather than filled with invented posts."}
          </p>
          <p className="mt-4 text-sm leading-7 text-portfolio-slate">
            The structure is ready for technical essays on AI agents, LLM engineering, MLOps, reliability, medical AI, computer vision and engineering leadership.
          </p>
        </div>
      </div>
    </Card>
  );
}

export type { BlogCategory };





