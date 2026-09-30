import type { BlogArticle } from "@/data/blog";

export const testPublishedArticles: BlogArticle[] = [
  {
    slug: "test-ai-agent-publishing-pipeline",
    title: "Test AI Agent Publishing Pipeline",
    category: "AI Agents",
    status: "published",
    excerpt: "A clearly labelled local test article used to verify CMS-backed article rendering without publishing real blog content.",
    author: "Odelola Solomon Oluwatobiloba",
    readTime: "4 min read",
    publishedAt: "Test mode",
    tags: ["Test Content", "AI Agents", "CMS Verification"],
    source: "Local test fixture enabled only when BLOG_ENABLE_TEST_ARTICLES=true.",
    heroLabel: "Test article",
    related: [],
    sections: [
      {
        id: "purpose",
        title: "Purpose",
        body: ["This article exists only for local rendering verification. It is not real published writing and is disabled unless the explicit test-content flag is enabled."],
        bullets: ["Verifies article cards.", "Verifies the reusable detail template.", "Verifies draft routes remain protected."]
      },
      {
        id: "cms-readiness",
        title: "CMS Readiness",
        body: ["When Sanity is configured, published CMS articles replace this test fixture through the server-side blog fetch helpers."],
        code: "BLOG_ENABLE_TEST_ARTICLES=true"
      }
    ]
  }
];
