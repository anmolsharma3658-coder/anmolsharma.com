import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CountUp from "@/components/motion/CountUp";
import { projects } from "@/lib/data";
import AzimuthModel from "@/components/projects/AzimuthModel";
import NikkeiCharts from "@/components/projects/NikkeiCharts";
import DeaCharts from "@/components/projects/DeaCharts";
import GreenPlateCharts from "@/components/projects/GreenPlateCharts";
import ChainGateCharts from "@/components/projects/ChainGateCharts";

const INTERACTIVE: Record<string, React.ComponentType> = {
  "azimuth-revenue-model": AzimuthModel,
  "nikkei-volatility": NikkeiCharts,
  "dea-accounting-efficiency": DeaCharts,
  greenplate: GreenPlateCharts,
  "chaingate-capital": ChainGateCharts,
};

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as React.CSSProperties;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Anmol Sharma`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const project = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const Interactive = INTERACTIVE[project.slug];

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Editorial header — light section */}
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

          <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-32">
            <Link
              href="/#work"
              className="nav-link text-sm text-ink-3 transition-colors duration-300 hover:text-gold"
            >
              ← All work
            </Link>

            <div data-reveal className="mt-12 flex flex-wrap items-center gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line-strong px-3 py-1 text-[11px] uppercase tracking-wider text-ink-3"
                >
                  {t}
                </span>
              ))}
              <span className="ml-auto text-sm text-ink-3">{project.year}</span>
            </div>

            <h1
              data-reveal
              style={rd(90)}
              className="font-display mt-8 text-4xl leading-[1.08] tracking-tight text-ink sm:text-6xl"
            >
              {project.title}
            </h1>
            <p data-reveal style={rd(160)} className="mt-4 text-gold">
              {project.role}
            </p>
            <p
              data-reveal
              style={rd(230)}
              className="mt-7 max-w-3xl text-lg leading-relaxed text-ink-2"
            >
              {project.summary}
            </p>

            <div
              data-reveal
              style={rd(320)}
              className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
            >
              {project.stats.map((s) => (
                <div key={s.label} className="bg-bg-card p-6">
                  <p className="font-display text-2xl text-ink">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink-3">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Body — dark section, home of the charts */}
        <section className="relative z-10 bg-bg">
          <article className="mx-auto max-w-5xl px-6 pb-28 pt-2">
            {Interactive && <Interactive />}

            {project.sections.map((sec) => (
              <section key={sec.heading} data-reveal className="mt-20">
                <h2 className="font-display text-3xl text-ink">{sec.heading}</h2>
                {sec.body.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="mt-6 max-w-3xl leading-relaxed text-ink-2"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {project.bullets && (
              <section className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {project.bullets.map((b, i) => (
                  <div
                    key={b.title}
                    data-reveal
                    style={rd(i * 90)}
                    className="card-lift rounded-2xl border border-line bg-bg-card p-7"
                  >
                    <h3 className="text-sm font-medium text-gold">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-2">{b.text}</p>
                  </div>
                ))}
              </section>
            )}

            <div data-reveal className="mt-24 border-t border-line pt-12">
              <p className="text-xs uppercase tracking-[0.35em] text-ink-3">
                Next project
              </p>
              <Link
                href={`/work/${next.slug}`}
                className="font-display mt-4 inline-block text-3xl text-ink transition-colors duration-300 hover:text-gold sm:text-4xl"
              >
                {next.title} →
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
