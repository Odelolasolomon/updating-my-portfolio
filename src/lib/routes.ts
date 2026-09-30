export const routes = {
  home: "/",
  about: "/about",
  experience: "/experience",
  projects: "/projects",
  projectDetail: (slug: string) => `/projects/${slug}`,
  research: "/research",
  skills: "/skills",
  leadership: "/leadership",
  achievements: "/achievements",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  contact: "/contact"
} as const;
