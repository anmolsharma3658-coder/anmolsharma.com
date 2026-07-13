import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
        <article className="mx-auto max-w-5xl px-6 pb-24 pt-20">
          <Link
            href="/#work"
            className="text-sm text-ink-3 transition-colors hover:text-gold"
          >
            ← All work
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-2">
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

          <h1 className="font-display mt-6 text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-gold">{project.role}</p>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            {project.summary}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {project.stats.map((s) => (
              <div key={s.label} className="bg-bg-card p-5">
                <p className="font-display text-2xl text-ink">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-ink-3">{s.label}</p>
              </div>
            ))}
          </div>

          {Interactive && <Interactive />}

          {project.sections.map((sec) => (
            <section key={sec.heading} className="mt-16">
              <h2 className="font-display text-2xl text-ink">{sec.heading}</h2>
              {sec.body.map((para) => (
                <p key={para.slice(0, 40)} className="mt-5 leading-relaxed text-ink-2">
                  {para}
                </p>
              ))}
            </section>
          ))}

          {project.bullets && (
            <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.bullets.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border border-line bg-bg-card p-6"
                >
                  <h3 className="text-sm font-medium text-gold">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">{b.text}</p>
                </div>
              ))}
            </section>
          )}

          <div className="mt-20 border-t border-line pt-10">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-3">
              Next project
            </p>
            <Link
              href={`/work/${next.slug}`}
              className="font-display mt-3 inline-block text-2xl text-ink transition-colors hover:text-gold"
            >
              {next.title} →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
