import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  profile,
  projects,
  experience,
  education,
  certifications,
  skillGroups,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {profile.title}
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-4xl leading-[1.1] tracking-tight text-ink sm:text-6xl">
            {profile.headline[0]}{" "}
            <span className="text-gold">{profile.headline[1]}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
            {profile.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#work"
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              View selected work
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-line-strong px-6 py-2.5 text-sm text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label} className="bg-bg-card p-6">
                <p className="font-display text-3xl text-ink">{s.value}</p>
                <p className="mt-2 text-sm text-ink-3">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Selected Work
                </p>
                <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
                  Five projects, one throughline: rigor.
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-bg-card p-8 transition-colors hover:border-gold-soft ${
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line-strong px-3 py-1 text-[11px] uppercase tracking-wider text-ink-3"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="ml-auto text-sm text-ink-3">{p.year}</span>
                    </div>
                    <h3 className="font-display mt-6 text-2xl text-ink transition-colors group-hover:text-gold sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-gold">{p.role}</p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
                      {p.summary}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex gap-8">
                      {p.stats.slice(0, i === 0 ? 4 : 2).map((s) => (
                        <div key={s.label} className={i === 0 ? "" : "hidden sm:block"}>
                          <p className="font-display text-xl text-ink">{s.value}</p>
                          <p className="mt-1 text-xs text-ink-3">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-ink-3 transition-colors group-hover:text-gold">
                      Read case →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="hairline mx-auto max-w-6xl" />

        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Experience
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
              Where I&apos;ve done the work.
            </h2>

            <div className="mt-12 space-y-0">
              {experience.map((job) => (
                <div
                  key={job.company}
                  className="grid gap-4 border-t border-line py-10 md:grid-cols-[280px_1fr]"
                >
                  <div>
                    <h3 className="font-display text-xl text-ink">{job.company}</h3>
                    <p className="mt-1 text-sm text-gold">{job.role}</p>
                    <p className="mt-2 text-sm text-ink-3">
                      {job.period}
                      <br />
                      {job.location}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 leading-relaxed text-ink-2">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="hairline mx-auto max-w-6xl" />

        {/* Skills + Education */}
        <section id="skills" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Capabilities
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
              Skills &amp; toolkit.
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((g) => (
                <div key={g.name} className="rounded-xl border border-line bg-bg-card p-6">
                  <h3 className="text-sm font-medium text-gold">{g.name}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-ink-2">
                    {g.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-line bg-bg-card p-8">
                <h3 className="text-xs uppercase tracking-[0.3em] text-gold">
                  Education
                </h3>
                <div className="mt-6 space-y-6">
                  {education.map((e) => (
                    <div key={e.school}>
                      <p className="font-display text-lg text-ink">{e.school}</p>
                      <p className="mt-1 text-sm text-ink-2">{e.degree}</p>
                      <p className="mt-1 text-sm text-ink-3">
                        {e.year} · {e.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-line bg-bg-card p-8">
                <h3 className="text-xs uppercase tracking-[0.3em] text-gold">
                  Certifications &amp; Honors
                </h3>
                <ul className="mt-6 space-y-4">
                  {certifications.map((c) => (
                    <li key={c} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-line bg-bg-raised">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
            <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl tracking-tight text-ink sm:text-5xl">
              Building something at the edge of capital and data?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-ink-2">
              I&apos;m based in Philadelphia and open to conversations across private
              equity, strategy, and quantitative research.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
