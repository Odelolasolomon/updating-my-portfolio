import Link from "next/link";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { primaryNavigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Header({ activeHref = "/", className }: { activeHref?: string; className?: string }) {
  return (
    <header className={cn("sticky top-0 z-50 border-b border-portfolio-grey bg-white/95 backdrop-blur", className)}>
      <div className="portfolio-container relative flex h-20 min-w-0 items-center justify-between gap-4 xl:gap-8">
        <Link href="/" className="focus-ring flex min-w-0 items-center gap-3 font-semibold text-portfolio-charcoal" prefetch>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-portfolio-blue text-sm font-bold text-white shadow-portfolio-soft">OS</span>
          <span className="hidden truncate sm:inline xl:max-w-[18rem]">{profile.name}</span>
          <span className="truncate sm:hidden">{profile.shortName}</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-2 text-sm font-medium text-portfolio-slate xl:flex">
          {primaryNavigation.map((item) => {
            const active = item.href === activeHref;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={item.status !== "planned"}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-full px-3 py-2 transition-colors hover:bg-portfolio-blue-soft hover:text-portfolio-blue",
                  active && "bg-portfolio-blue-soft text-portfolio-blue"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <MobileMenu activeHref={activeHref} />
      </div>
    </header>
  );
}
