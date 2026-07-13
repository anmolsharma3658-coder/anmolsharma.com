"use client";

const QUADRANTS: {
  title: string;
  emoji: string;
  firms: string[];
  note: string;
  target?: boolean;
}[] = [
  {
    title: "Sleepers — high growth, low efficiency",
    emoji: "",
    firms: ["Ascend", "Crete (PE roll-ups)"],
    note: "Growing rapidly via M&A but not yet converting scale into efficiency — temporary dips expected before synergies land.",
  },
  {
    title: "Stars — high growth + high efficiency",
    emoji: "⭐",
    firms: ["Schellman", "Cherry Bekaert", "Aprio", "Citrin", "Weaver"],
    note: "Boutique specialists and fast-scaling mid-size firms combining lean operations with strong growth.",
    target: true,
  },
  {
    title: "Question marks — low growth, low efficiency",
    emoji: "❓",
    firms: ["Horne", "FGMK"],
    note: "Stagnant revenue and below-frontier efficiency — candidates for strategic review.",
  },
  {
    title: "Dogs — high efficiency, low growth",
    emoji: "",
    firms: ["Deloitte", "EY", "KPMG"],
    note: "Mature Big 4 entities: efficient by several measures, but revenue growth has plateaued.",
  },
];

const DIAGNOSTICS = [
  { d: "Model fit", m: "R², Adj. R², F-test", why: "Does the attribute set explain cross-firm efficiency variation?" },
  { d: "Coefficient significance", m: "t-test (|t| > 2.0)", why: "Which drivers are statistically significant vs. noise?" },
  { d: "Multicollinearity", m: "Correlation matrix, VIF", why: "Partners & professionals are correlated — may inflate standard errors" },
  { d: "Heteroscedasticity", m: "Residual vs. fitted plot", why: "Larger firms may show greater variance — robust SE used" },
  { d: "Outliers", m: "Std. residuals |z| > 2", why: "PE-backed roll-ups (Ascend, Crete) flagged as influential observations" },
];

export default function DeaCharts() {
  return (
    <div className="mt-16 space-y-10">
      <div>
        <div className="flex items-center gap-3">
          <h2 className="font-display text-2xl text-ink">Frontier findings</h2>
          <span className="rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-wider text-gold">
            2025 data
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          The strategic quadrant below plots each firm&apos;s DEA efficiency
          (revenue per partner, vertical) against revenue growth (horizontal), per
          the 2025 Accounting Today panel.
        </p>
      </div>

      {/* Quadrant */}
      <div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {QUADRANTS.map((q) => (
            <div key={q.title} className={`p-6 ${q.target ? "bg-gold/10" : "bg-bg-card"}`}>
              <p className="text-[11px] uppercase tracking-wider text-ink-3">
                {q.emoji && <span className="mr-1">{q.emoji}</span>}
                {q.title}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {q.firms.map((f) => (
                  <span
                    key={f}
                    className={`rounded-full border px-3 py-1 text-xs ${
                      q.target ? "border-gold text-gold" : "border-line-strong text-ink-2"
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-3">{q.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-ink-3">
          Axes: revenue growth % (→) · efficiency, revenue per partner (↑). Cherry
          Bekaert&apos;s 2024 revenue doubled on strategic M&amp;A — efficiency
          scores re-evaluated post-merger.
        </p>
      </div>

      {/* Two-stage pipeline */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-bg-card p-6">
          <p className="text-[11px] uppercase tracking-wider text-gold">Stage 1 — DEA linear program</p>
          <p className="mt-3 font-mono text-sm leading-7 text-ink-2">
            max φ<br />
            s.t. Σλⱼ·Partnersⱼ ≤ Partnersₖ<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Σλⱼ·Professionalsⱼ ≤ Profsₖ<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Σλⱼ·Officesⱼ ≤ Officesₖ<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Σλⱼ·Revenueⱼ ≥ φ·Revenueₖ<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Σλⱼ = 1, λⱼ ≥ 0<br />
            EFFₖ = 1 / φ*
          </p>
          <p className="mt-3 text-xs leading-relaxed text-ink-3">
            BCC output-oriented formulation solved for each of ~100 firms per year
            across the 2016–2025 panel. Score of 1 = on the frontier.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-bg-card p-6">
          <p className="text-[11px] uppercase tracking-wider text-gold">Stage 2 — OLS on efficiency scores</p>
          <p className="mt-3 font-mono text-sm leading-7 text-ink-2">
            τ = β₀ + β₁(Revenue growth)<br />
            &nbsp;&nbsp;+ β₂(Firm size)<br />
            &nbsp;&nbsp;+ β₃(Service mix MAS%)<br />
            &nbsp;&nbsp;+ β₄(Year) + β₅(Big4) + u
          </p>
          <p className="mt-3 text-xs leading-relaxed text-ink-3">
            β-coefficients identify which structural attributes push firms toward
            the frontier — growth, scale, advisory mix, or Big 4 membership.
          </p>
        </div>
      </div>

      {/* Diagnostics */}
      <div className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-line bg-bg-raised text-left text-xs uppercase tracking-wider text-ink-3">
              <th className="px-4 py-3 font-medium">Diagnostic</th>
              <th className="px-4 py-3 font-medium">Method</th>
              <th className="px-4 py-3 font-medium">Why it matters here</th>
            </tr>
          </thead>
          <tbody>
            {DIAGNOSTICS.map((r) => (
              <tr key={r.d} className="border-b border-line last:border-0">
                <td className="px-4 py-3 text-ink">{r.d}</td>
                <td className="px-4 py-3 text-ink-2">{r.m}</td>
                <td className="px-4 py-3 text-ink-3">{r.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
