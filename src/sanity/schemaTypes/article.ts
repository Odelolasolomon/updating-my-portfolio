import { defineArrayMember, defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "publishing", title: "Publishing" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "content", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, group: "content", validation: (Rule) => Rule.required().max(220) }),
    defineField({ name: "body", title: "Full rich-text content", type: "array", group: "content", of: [defineArrayMember({ type: "block" }), defineArrayMember({ type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })] })] }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", group: "content", options: { hotspot: true } }),
    defineField({ name: "coverImageAlt", title: "Cover image alt text", type: "string", group: "content" }),
    defineField({ name: "author", title: "Author", type: "string", group: "content", initialValue: "Odelola Solomon Oluwatobiloba", validation: (Rule) => Rule.required() }),
    defineField({ name: "category", title: "Category", type: "reference", group: "content", to: [{ type: "category" }], validation: (Rule) => Rule.required() }),
    defineField({ name: "tags", title: "Tags", type: "array", group: "content", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "status", title: "Publishing status", type: "string", group: "publishing", options: { layout: "radio", list: [{ title: "Draft", value: "draft" }, { title: "Published", value: "published" }] }, initialValue: "draft", validation: (Rule) => Rule.required() }),
    defineField({ name: "publishedAt", title: "Publication date", type: "datetime", group: "publishing", hidden: ({ document }) => document?.status !== "published" }),
    defineField({ name: "readTime", title: "Estimated reading time", type: "string", group: "publishing", description: "Example: 8 min read. Omit if not verified." }),
    defineField({ name: "heroLabel", title: "Article preview label", type: "string", group: "publishing", initialValue: "Technical article" }),
    defineField({ name: "relatedArticles", title: "Related articles", type: "array", group: "publishing", of: [{ type: "reference", to: [{ type: "article" }] }] }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string", group: "seo" }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 3, group: "seo", validation: (Rule) => Rule.max(170) })
  ],
  preview: {
    select: { title: "title", subtitle: "status", media: "coverImage" }
  }
});
