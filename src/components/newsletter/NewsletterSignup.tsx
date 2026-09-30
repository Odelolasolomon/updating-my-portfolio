"use client";

import { MailPlus } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function NewsletterSignup({ configured = false, compact = false, source = "blog" }: { configured?: boolean; compact?: boolean; source?: string }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState(configured ? "Subscribe for occasional AI engineering and research writing updates. Every provider-managed email includes unsubscribe controls." : "Newsletter signup is temporarily unavailable. Please check back later.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    if (!configured) return;
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setMessage("Please confirm consent before subscribing.");
      return;
    }

    setStatus("loading");
    setMessage("Submitting your subscription request...");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent, source })
      });
      const result = await response.json().catch(() => ({ message: "Subscription request failed." }));
      setStatus(response.ok ? "success" : "error");
      setMessage(result.message || (response.ok ? "Subscription request confirmed." : "Subscription request failed."));
      if (response.ok) {
        setEmail("");
        setConsent(false);
      }
    } catch {
      setStatus("error");
      setMessage("Subscription request could not be sent. Please try again later.");
    }
  }

  return (
    <Card className={cn("p-5 sm:p-6", compact ? "" : "lg:p-7")}>
      <div className="flex min-w-0 items-start gap-4">
        <div className="grid size-11 shrink-0 place-items-center rounded-full bg-portfolio-orange-soft text-portfolio-orange">
          <MailPlus size={20} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase text-portfolio-blue">Newsletter</p>
          <h2 className={cn("mt-2 font-semibold text-portfolio-charcoal", compact ? "text-xl" : "text-2xl")}>Technical writing updates</h2>
          <p className="mt-2 text-sm leading-7 text-portfolio-slate">{message}</p>
        </div>
      </div>

      {configured ? (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4" aria-describedby="newsletter-status">
          <label className="block text-sm font-medium text-portfolio-charcoal">
            Email address
            <input
              id={`newsletter-email-${source}`}
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={status === "loading"}
              placeholder="you@example.com"
              className="focus-ring mt-2 w-full rounded-portfolio border border-portfolio-grey bg-white px-4 py-3 text-sm text-portfolio-charcoal placeholder:text-portfolio-slate/70"
              required
            />
          </label>
          <label className="flex min-w-0 items-start gap-3 text-sm leading-6 text-portfolio-slate">
            <input id={`newsletter-consent-${source}`} name="consent" type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-1 size-4 shrink-0" disabled={status === "loading"} required />
            <span>I consent to receive occasional technical writing updates and understand I can unsubscribe through the newsletter provider.</span>
          </label>
          <button type="submit" disabled={status === "loading"} className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-portfolio bg-portfolio-blue px-5 py-2.5 text-sm font-semibold text-white shadow-portfolio-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
          <p id="newsletter-status" aria-live="polite" className={cn("text-sm leading-6", status === "error" ? "text-portfolio-orange" : status === "success" ? "text-portfolio-blue" : "text-portfolio-slate")}>{message}</p>
        </form>
      ) : null}
    </Card>
  );
}



