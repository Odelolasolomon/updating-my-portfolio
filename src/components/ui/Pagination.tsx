import Link from "next/link";

import { cn } from "@/lib/utils";

export function Pagination({ pages, currentPage }: { pages: { label: string; href: string }[]; currentPage: string }) {
  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center gap-2">
      {pages.map((page) => {
        const active = page.label === currentPage;
        return (
          <Link key={page.href} href={page.href} aria-current={active ? "page" : undefined} className={cn("focus-ring grid min-h-10 min-w-10 place-items-center rounded-portfolio border px-3 text-sm font-semibold", active ? "border-portfolio-blue bg-portfolio-blue text-white" : "border-portfolio-grey bg-white text-portfolio-charcoal hover:border-portfolio-blue hover:text-portfolio-blue")}>
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
}
