import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { footerNavigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-portfolio-grey bg-portfolio-charcoal text-white">
      <div className="portfolio-container grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p className="max-w-md text-sm leading-6 text-white/70">{profile.summary}</p>
        </div>
        <FooterColumn title="Navigation" items={footerNavigation.navigation} />
        <FooterColumn title="Knowledge" items={footerNavigation.knowledge} />
        <div>
          <h3 className="text-sm font-semibold uppercase text-white">Connect</h3>
          <div className="mt-4 flex gap-3">
            {profile.socials.linkedin ? (
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="focus-ring grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white" aria-label="LinkedIn recommendations">
                <ExternalLink size={15} />
              </a>
            ) : null}
            <a href={`mailto:${profile.email}`} className="focus-ring grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white" aria-label="Email Solomon">
              <ExternalLink size={15} />
            </a>
          </div>
          <p className="mt-4 text-xs leading-5 text-white/55">{profile.location} · {profile.email}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="portfolio-container text-xs text-white/55">© 2026 {profile.name}. Built for AI & Engineering Excellence. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: readonly { label: string; href: string; status?: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item.href}>
            <Link className="focus-ring hover:text-white" href={item.href} prefetch={item.status !== "planned"}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


