import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CountUp from "@/components/motion/CountUp";
import { newsletters } from "@/lib/newsletters";

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as React.CSSProperties;

export function generateStaticParams() {
  return newsletters.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const issue = newsletters.find((n) => n.slug === slug);
  if (!issue) return {};
  return {
    title: `${issue.title} — Anmol Sharma`,
    description: issue.summary,
  };
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = newsletters.findIndex((n) => n.slug === slug);
  if (idx === -1) notFound();
  const issue = newsletters[idx];
  const next = newsletters[(idx + 1) % newsletters.length];

  return (
    <>
      <Nav />
      <main className="flex-1">
        <header className="theme-light relative overflow-hidden bg-bg">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              data-parallax="0.14"
              className="absolute -top-1/3 right-[-14%] h-[65vh] w-[65vh] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(151,120,60,0.13), transparent 60%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-32">
            <Link
              href="/newsletters"
              className="nav-link text-sm text-ink-3 transition-colors duration-300 hover:text-gold"
            >
              ← All newsletters
            </Link>

            <div data-reveal className="mt-10 flex flex-wrap items-center gap-2">
              {issue.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line-strong px-3 py-1 text-[11px] uppercase tracking-wider text-ink-3"
                >
                  {t}
                </span>
              ))}
              <span className="ml-auto text-sm text-ink-3">
                {issue.dateLabel} · {issue.readMinutes} min read
              </span>
            </div>

            <h1
              data-reveal
              style={rd(80)}
              className="font-display mt-6 text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
            >
              {issue.title}
            </h1>
            <p data-reveal style={rd(120)} className="mt-3 text-gold">
              {issue.subtitle}
            </p>
            <p
              data-reveal
              style={rd(160)}
              className="mt-6 text-lg leading-relaxed text-ink-2"
            >
              {issue.summary}
            </p>

            <div
              data-reveal
              style={rd(200)}
              className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
            >
              {issue.stats.map((s) => (
                <div key={s.label} className="bg-bg-card p-5">
                  <p className="font-display text-2xl text-ink">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink-3">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <article className="bg-bg">
          <div className="mx-auto max-w-3xl px-6 py-20">
            {issue.sections.map((sec, i) => (
              <section key={sec.heading} data-reveal style={rd(i * 60)} className="mt-14 first:mt-0">
                <h2 className="font-display text-2xl text-ink sm:text-3xl">
                  {sec.heading}
                </h2>
                {sec.body.map((para) => (
                  <p key={para.slice(0, 48)} className="mt-5 leading-relaxed text-ink-2">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {issue.takeaways && (
              <section data-reveal className="mt-16 grid gap-5 sm:grid-cols-3">
                {issue.takeaways.map((t) => (
                  <div
                    key={t.title}
                    className="rounded-xl border border-line bg-bg-card p-6"
                  >
                    <h3 className="text-sm font-medium text-gold">{t.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-2">{t.text}</p>
                  </div>
                ))}
              </section>
            )}

            <div className="mt-20 border-t border-line pt-10">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-3">
                Next newsletter
              </p>
              <Link
                href={`/newsletters/${next.slug}`}
                className="font-display mt-3 inline-block text-2xl text-ink transition-colors duration-300 hover:text-gold"
              >
                {next.title} →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
