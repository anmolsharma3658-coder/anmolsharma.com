import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { newsletters } from "@/lib/newsletters";

export const metadata: Metadata = {
  title: "Newsletters — Anmol Sharma",
  description:
    "Long-form research notes on econometrics, efficiency analysis, space governance, and sustainability strategy.",
};

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as React.CSSProperties;

export default function NewslettersPage() {
  const sorted = [...newsletters].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Nav />
      <main className="flex-1">
        <header className="theme-light relative overflow-hidden bg-bg">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              data-parallax="0.12"
              className="absolute -top-1/3 right-[-10%] h-[60vh] w-[60vh] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(151,120,60,0.12), transparent 60%)",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.35em] text-gold"
            >
              Newsletters
            </p>
            <h1
              data-reveal
              style={rd(80)}
              className="font-display mt-4 max-w-3xl text-4xl leading-tight tracking-tight text-ink sm:text-6xl"
            >
              Research notes, distilled.
            </h1>
            <p
              data-reveal
              style={rd(140)}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2"
            >
              Long-form write-ups from papers, case competitions, and econometric
              work — the arguments and numbers behind the case studies.
            </p>
          </div>
        </header>

        <section className="theme-light border-t border-line bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-6 md:grid-cols-2">
              {sorted.map((n, i) => (
                <Link
                  key={n.slug}
                  href={`/newsletters/${n.slug}`}
                  data-reveal
                  style={rd((i % 2) * 100)}
                  className={`card-lift group flex flex-col justify-between rounded-2xl border border-line bg-bg-card p-8 hover:border-gold-soft sm:p-10 ${
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      {n.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line-strong px-3 py-1 text-[11px] uppercase tracking-wider text-ink-3"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="ml-auto text-sm text-ink-3">
                        {n.dateLabel} · {n.readMinutes} min
                      </span>
                    </div>
                    <h2 className="font-display mt-6 text-2xl text-ink transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                      {n.title}
                    </h2>
                    <p className="mt-2 text-sm text-gold">{n.subtitle}</p>
                    <p className="mt-4 max-w-3xl leading-relaxed text-ink-2">
                      {n.summary}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex gap-8">
                      {n.stats.slice(0, i === 0 ? 4 : 2).map((s) => (
                        <div key={s.label} className={i === 0 ? "" : "hidden sm:block"}>
                          <p className="font-display text-xl text-ink">{s.value}</p>
                          <p className="mt-1 max-w-36 text-xs text-ink-3">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="nav-link shrink-0 text-sm text-ink-3 transition-colors duration-300 group-hover:text-gold">
                      Read →
                    </span>
                  </div>
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
