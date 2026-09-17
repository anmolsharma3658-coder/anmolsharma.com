import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { newsletters } from "@/lib/newsletters";

export const metadata: Metadata = {
  title: "Insights — Anmol Sharma",
  description:
    "Perspectives and research notes on markets, governance, efficiency, and strategy.",
};

export default function NewslettersPage() {
  const sorted = [...newsletters].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* McKinsey-style light editorial index */}
        <section className="theme-light bg-bg">
          <div className="mx-auto max-w-6xl px-6 pb-10 pt-32">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Insights
            </p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight text-ink sm:text-6xl">
              Four perspectives on capital, systems, and what matters now.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
              Long-form research notes distilled from papers, case competitions,
              and econometric work — written for decision-makers who need the
              thesis, the evidence, and the implication in one pass.
            </p>
          </div>
        </section>

        {/* Featured story */}
        <section className="theme-light border-t border-line bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <Link
              href={`/newsletters/${featured.slug}`}
              className="group grid items-center gap-10 lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-card">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
                  {featured.series} · Featured
                </p>
                <h2 className="font-display mt-4 text-3xl leading-tight text-ink transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-2">
                  {featured.summary}
                </p>
                <p className="mt-6 text-sm text-ink-3">
                  {featured.author} · {featured.dateLabel} · {featured.readMinutes}{" "}
                  min read
                </p>
                <p className="mt-8 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-gold">
                  Read the article →
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Article grid */}
        <section className="theme-light border-t border-line bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-3">
              More insights
            </p>
            <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((n) => (
                <Link
                  key={n.slug}
                  href={`/newsletters/${n.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg-card">
                    <Image
                      src={n.image}
                      alt={n.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                    {n.series}
                  </p>
                  <h3 className="font-display mt-2 text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-gold">
                    {n.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-2">
                    {n.summary}
                  </p>
                  <p className="mt-4 text-xs text-ink-3">
                    {n.dateLabel} · {n.readMinutes} min read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
