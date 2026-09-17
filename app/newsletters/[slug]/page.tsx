import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CountUp from "@/components/motion/CountUp";
import { newsletters } from "@/lib/newsletters";

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
    openGraph: {
      title: issue.title,
      description: issue.summary,
      images: [issue.image],
    },
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
  const related = newsletters.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Article header — McKinsey blog style */}
        <header className="theme-light bg-bg">
          <div className="mx-auto max-w-3xl px-6 pb-10 pt-32">
            <Link
              href="/newsletters"
              className="text-sm text-ink-3 transition-colors duration-300 hover:text-gold"
            >
              ← Insights
            </Link>
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.28em] text-gold">
              {issue.series}
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.12] tracking-tight text-ink sm:text-5xl">
              {issue.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-ink-2">
              {issue.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-line py-4 text-sm text-ink-3">
              <span className="font-medium text-ink">{issue.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={issue.date}>{issue.dateLabel}</time>
              <span aria-hidden>·</span>
              <span>{issue.readMinutes} min read</span>
            </div>
          </div>
        </header>

        {/* Full-bleed hero image */}
        <div className="theme-light bg-bg">
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative aspect-[16/9] overflow-hidden bg-bg-card">
              <Image
                src={issue.image}
                alt={issue.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <p className="mt-3 text-xs text-ink-3">{issue.imageAlt}</p>
          </div>
        </div>

        {/* Body */}
        <article className="theme-light bg-bg">
          <div className="mx-auto max-w-3xl px-6 py-14">
            <p className="text-xl leading-relaxed text-ink-2">{issue.summary}</p>

            <div className="mt-12 grid grid-cols-2 gap-6 border-y border-line py-8 sm:grid-cols-4">
              {issue.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl text-ink">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink-3">{s.label}</p>
                </div>
              ))}
            </div>

            {issue.sections.map((sec) => (
              <section key={sec.heading} className="mt-14">
                <h2 className="font-display text-2xl text-ink sm:text-3xl">
                  {sec.heading}
                </h2>
                {sec.body.map((para) => (
                  <p key={para.slice(0, 48)} className="mt-5 text-[17px] leading-[1.75] text-ink-2">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {issue.takeaways && (
              <section className="mt-16 border-t border-line pt-12">
                <h2 className="font-display text-2xl text-ink">Key takeaways</h2>
                <div className="mt-8 space-y-8">
                  {issue.takeaways.map((t, i) => (
                    <div key={t.title} className="grid gap-2 sm:grid-cols-[48px_1fr]">
                      <p className="font-display text-2xl text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <h3 className="text-lg font-medium text-ink">{t.title}</h3>
                        <p className="mt-2 leading-relaxed text-ink-2">{t.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        {/* Related */}
        <section className="theme-light border-t border-line bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-3">
              More insights
            </p>
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {related.map((n) => (
                <Link key={n.slug} href={`/newsletters/${n.slug}`} className="group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg-card">
                    <Image
                      src={n.image}
                      alt={n.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                    {n.series}
                  </p>
                  <h3 className="font-display mt-2 text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-gold">
                    {n.title}
                  </h3>
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
