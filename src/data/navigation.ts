export type NavItem = {
  label: string;
  href: string;
  status?: "ready" | "planned";
};

import { routes } from "@/lib/routes";

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: routes.home, status: "ready" },
  { label: "About", href: routes.about, status: "ready" },
  { label: "Experience", href: routes.experience, status: "ready" },
  { label: "Projects", href: routes.projects, status: "ready" },
  { label: "Research", href: routes.research, status: "ready" },
  { label: "Skills", href: routes.skills, status: "ready" },
  { label: "Leadership", href: routes.leadership, status: "ready" },
  { label: "Achievements", href: routes.achievements, status: "ready" },
  { label: "Blog", href: routes.blog, status: "ready" },
  { label: "Contact", href: routes.contact, status: "ready" }
];

export const footerNavigation = {
  navigation: primaryNavigation.slice(0, 4),
  knowledge: [
    { label: "Research", href: routes.research, status: "ready" },
    { label: "Skills", href: routes.skills, status: "ready" },
    { label: "Blog", href: routes.blog, status: "ready" },
    { label: "Contact", href: routes.contact, status: "ready" }
  ] satisfies NavItem[]
} as const;







