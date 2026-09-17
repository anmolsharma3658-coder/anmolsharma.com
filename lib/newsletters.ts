export type Newsletter = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  dateLabel: string;
  readMinutes: number;
  tags: string[];
  summary: string;
  stats: { value: string; label: string }[];
  sections: { heading: string; body: string[] }[];
  takeaways?: { title: string; text: string }[];
};

export const newsletters: Newsletter[] = [
  {
    slug: "orbital-crowding",
    title: "Orbital Crowding in Low Earth Orbit",
    subtitle:
      "Commercial impact, econometric forecasting, and a UN space governance architecture",
    date: "2025-09-01",
    dateLabel: "Sep 2025",
    readMinutes: 14,
    tags: ["Space Governance", "Econometrics", "Systemic Risk"],
    summary:
      "An original multi-decade econometric study of orbital debris as a macroeconomic externality — forecasting $620B in annual economic drag by 2045 under business-as-usual, and proposing a five-body UN Space Governance Framework for COPUOS deliberation.",
    stats: [
      { value: "$620B", label: "Annual economic drag by 2045 (BAU)" },
      { value: "0.847", label: "Debris → drag elasticity" },
      { value: "48 yrs", label: "Panel: 1978–2025" },
      { value: "$435B", label: "Governance dividend vs. BAU" },
    ],
    sections: [
      {
        heading: "The orbital commons at a tipping point",
        body: [
          "Low Earth Orbit — roughly 200 to 2,000 km above Earth — has become the most economically critical and most poorly governed common-pool resource on the planet. As of early 2025, more than 12,500 active satellites share LEO with an estimated 34,000 objects larger than 10 cm, ~900,000 fragments between 1–10 cm, and over 128 million micro-fragments too small to track but large enough to destroy a satellite on impact.",
          "Conservative estimates put annual global economic value directly dependent on satellite infrastructure above $1.3 trillion. The thesis of this paper is that orbital crowding is not an aerospace niche concern — it is a systemic macroeconomic risk with concentration risk, correlated failures, underpriced externalities, and governance that has not kept pace with the system it is meant to regulate.",
        ],
      },
      {
        heading: "What the econometrics show",
        body: [
          "Using a 48-year panel (1978–2025) combining NASA, ESA, Satellite Industry Association, OECD, and Lloyd's space insurance data, a log-log OLS specification of annual economic drag on debris counts, active satellites, ASAT events, governance quality, and LEO utilisation explains 92.4% of variation in drag (R² = 0.924, F = 187.4, p < 0.001).",
          "The headline result: a 1% increase in tracked debris objects correlates with a 0.85% increase in aggregate annual economic drag (β = 0.847, p < 0.001). A one-unit improvement in the governance index (0–1) is associated with a 29.1% reduction in drag. The interaction between governance and debris density is negative and significant — better institutions reduce drag more when debris is high, which is exactly why early governance investment is economically compelling.",
        ],
      },
      {
        heading: "Three futures to 2045",
        body: [
          "Under business-as-usual, total annual economic losses attributable to orbital crowding reach $620 billion by 2045, with disproportionate exposure in finance, aviation, and telecommunications. A moderate governance path (binding deorbit rules, usage fees, first-generation active debris removal) cuts that to ~$340B — 45% lower. A strong governance path, built around the five-body architecture proposed in the paper, stabilises annual drag near $185B — a $435B annual saving versus BAU.",
          "The Orbital Sustainability Index (OSI) — debris density × launch intensity, divided by governance quality × mitigation investment — is introduced as a single forward-looking metric. Under BAU, LEO breaches the critical OSI threshold between 2031 and 2033; under strong governance, as late as 2041.",
        ],
      },
      {
        heading: "A five-body UN architecture",
        body: [
          "The institutional proposal for COPUOS includes five bodies: a Space Sustainability Council, an Orbital Debris Registry and Monitoring Agency, a Space Economic Liability Tribunal, a Global Orbital Commons Fund, and a Dual-Use Technology Review Panel. Immediate recommendations include endorsing OSI publication, establishing the debris registry with a three-year $45M budget, and initiating treaty negotiations for liability and extended producer responsibility on a 5-year post-mission disposal standard.",
          "The window for building effective space governance without confronting a debris cascade is approximately 8–12 years under current trajectory models. The economics of orbital sustainability are unambiguous; the open question is institutional will.",
        ],
      },
    ],
    takeaways: [
      {
        title: "Debris is a macro variable",
        text: "Orbital debris now behaves like a priced risk factor across sectors — not a fringe aerospace cost.",
      },
      {
        title: "Governance pays for itself",
        text: "The strong-governance dividend ($435B/year by 2045) dwarfs the cost of the architecture required to earn it.",
      },
      {
        title: "Developing economies win most",
        text: "About 32% of the global governance dividend accrues to developing economies that depend more heavily on satellite connectivity.",
      },
    ],
  },
  {
    slug: "dea-accounting-efficiency",
    title: "DEA Benchmarking: Top 100 Accounting Firms",
    subtitle:
      "Full panel analysis of efficiency across Accounting Today’s rankings, 2016–2025",
    date: "2025-05-01",
    dateLabel: "May 2025",
    readMinutes: 12,
    tags: ["DEA", "Accounting", "Quantitative Methods"],
    summary:
      "A two-stage Data Envelopment Analysis of 999 firm-year observations from Accounting Today’s Top 100. Boutique specialists sit on the frontier; the Big 4 carry a 26–49% scale penalty; MAS% is the only statistically significant predictor of efficiency.",
    stats: [
      { value: "999", label: "Firm-year observations" },
      { value: "10 yrs", label: "Panel: 2016–2025" },
      { value: "0.2416", label: "MAS% β (t = 2.95)" },
      { value: "26–49%", label: "Big 4 scale penalty" },
    ],
    sections: [
      {
        heading: "Rankings measure scale. DEA measures efficiency.",
        body: [
          "Accounting Today’s Top 100 ranking is the industry’s most-cited league table — and it ranks firms by gross revenue. A $33 billion firm with 172,000 people and a $171 million boutique with 420 staff both appear on the same list, but their productivity profiles are nothing alike.",
          "Data Envelopment Analysis constructs an empirically grounded production frontier from observed peers. Each firm (a Decision-Making Unit) is scored 0–1 on how well it converts partners, professionals, and offices into revenue. A score of 1.00 means no peer combination can produce more output from the same inputs; 0.60 means the firm generates only 60% of frontier revenue at its input level.",
        ],
      },
      {
        heading: "Method: BCC, then OLS",
        body: [
          "Stage 1 solves a Banker–Charnes–Cooper (BCC) output-oriented linear program under variable returns to scale for each of ~100 firms per year across the 2016–2025 panel — 999 firm-year observations in total. Inputs: partners, professionals, offices. Output: revenue.",
          "Stage 2 regresses efficiency scores on structural attributes (n = 184, R² = 0.2679). MAS% — the share of revenue from management advisory services — is the only statistically significant predictor of frontier proximity (β = 0.2416, t = 2.95, p < 0.01). Service mix, not sheer size, pulls firms toward the frontier.",
        ],
      },
      {
        heading: "Who sits on the frontier",
        body: [
          "Boutique specialists dominate. Schellman & Company achieves the 2025 frontier score of 1.000 — $171.5M revenue from 21 partners, 399 professionals, and 2 offices, or roughly $429K revenue per professional. Cain Watters and Kearney & Co. sit near the frontier with highly specialised, high-margin practices.",
          "The Big 4 exhibit a 26–49% scale penalty below frontier — broader service mixes, audit-heavy models, and offshore leverage that dilute revenue per unit of input. Private equity consolidators (Cherry Bekaert +99.7% revenue, Ascend +149.7%) land in the “Sleeper” quadrant: high growth with temporary efficiency suppression while M&A integration catches up.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "A mid-size firm doing more with less is invisible in a revenue league table. DEA makes it visible — and names its efficient peer group as an explicit operational benchmark. For partners and PE sponsors, the practical takeaway is clear: shifting toward high-margin advisory work is the structural lever that actually predicts frontier proximity.",
        ],
      },
    ],
    takeaways: [
      {
        title: "MAS% is the lever",
        text: "Advisory mix — not headcount or office count — is the only significant Stage-2 driver of efficiency.",
      },
      {
        title: "Boutiques win on the frontier",
        text: "Specialist firms convert lean input bundles into high-margin revenue far more efficiently than scaled generalists.",
      },
      {
        title: "PE roll-ups need a second look",
        text: "Revenue jumps from consolidation often mask temporary efficiency dips until staff and systems integrate.",
      },
    ],
  },
  {
    slug: "greenplate-framework",
    title: "GreenPlate: Decarbonising Campus Dining",
    subtitle:
      "A zero-compromise framework for 30% carbon reduction — prepared for Aramark",
    date: "2026-04-01",
    dateLabel: "Apr 2026",
    readMinutes: 11,
    tags: ["Sustainability", "Strategy", "Case Competition"],
    summary:
      "A ten-pillar decarbonisation blueprint for Aramark’s 2026 Philly-Wide Case Competition: verified 30%+ carbon reduction in campus dining, cost-neutral in Year 1, $650K+ net surplus over three years — powered by menu science, AI forecasting, and CarbonIQ behavioural design.",
    stats: [
      { value: "30%+", label: "Verified carbon reduction" },
      { value: "$650K+", label: "3-year net surplus" },
      { value: "<18 mo", label: "Payback on key investments" },
      { value: "10", label: "Integrated pillars" },
    ],
    sections: [
      {
        heading: "The mandate",
        body: [
          "A major U.S. university system asked Aramark to cut campus dining carbon 30% without raising food costs or hurting student satisfaction. For a mid-size campus serving 10,000+ meals per day, dining generates an estimated 8,000–14,000 metric tons of CO2e annually — roughly 1,700 passenger vehicles.",
          "GreenPlate answers with ten integrated pillars spanning menu science, AI demand forecasting, behavioural engagement (CarbonIQ), materials, fleet, supply chain, energy/facilities, circular waste, financial modelling, and carbon accounting. Pillar contributions sum to ≥32%, building a safety margin above the 30% target.",
        ],
      },
      {
        heading: "Where the carbon lives — and how to cut it",
        body: [
          "Food choice is the highest-leverage variable. Beef generates ~27 kg CO2e/kg; lentils ~0.9 kg — a 30:1 ratio. Menu redesign alone targets ~12% of the reduction; AI forecasting that cuts food waste ~25% contributes another ~9%; CarbonIQ behavioural nudges (defaults, labels, dorm leaderboards, credits) target ~8%; facilities and energy upgrades unlocked by Aramark’s building control add ~7%.",
          "The competitive asymmetry is facilities: Sodexo and Compass manage menus. Aramark manages buildings — HVAC, induction cooking, solar, fleet. That is the carbon weapon rivals cannot replicate on food-only contracts.",
        ],
      },
      {
        heading: "The economics hold",
        body: [
          "The three-year model invests ~$1.25M against >$1.9M in savings and revenue for a mid-size university, producing a $650K+ net surplus by Year 3. AI forecasting pays back in under 8 months; menu redesign in under 3. Plant-forward proteins cost 40–70% less per pound than beef — a 12-point shift from beef to legumes on a 10,000-meal campus saves roughly $180–260K annually in protein procurement alone.",
          "CarbonIQ self-funds by Year 2 through meal-plan data partnerships and CPG sponsorships ($80–150K/year). Verified reductions feed Aramark’s SBTi reporting and support a 5–12% premium contract positioning.",
        ],
      },
      {
        heading: "Implementation in three years",
        body: [
          "Year 1 builds the foundation: carbon baseline, AI forecasting, trayless dining, menu curation, CarbonIQ beta. Year 2 scales: full CarbonIQ, EV last-mile, induction kitchens, solar and smart HVAC. Year 3 optimises: 60%+ plant-forward menus, Verra carbon credits, public dashboard, and GreenPlate packaged as Aramark’s premium university product.",
        ],
      },
    ],
    takeaways: [
      {
        title: "Carbon as a P&L",
        text: "GreenPlate is designed as a profit centre — cost-neutral in Year 1, net positive from Year 2.",
      },
      {
        title: "Behaviour beats posters",
        text: "Defaults, gamification, and longitudinal carbon profiles shift choices without restricting them.",
      },
      {
        title: "Buildings are the moat",
        text: "Facilities control is the lever pure food-service competitors cannot pull.",
      },
    ],
  },
  {
    slug: "nikkei-volatility",
    title: "Japan’s Stock Market Volatility & Macro Surprises",
    subtitle:
      "Does CPI surprise or industrial production news drive short-term Nikkei 225 volatility?",
    date: "2026-03-01",
    dateLabel: "Mar 2026",
    readMinutes: 8,
    tags: ["Econometrics", "GARCH", "Japan"],
    summary:
      "A newsletter distillation of the ECON 560 study: ARMA / GARCH(1,1) / ARDL on 103 quarterly Nikkei observations. The yen dominates returns; volatility is highly persistent; Abenomics marks a confirmed structural break; BoJ rate changes are insignificant.",
    stats: [
      { value: "103", label: "Quarterly observations" },
      { value: "0.906", label: "GARCH persistence (α+β)" },
      { value: "+1.08***", label: "Yen depreciation → Nikkei" },
      { value: "+4.0pp", label: "Post-Abenomics mean shift" },
    ],
    sections: [
      {
        heading: "The question",
        body: [
          "Does unexpected inflation (CPI surprise) or industrial production news drive short-term volatility in the Nikkei 225? The Japanese market is a natural laboratory: the Lost Decade created a volatility profile unlike Western markets; Abenomics (Dec 2012) shifted quarterly mean returns from −1.0% to +3.0%; and decades of ZIRP/NIRP leave almost no surprise component in announced rate changes.",
        ],
      },
      {
        heading: "Three-layer method",
        body: [
          "Data: Nikkei 225 quarterly log-returns, CPI surprises (Actual − HP-trend), ΔIP, USD/JPY, and BoJ policy rates — all verified I(0) by ADF. An AR(1) mean is selected by AIC/BIC over ARMA(p,q); ARDL(1,2,1) wins a 27-equation grid (AIC 7.348). Variance is modelled with GARCH(1,1). ARCH-LM confirms ARCH effects in raw residuals (LM = 12.4, p = 0.002) and resolves them post-GARCH (LM = 0.31, p = 0.58).",
        ],
      },
      {
        heading: "Five findings",
        body: [
          "Yen dominates: a 1% depreciation vs. USD raises the Nikkei ~1.08% (p < 0.001) — Japan’s export-heavy index (Toyota, Sony, Honda) transmits FX straight into earnings. Volatility is highly persistent (α₁ = 0.184, β₁ = 0.722, sum 0.906; variance shock half-life ~7 quarters).",
          "Crisis dummies are large and significant — GFC −8.3%, COVID −11.6% structural shocks to quarterly means. Abenomics is a confirmed break (Chow F ≈ 3.8, p < 0.001): mean +4pp, volatility 11.1% → 9.2%, persistence ~0.94 → ~0.87. BoJ rate changes are insignificant (p = 0.71) — fully anticipated under ZIRP.",
        ],
      },
      {
        heading: "Preferred specification",
        body: [
          "ARDL mean + GARCH(1,1) variance lowers AIC from 7.601 (AR(1) baseline) to 7.162 and passes residual diagnostics: white noise, ARCH-LM, Breusch–Godfrey, Durbin–Watson. ARDL-GARCH is the correct framework for this data structure.",
        ],
      },
    ],
    takeaways: [
      {
        title: "FX over CPI/IP",
        text: "For Nikkei returns, the yen dominates; inflation and IP surprises add only marginal power.",
      },
      {
        title: "Persistence matters",
        text: "GARCH α+β = 0.906 means crisis volatility lingers for years — critical for VaR and options.",
      },
      {
        title: "Regime, not noise",
        text: "Abenomics is a structural shift, not a temporary bounce — models should be estimated on sub-samples.",
      },
    ],
  },
];

export function getNewsletter(slug: string) {
  return newsletters.find((n) => n.slug === slug);
}
