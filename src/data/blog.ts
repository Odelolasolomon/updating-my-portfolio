import type { PortableTextBlock } from "next-sanity";

export type BlogCategory = "AI Agents" | "LLM Engineering" | "Machine Learning" | "MLOps" | "AI Reliability" | "Computer Vision" | "Medical AI" | "Engineering Leadership";
export type ArticleStatus = "published" | "draft";

export type BlogSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  code?: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  category: BlogCategory;
  status: ArticleStatus;
  excerpt: string;
  author: string;
  readTime?: string;
  publishedAt?: string;
  updatedAt?: string;
  tags: string[];
  source: string;
  heroLabel: string;
  sections: BlogSection[];
  related: string[];
  body?: PortableTextBlock[];
  coverImageUrl?: string;
  coverImageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export const blogCategories = [
  "All",
  "AI Agents",
  "LLM Engineering",
  "Machine Learning",
  "MLOps",
  "AI Reliability",
  "Computer Vision",
  "Medical AI",
  "Engineering Leadership"
] as const;

export const draftArticles: BlogArticle[] = [
  {
    slug: "governed-ai-agents-production",
    title: "Governed AI Agents in Production Systems",
    category: "AI Agents",
    status: "draft",
    excerpt: "Draft topic for a future article on permission-aware tool execution, approval flows, audit logging and model governance.",
    author: "Odelola Solomon Oluwatobiloba",
    tags: ["AI Agents", "Governance", "Tool Execution"],
    source: "Draft topic derived from approved project and experience content; not published.",
    heroLabel: "Draft topic",
    sections: [],
    related: []
  },
  {
    slug: "medical-ai-evaluation-notes",
    title: "Evaluation Notes for Medical AI Systems",
    category: "Medical AI",
    status: "draft",
    excerpt: "Draft topic for future writing on clinical-model evaluation boundaries, privacy and trustworthy medical imaging workflows.",
    author: "Odelola Solomon Oluwatobiloba",
    tags: ["Medical AI", "Evaluation", "Computer Vision"],
    source: "Draft topic derived from approved research content; not published.",
    heroLabel: "Draft topic",
    sections: [],
    related: []
  },
  {
    slug: "mlops-for-agentic-workflows",
    title: "MLOps Patterns for Agentic Workflows",
    category: "MLOps",
    status: "draft",
    excerpt: "Draft topic for future writing on deployment, monitoring and reliability patterns for agentic AI systems.",
    author: "Odelola Solomon Oluwatobiloba",
    tags: ["MLOps", "AI Reliability", "Agents"],
    source: "Draft topic derived from approved skills and experience content; not published.",
    heroLabel: "Draft topic",
    sections: [],
    related: []
  }
];

export const publishedArticles: BlogArticle[] = [];

export function articleHref(slug: string) {
  return `/blog/${slug}`;
}
