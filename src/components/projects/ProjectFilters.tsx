"use client";

import type { ProjectCategory, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

type FilterValue = (typeof projectCategories)[number];

export function ProjectFilters({ categories, active, onChange }: { categories: readonly FilterValue[]; active: FilterValue; onChange: (category: FilterValue) => void }) {
  return (
    <div className="flex min-w-0 flex-wrap gap-2" role="tablist" aria-label="Project categories">
      {categories.map((category) => {
        const selected = active === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(category)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              selected ? "border-portfolio-blue bg-portfolio-blue text-white shadow-portfolio-soft" : "border-portfolio-grey bg-white text-portfolio-slate hover:border-portfolio-blue hover:text-portfolio-blue"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export type { FilterValue, ProjectCategory };

