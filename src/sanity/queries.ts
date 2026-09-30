import { defineQuery } from "next-sanity";

const articleFields = `
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  excerpt,
  author,
  readTime,
  "publishedAt": coalesce(publishedAt, _updatedAt),
  updatedAt,
  status,
  "category": category->title,
  tags,
  heroLabel,
  "coverImageUrl": coverImage.asset->url,
  coverImageAlt,
  seoTitle,
  seoDescription,
  body,
  "related": relatedArticles[]->slug.current
`;

export const publishedArticlesQuery = defineQuery(`*[_type == "article" && !(_id in path("drafts.**")) && defined(slug.current)] | order(coalesce(publishedAt, _updatedAt) desc) {
${articleFields}
}`);

export const publishedArticleBySlugQuery = defineQuery(`*[_type == "article" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
${articleFields}
}`);
