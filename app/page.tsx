import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CountUp from "@/components/motion/CountUp";
import {
  profile,
  projects,
  experience,
  education,
  certifications,
  skillGroups,
} from "@/lib/data";
import { newsletters } from "@/lib/newsletters";

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero — pinned beneath the page; following sections scroll over it */}
        <section className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
          <div className="hero-canvas pointer-events-none absolute inset-0" aria-hidden>
            <div
              data-parallax="0.22"
              className="absolute -top-1/4 right-[-12%] h-[75vh] w-[75vh] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(197,161,95,0.17), transparent 62%)",
              }}
            />
            <div
              data-parallax="0.1"
              className="absolute bottom-[-25%] left-[-15%] h-[85vh] w-[85vh] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(74,111,165,0.13), transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 60%, var(--bg))",
              }}
            />
          </div>

          <div className="hero-exit relative mx-auto w-full max-w-6xl px-6">
            <p
              className="rise text-xs uppercase tracking-[0.35em] text-gold"
              style={{ animationDelay: "100ms" }}
            >
              {profile.title}
            </p>
            <h1
              className="rise font-display mt-8 max-w-5xl text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl xl:text-8xl"
              style={{ animationDelay: "220ms" }}
            >
              {profile.headline[0]}{" "}
              <span className="text-gold">{profile.headline[1]}</span>
            </h1>
            <p
              className="rise mt-10 max-w-2xl text-lg leading-relaxed text-ink-2"
              style={{ animationDelay: "380ms" }}
            >
              {profile.intro}
            </p>
            <div className="rise mt-12 flex flex-wrap gap-4" style={{ animationDelay: "520ms" }}>
              <Link
                href="#work"
                className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-bg transition-opacity duration-300 hover:opacity-90"
              >
                View selected work
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-line-strong px-7 py-3 text-sm text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Get in touch
              </a>
            </div>
            <p
              className="rise mt-20 text-[11px] uppercase tracking-[0.3em] text-ink-3"
              style={{ animationDelay: "700ms" }}
            >
              Scroll ↓
            </p>
          </div>
        </section>

        {/* Everything below slides over the pinned hero */}
        <div className="relative z-10">
          {/* Stats band */}
          <section className="border-y border-line bg-bg">
            <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
              {profile.stats.map((s, i) => (
                <div
                  key={s.label}
                  data-reveal
                  style={rd(i * 90)}
                  className="border-line px-6 py-10 [&:nth-child(even)]:border-l lg:[&:not(:first-child)]:border-l"
                >
                  <p className="font-display text-3xl text-ink sm:text-4xl">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-2 text-sm text-ink-3">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Work — light editorial section */}
          <section id="work" className="theme-light scroll-mt-16 bg-bg">
            <div className="mx-auto max-w-6xl px-6 py-28">
              <div data-reveal>
                <p className="text-xs uppercase tracking-[0.35em] text-gold">
                  Selected Work
                </p>
                <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
                  Five projects, one throughline: rigor.
                </h2>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {projects.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/work/${p.slug}`}
                    data-reveal
                    style={rd((i % 2) * 110)}
                    className={`card-lift group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bg-card p-8 hover:border-gold-soft sm:p-10 ${
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
                      <h3 className="font-display mt-7 text-2xl text-ink transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-gold">{p.role}</p>
                      <p className="mt-5 max-w-2xl leading-relaxed text-ink-2">
                        {p.summary}
                      </p>
                    </div>
                    <div className="mt-9 flex items-center justify-between">
                      <div className="flex gap-10">
                        {p.stats.slice(0, i === 0 ? 4 : 2).map((s) => (
                          <div key={s.label} className={i === 0 ? "" : "hidden sm:block"}>
                            <p className="font-display text-xl text-ink">
                              <CountUp value={s.value} />
                            </p>
                            <p className="mt-1 max-w-40 text-xs text-ink-3">{s.label}</p>
                          </div>
                        ))}
                      </div>
                      <span className="nav-link shrink-0 text-sm text-ink-3 transition-colors duration-300 group-hover:text-gold">
                        Read case →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletters — dark band between work and experience */}
          <section id="newsletters" className="scroll-mt-16 bg-bg">
            <div className="mx-auto max-w-6xl px-6 py-28">
              <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gold">
                    Newsletters
                  </p>
                  <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
                    Research notes, distilled.
                  </h2>
                </div>
                <Link
                  href="/newsletters"
                  className="nav-link text-sm text-ink-3 transition-colors duration-300 hover:text-gold"
                >
                  View all →
                </Link>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-2">
                {[...newsletters]
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .map((n, i) => (
                    <Link
                      key={n.slug}
                      href={`/newsletters/${n.slug}`}
                      data-reveal
                      style={rd((i % 2) * 100)}
                      className="card-lift group rounded-2xl border border-line bg-bg-card p-7 transition-colors duration-300 hover:border-gold-soft sm:p-8"
                    >
                      <div className="flex items-center gap-3 text-xs text-ink-3">
                        <span className="uppercase tracking-[0.2em] text-gold">
                          {n.tags[0]}
                        </span>
                        <span>·</span>
                        <span>
                          {n.dateLabel} · {n.readMinutes} min
                        </span>
                      </div>
                      <h3 className="font-display mt-4 text-xl text-ink transition-colors duration-300 group-hover:text-gold sm:text-2xl">
                        {n.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-2">
                        {n.summary}
                      </p>
                      <p className="mt-5 text-sm text-ink-3 transition-colors duration-300 group-hover:text-gold">
                        Read newsletter →
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </section>

          {/* Experience — dark */}
          <section id="experience" className="scroll-mt-16 border-t border-line bg-bg">
            <div className="mx-auto max-w-6xl px-6 py-28">
              <div data-reveal>
                <p className="text-xs uppercase tracking-[0.35em] text-gold">
                  Experience
                </p>
                <h2 className="font-display mt-4 text-4xl tracking-tight text-ink sm:text-5xl">
                  Where I&apos;ve done the work.
                </h2>
              </div>

              <div className="mt-14">
                {experience.map((job) => (
                  <div
                    key={job.company}
                    data-reveal
                    className="grid gap-4 border-t border-line py-12 md:grid-cols-[300px_1fr]"
                  >
                    <div>
                      <h3 className="font-display text-2xl text-ink">{job.company}</h3>
                      <p className="mt-1 text-sm text-gold">{job.role}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink-3">
                        {job.period}
                        <br />
                        {job.location}
                      </p>
                    </div>
                    <ul className="space-y-3.5">
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

          {/* Skills + Education — light */}
          <section id="skills" className="theme-light scroll-mt-16 bg-bg">
            <div className="mx-auto max-w-6xl px-6 py-28">
              <div data-reveal>
                <p className="text-xs uppercase tracking-[0.35em] text-gold">
                  Capabilities
                </p>
                <h2 className="font-display mt-4 text-4xl tracking-tight text-ink sm:text-5xl">
                  Skills &amp; toolkit.
                </h2>
              </div>

              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {skillGroups.map((g, i) => (
                  <div
                    key={g.name}
                    data-reveal
                    style={rd(i * 80)}
                    className="card-lift rounded-2xl border border-line bg-bg-card p-7"
                  >
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
                <div data-reveal className="rounded-2xl border border-line bg-bg-card p-9">
                  <h3 className="text-xs uppercase tracking-[0.35em] text-gold">
                    Education
                  </h3>
                  <div className="mt-7 space-y-7">
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
                <div
                  data-reveal
                  style={rd(110)}
                  className="rounded-2xl border border-line bg-bg-card p-9"
                >
                  <h3 className="text-xs uppercase tracking-[0.35em] text-gold">
                    Certifications &amp; Honors
                  </h3>
                  <ul className="mt-7 space-y-4">
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

          {/* Contact — dark statement */}
          <section className="relative overflow-hidden bg-bg">
            <div
              aria-hidden
              data-parallax="0.08"
              className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(197,161,95,0.12), transparent 62%)",
              }}
            />
            <div className="relative mx-auto max-w-6xl px-6 py-36 text-center">
              <p data-reveal className="text-xs uppercase tracking-[0.35em] text-gold">
                Contact
              </p>
              <h2
                data-reveal
                style={rd(100)}
                className="font-display mx-auto mt-6 max-w-3xl text-4xl leading-tight tracking-tight text-ink sm:text-6xl"
              >
                Building something at the edge of capital and data?
              </h2>
              <p
                data-reveal
                style={rd(200)}
                className="mx-auto mt-8 max-w-xl leading-relaxed text-ink-2"
              >
                I&apos;m based in Philadelphia and open to conversations across private
                equity, strategy, and quantitative research.
              </p>
              <a
                data-reveal
                style={rd(300)}
                href={`mailto:${profile.email}`}
                className="mt-12 inline-block rounded-full bg-gold px-9 py-3.5 text-sm font-medium text-bg transition-opacity duration-300 hover:opacity-90"
              >
                {profile.email}
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
