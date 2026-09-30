import { AlertTriangle, ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-portfolio-charcoal">
      <Header />
      <section className="section-padding bg-portfolio-soft">
        <div className="portfolio-container">
          <Card className="mx-auto max-w-3xl p-8 text-center md:p-12">
            <div className="mx-auto grid size-14 place-items-center rounded-full bg-portfolio-orange-soft text-portfolio-orange">
              <AlertTriangle size={26} aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-blue">Page not found</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-portfolio-charcoal md:text-5xl">
              This portfolio page is not available.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-portfolio-slate md:text-lg">
              The link may be outdated, or the page may still be pending in the portfolio roadmap.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/">
                Return home <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href="/projects" variant="secondary">
                View projects
              </Button>
              <Button href="/contact" variant="ghost">
                Contact Solomon
              </Button>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
