import type { BlogArticle, BlogCategory } from "@/data/blog";
import { publishedArticles } from "@/data/blog";
import { testPublishedArticles } from "@/data/blog-test";
import { sanityClient } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import { publishedArticleBySlugQuery, publishedArticlesQuery } from "@/sanity/queries";

const validCategories: BlogCategory[] = ["AI Agents", "LLM Engineering", "Machine Learning", "MLOps", "AI Reliability", "Computer Vision", "Medical AI", "Engineering Leadership"];

type SanityArticle = Omit<Partial<BlogArticle>, "category"> & { category?: string };

function isKnownCategory(value: string | undefined): value is BlogCategory {
  return Boolean(value && validCategories.includes(value as BlogCategory));
}

function formatDisplayDate(value: string | undefined) {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(date);
}

function normalizeArticle(article: SanityArticle): BlogArticle | null {
  if (!article.slug || !article.title || !article.excerpt) return null;
  return {
    slug: article.slug,
    title: article.title,
    category: isKnownCategory(article.category) ? article.category : "AI Agents",
    status: "published",
    excerpt: article.excerpt,
    author: article.author || "Odelola Solomon Oluwatobiloba",
    readTime: article.readTime,
    publishedAt: formatDisplayDate(article.publishedAt),
    updatedAt: formatDisplayDate(article.updatedAt),
    tags: article.tags || [],
    source: "Sanity CMS published content",
    heroLabel: article.heroLabel || "Technical article",
    sections: article.sections || [],
    related: article.related || [],
    body: article.body,
    coverImageUrl: article.coverImageUrl,
    coverImageAlt: article.coverImageAlt,
    seoTitle: article.seoTitle,
    seoDescription: article.seoDescription
  };
}

function getLocalPublishedArticles() {
  if (process.env.BLOG_ENABLE_TEST_ARTICLES === "true") return testPublishedArticles;
  return publishedArticles;
}

export async function getPublicArticles(): Promise<BlogArticle[]> {
  if (!isSanityConfigured) return getLocalPublishedArticles();

  try {
    const articles = await sanityClient.fetch<SanityArticle[]>(publishedArticlesQuery, {}, { next: { revalidate: 60, tags: ["blog"] } });
    const normalized = articles.map(normalizeArticle).filter((article): article is BlogArticle => Boolean(article));
    return normalized.length ? normalized : getLocalPublishedArticles();
  } catch {
    return getLocalPublishedArticles();
  }
}

export async function getPublicArticle(slug: string): Promise<BlogArticle | undefined> {
  if (!isSanityConfigured) return getLocalPublishedArticles().find((article) => article.slug === slug);

  try {
    const article = await sanityClient.fetch<SanityArticle | null>(publishedArticleBySlugQuery, { slug }, { next: { revalidate: 60, tags: ["blog", `blog:${slug}`] } });
    return article ? normalizeArticle(article) || undefined : undefined;
  } catch {
    return getLocalPublishedArticles().find((item) => item.slug === slug);
  }
}

export async function getRelatedPublicArticles(article: BlogArticle): Promise<BlogArticle[]> {
  const articles = await getPublicArticles();
  return article.related.map((slug) => articles.find((item) => item.slug === slug)).filter((item): item is BlogArticle => Boolean(item));
}

