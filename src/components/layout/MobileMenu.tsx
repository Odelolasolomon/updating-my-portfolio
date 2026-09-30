"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu({ activeHref = "/", className }: { activeHref?: string; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("xl:hidden", className)}>
      <button
        type="button"
        className="focus-ring grid size-10 place-items-center rounded-full border border-portfolio-grey bg-white text-portfolio-charcoal shadow-sm"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Toggle navigation</span>
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open ? (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-16 rounded-portfolio border border-portfolio-grey bg-white p-3 shadow-portfolio-card">
          {primaryNavigation.map((item) => {
            const active = item.href === activeHref;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={item.status !== "planned"}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "focus-ring flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-portfolio-charcoal hover:bg-portfolio-blue-soft hover:text-portfolio-blue",
                  active && "bg-portfolio-blue-soft text-portfolio-blue"
                )}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
