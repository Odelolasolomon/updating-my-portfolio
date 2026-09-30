"use client";

import { ExternalLink, FileText, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { PortfolioAsset } from "@/data/assets";
import { cn } from "@/lib/utils";

export function EvidenceShowcase({ items, columns = "three" }: { items: PortfolioAsset[]; columns?: "two" | "three" }) {
  const [active, setActive] = useState<PortfolioAsset | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function openEvidence(item: PortfolioAsset, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActive(item);
  }

  function closeEvidence() {
    setActive(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <>
      <div className={cn("grid min-w-0 gap-5", columns === "two" ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3")}>
        {items.map((item) => (
          <Card key={item.id} className="flex h-full min-w-0 flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-portfolio-blue hover:shadow-portfolio-soft">
            <EvidencePreview item={item} />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex min-w-0 flex-wrap gap-2">
                <Tag tone="blue">{item.type}</Tag>
                <Tag tone="orange">{item.status}</Tag>
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-7 text-portfolio-charcoal">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-portfolio-slate">{item.caption}</p>
              {item.caveat ? <p className="mt-3 rounded-portfolio bg-portfolio-orange-soft px-3 py-2 text-xs font-semibold leading-5 text-portfolio-orange">{item.caveat}</p> : null}
              {item.evidenceHref ? (
                <button
                  type="button"
                  onClick={(event) => openEvidence(item, event.currentTarget)}
                  className="focus-ring mt-auto inline-flex min-h-10 items-center justify-center gap-2 rounded-portfolio border border-portfolio-grey bg-white px-4 py-2 text-sm font-semibold text-portfolio-charcoal transition hover:border-portfolio-blue hover:text-portfolio-blue"
                >
                  <Maximize2 size={15} /> View evidence
                </button>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
      {active ? <EvidenceModal item={active} onClose={closeEvidence} /> : null}
    </>
  );
}

function EvidencePreview({ item }: { item: PortfolioAsset }) {
  if (!item.src || !item.width || !item.height) {
    return (
      <div className="grid aspect-[16/10] place-items-center bg-portfolio-charcoal text-white">
        <div className="text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-full bg-white/10 text-portfolio-orange">
            <FileText size={22} />
          </div>
          <p className="mt-4 text-sm font-semibold">{item.type}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] min-w-0 overflow-hidden bg-portfolio-soft">
      <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
    </div>
  );
}

function EvidenceModal({ item, onClose }: { item: PortfolioAsset; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = `evidence-title-${item.id}`;
  const isPdf = item.evidenceHref?.toLowerCase().endsWith(".pdf");
  const imageEvidenceSrc = !isPdf ? item.evidenceHref ?? item.src : undefined;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusable = getFocusable(dialog);
    focusable[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "Tab" && dialog) {
        const items = getFocusable(dialog);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-portfolio-charcoal/75 p-4 backdrop-blur-sm" role="presentation" onMouseDown={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-portfolio bg-white shadow-portfolio-card"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-portfolio-grey p-4 sm:p-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase text-portfolio-blue">{item.type}</p>
            <h2 id={titleId} className="mt-1 text-xl font-semibold leading-7 text-portfolio-charcoal">{item.title}</h2>
          </div>
          <button type="button" onClick={onClose} className="focus-ring grid size-10 shrink-0 place-items-center rounded-full border border-portfolio-grey text-portfolio-charcoal transition hover:border-portfolio-blue hover:text-portfolio-blue" aria-label="Close evidence viewer">
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[calc(92vh-92px)] overflow-auto bg-portfolio-soft p-4 sm:p-5">
          {isPdf && item.evidenceHref ? (
            <div className="space-y-4">
              <iframe src={item.evidenceHref} title={item.title} className="h-[70vh] w-full rounded-portfolio border border-portfolio-grey bg-white" />
              <a href={item.evidenceHref} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-portfolio bg-portfolio-blue px-4 py-2 text-sm font-semibold text-white">
                Open PDF <ExternalLink size={15} />
              </a>
            </div>
          ) : imageEvidenceSrc ? (
            <div className="relative mx-auto min-h-[62vh] w-full max-w-4xl overflow-hidden rounded-portfolio bg-white">
              <Image src={imageEvidenceSrc} alt={item.alt} fill sizes="100vw" className="object-contain" />
            </div>
          ) : null}
          {item.caveat ? <p className="mt-4 rounded-portfolio bg-white px-4 py-3 text-sm font-semibold leading-6 text-portfolio-orange">{item.caveat}</p> : null}
        </div>
      </div>
    </div>
  );
}

function getFocusable(root: HTMLElement | null) {
  if (!root) return [];
  return Array.from(root.querySelectorAll<HTMLElement>("button, [href], iframe, input, select, textarea, [tabindex]:not([tabindex='-1'])")).filter((element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true");
}

