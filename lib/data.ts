export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  tags: string[];
  summary: string;
  stats: { value: string; label: string }[];
  sections: { heading: string; body: string[] }[];
  bullets?: { title: string; text: string }[];
};

export const profile = {
  name: "Anmol Sharma",
  title: "Private Equity Analyst · CFA Level II Candidate",
  location: "Philadelphia, PA",
  email: "anmolsharma3658@gmail.com",
  phone: "(215) 459-7044",
  linkedin: "https://www.linkedin.com/in/anmolsharma",
  intro:
    "I turn messy market intelligence into decisions investors can act on. Across private equity diligence, sell-side valuation, and operator-side revenue strategy, I've researched $2.5B+ in transaction value, engineered Python and SQL pipelines across $240M+ multi-asset portfolios, and built a $12M luxury diamond sales vertical from zero — pairing institutional rigor with the instincts of someone who has closed the deal themselves.",
  headline: [
    "I work at the intersection of",
    "capital, data, and strategy.",
  ],
  stats: [
    { value: "$2.5B+", label: "Transaction value analyzed" },
    { value: "$240M+", label: "Multi-asset portfolios modeled" },
    { value: "$12M+", label: "Revenue vertical built from zero" },
    { value: "4.00", label: "MBA GPA, Drexel University" },
  ],
};

export const experience = [
  {
    company: "Dark Alpha Capital",
    role: "Private Equity Analyst",
    period: "May 2026 – Present",
    location: "Washington, D.C.",
    points: [
      "Source, screen, and prioritize lower-middle-market opportunities across mining, oil & gas, and consumer goods — building investable theses that senior partners can take into IC without rework.",
      "Run company and market diligence with SQL, Python (Pandas, NumPy, Matplotlib), SAS, Tableau, and CRM systems to surface buying signals, competitive gaps, and workforce/cost trends before management meetings.",
      "Stress-test target financials for quality of earnings, customer concentration, and margin durability; translate findings into clear go / hold / pass frameworks that compress the time from first look to term sheet.",
      "Support cross-border diligence on prospective acquisitions — including a Netherlands-based specialty chemical manufacturer — coordinating local advisors, currency and regulatory overlays, and integration risk notes for the investment memo.",
    ],
  },
  {
    company: "Sharda Jewellers – Dhruv Diamonds",
    role: "Business Development Lead",
    period: "2024 – Present",
    location: "Mumbai, India",
    points: [
      "Built a new luxury diamond sales vertical from scratch, driving $12M+ in revenue by converting a younger, style-conscious buyer who traditional bridal retail was missing.",
      "Curated relationships with top craftsmen and designers to assemble a differentiated product line, then turned craftsmanship intelligence into pricing, storytelling, and go-to-market strategy.",
      "Owned the full sales cycle — prospecting, quoting, outreach, negotiation, and close — on high-value transactions where trust, taste, and timing matter as much as the stone.",
      "Installed light CRM and pipeline discipline so repeat demand, referral loops, and inventory turns became measurable rather than anecdotal.",
    ],
  },
  {
    company: "JM Financial",
    role: "Financial Due Diligence / Valuation Analyst",
    period: "Jun 2024 – Sep 2025",
    location: "Mumbai, India",
    points: [
      "Identified $45M+ in EBITDA adjustments and $18M in contingent liabilities through GAAP-informed review of financial statements, related-party flows, and off-balance-sheet exposures.",
      "Performed comparable company, precedent transaction, and DCF valuations across buy- and sell-side mandates spanning $2.5B+ in transaction value — from mid-market industrials to consumer platforms.",
      "Built dynamic Excel cash-flow and net-debt schedules with multi-scenario sensitivity tables used directly in live negotiations and investment-committee presentations.",
      "Engineered Python and SQL pipelines to analyze $240M+ in multi-asset portfolios, flagging allocation drift, return anomalies, and data discrepancies before they reached the client deliverable.",
    ],
  },
  {
    company: "Bighaat",
    role: "Advisory Intern",
    period: "May 2021 – Aug 2021",
    location: "Bengaluru, India",
    points: [
      "Helped secure ₹100 crores (~$12M) in institutional growth capital by building asset-level financial projection models and pitching them to prospective investors with clear unit economics.",
      "Mapped order-to-cash workflows using Celonis process mining, identifying 25%+ structural inefficiencies with $4.2M projected annual impact across fulfillment and collections.",
      "Translated process findings into a prioritized remediation roadmap so leadership could sequence quick wins before heavier systems work.",
    ],
  },
  {
    company: "Enactus International",
    role: "Business Development Intern",
    period: "Aug 2022 – Apr 2023",
    location: "Mumbai, India",
    points: [
      "Conducted investment feasibility analysis for sustainability-focused ventures and delivered structured findings to institutional and government stakeholders.",
      "Led fundraising and funder outreach, securing financing through targeted engagement with institutional partners and translating impact narratives into bankable asks.",
      "Built concise diligence packs — problem, unit economics, risks, and ask — that shortened the path from first conversation to commitment.",
    ],
  },
];

export const education = [
  {
    school: "Drexel University — LeBow College of Business",
    degree: "MBA, Finance · GPA 4.00",
    year: "2026",
    location: "Philadelphia, PA",
  },
  {
    school: "Narsee Monjee College of Commerce and Economics",
    degree: "BBA, Finance · GPA 4.00",
    year: "2024",
    location: "Mumbai, India",
  },
];

export const certifications = [
  "CFA Level II Candidate — CFA Institute Access Scholarship Recipient (2023, 2024)",
  "Winner, “Gold Bank” Imagine Cup — Intent (2025)",
  "Interstate Public Speaking Runner-Up, Oxford Society (2024)",
];

export const skillGroups = [
  {
    name: "Market & Business Intelligence",
    skills: [
      "Company & industry research",
      "Buying-signal identification",
      "Competitor benchmarking",
      "Opportunity prioritization",
      "Workforce & financial trend analysis",
      "Investment thesis drafting",
    ],
  },
  {
    name: "Revenue Strategy & GTM",
    skills: [
      "Go-to-market strategy",
      "Pipeline & deal-flow tracking",
      "Lead qualification",
      "Pitch narratives & business cases",
      "Relationship management",
      "Pricing & packaging design",
    ],
  },
  {
    name: "Data & Analytics",
    skills: [
      "Python (Pandas, NumPy)",
      "SQL & data pipelines",
      "Comps & precedent transactions",
      "DCF & scenario modeling",
      "Variance analysis",
      "Dashboards & reporting",
    ],
  },
  {
    name: "Tools",
    skills: [
      "Excel (advanced) & VBA",
      "Power BI · Tableau",
      "Bloomberg Terminal · Argus",
      "Salesforce-adjacent CRMs",
      "EViews · SAS",
      "AI research tools",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "chaingate-capital",
    title: "ChainGate Capital",
    role: "Independent Project · Strategy & Market Design",
    year: "2026",
    tags: ["Capital Markets", "Blockchain", "Strategy"],
    summary:
      "Tokenized private placement infrastructure for Reg D alternatives — an on-chain qualified purchaser access platform for direct family offices, built on the ERC-1400/ERC-3643 security token standards. The work maps an unoccupied wedge between placement platforms that have LPs but no rails, and tokenization stacks that have rails but no investors.",
    stats: [
      { value: "$1.5–2.5T", label: "Full addressable AUM" },
      { value: "9,000+", label: "Targeted family offices" },
      { value: "ERC-3643", label: "On-chain QP credential standard" },
      { value: "40–60 bps", label: "vs. 100–200 bps placement fees" },
    ],
    sections: [
      {
        heading: "The thesis",
        body: [
          "ChainGate sits at the junction of Reg D fund placement, blockchain tokenization infrastructure, and the $13T+ alternatives market. Its relevant industry — on-chain qualified purchaser access infrastructure for direct family offices — doesn't yet exist as a discrete, scaled segment. It is being carved out from the intersection of Reg D placement and institutional blockchain adoption.",
          "The initial product tokenizes a gold-Bitcoin (60/40) low-correlation collateral pair, but the strategy reframes the platform as a generalized tokenization engine: any asset pair or basket that satisfies a low- or inverse-correlation criterion can run on the same ERC-1400/ERC-3643 stack — precious metals baskets, Treasury-BTC, farmland-gold-BTC, carbon credit combinations. Infrastructure commands a valuation multiple of 5–10x a single-product fund.",
          "The economic pitch to family offices is simple: compress a 20–45 day subscription process into minutes, replace $5K–$15K of per-deal legal friction with a reusable on-chain QP credential, and cut placement economics from the typical 100–200 bps down toward a 40–60 bps platform fee — without sacrificing KYC/AML or transfer-restriction integrity.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "A full strategic analysis and positioning plan: Porter's Five Forces with empirical grounding, competitor teardowns of iCapital, Securitize, CAIS, Tokeny, and bulge-bracket prime brokerage — each assessed on revenue model, exploitable vulnerability, and 18-month neutralization path.",
          "A jobs-to-be-done value proposition mapping ZK-proof QP credentials, AI prospecting, and smart-contract subscriptions against the four job dimensions family offices are hiring for: find it, qualify it, commit to it, monitor it.",
          "A moat maturity framework defining milestone thresholds at 6, 18, and 36 months — from vulnerable prototype to defensible bilateral network — plus explicit tradeoffs, strategic risks, and validation priorities before committing resources. Entry conditions are deliberately conservative: no LP solicitation until securities counsel signs off on Rule 506(c) outreach, two GPs commit live Reg D offerings, and the stack deploys on an Ethereum L2 to neutralize gas-fee risk.",
        ],
      },
      {
        heading: "Why the wedge matters",
        body: [
          "Placement platforms like iCapital and CAIS already own relationships and workflow; tokenization vendors like Securitize and Tokeny already own rails. Neither side has closed the loop at scale for direct family-office access to Reg D paper. That empty upper quadrant — strong infrastructure and strong LP pipeline — is where ChainGate is designed to sit.",
          "The durable asset is not the smart contracts. It is the accumulated behavioral dataset of verified QP conversions and the retained credential network between deals — proprietary data a competitor copying the tech stack cannot replicate overnight.",
        ],
      },
    ],
    bullets: [
      {
        title: "Positioning insight",
        text: "The upper quadrant — high blockchain infrastructure and strong LP pipeline — is unoccupied at scale. Securitize and Tokeny have rails without investors; iCapital and CAIS have investors without rails.",
      },
      {
        title: "The real moat",
        text: "Not the code: the accumulated behavioral dataset of verified QP conversions and the retained credential network between deals — proprietary assets a competitor copying the tech stack cannot replicate.",
      },
      {
        title: "Disciplined entry conditions",
        text: "No LP solicitation until securities counsel signs off on Rule 506(c) outreach, two GPs commit live Reg D offerings, and the stack deploys on an Ethereum L2 to kill gas-fee risk.",
      },
    ],
  },
  {
    slug: "azimuth-revenue-model",
    title: "Azimuth Revenue Architecture",
    role: "Financial Modeling",
    year: "2026",
    tags: ["Revenue Modeling", "Fintech", "Interactive Model"],
    summary:
      "An eleven-stream interactive revenue model for the demand-capture layer of the U.S. touring economy — SaaS, marketplace take-rate, data licensing, and embedded finance, all priced off one proprietary airplay + venue dataset. The full model runs live on this page, with transparent assumptions you can stress.",
    stats: [
      { value: "11", label: "Revenue streams modeled" },
      { value: "$775.6M", label: "Year 5 revenue, base case" },
      { value: "54,450", label: "Active venues targeted by Y5 (33% of 165K)" },
      { value: "149%", label: "Revenue CAGR Y1–Y5, base case" },
    ],
    sections: [
      {
        heading: "The model",
        body: [
          "Azimuth monetizes a single proprietary asset — a real-time airplay + venue demand graph — through eleven compounding revenue lines: venue and marketplace SaaS, a 4.8% booking take-rate on gross guarantees, enterprise API and data licensing, artist guarantee financing, Parafin embedded capital, Stripe Connect embedded payments, a Smart Ad Campaigns product filling the post-ToneDen vacuum, an A&R intelligence layer sold to labels, advertising, hardware-as-a-service, and services.",
          "Every parameter is explicit: venue ramp, guarantee compression down the long tail, ARPU decay as municipal venues onboard, financing attach rates, and partner rev-shares. The model computes a full P&L per year — GMV, COGS, gross margin, opex scaling, and EBITDA — under base, upside, and downside scenarios.",
          "The interactive build on this site is the same workbook logic rendered live: change venue penetration or take-rate assumptions and the Year 1–5 stack recomputes, so the story is never divorced from the numbers.",
        ],
      },
      {
        heading: "Why it's built this way",
        body: [
          "Embedded lending and payments run through partners: Parafin underwrites and balance-sheets the loans, Stripe handles compliance. Azimuth keeps rev-share margin with zero originated capital — partner cuts without partner risk.",
          "Airplay velocity doubles as an A&R signal: the earliest leading indicator of an artist breaking, sold to labels as subscriptions and per-deal commissions. Every booked show lifts four revenue lines simultaneously — financing compounds on GMV as the marketplace grows.",
          "Monetization is deliberately stage-gated. Early years prioritize municipal SaaS, booking take-rate, payments, and Parafin pilots. Mid years scale financing, ads, and HaaS. Later years collect the platform tax — data licensing, enterprise API, and ticketing/insurance spreads — once the graph is dense enough to be indispensable.",
        ],
      },
      {
        heading: "What the base case implies",
        body: [
          "At roughly one-third penetration of the 165K U.S. venue universe by Year 5, base-case revenue reaches $775.6M with a 149% CAGR from Year 1 — aggressive, but internally consistent with attach rates that only unlock after marketplace liquidity exists.",
          "The strategic claim is not that every stream wins on day one. It is that one dataset can underwrite tooling, finance, ads, and A&R without rebuilding the data moat for each product — which is how a demand-capture layer becomes a platform rather than a feature.",
        ],
      },
    ],
    bullets: [
      {
        title: "Stage-gated monetization",
        text: "Y1–Y2: municipal SaaS, booking take-rate, payments, Parafin pilots. Y3–Y4: financing at scale, ad network, HaaS. Y5+: the platform tax — data licensing, enterprise API, ticketing and insurance spreads.",
      },
      {
        title: "One dataset, eleven monetizations",
        text: "Tooling, finance, ads, and A&R all read from the same source of truth — the airplay + venue demand graph.",
      },
      {
        title: "The ToneDen vacuum",
        text: "ToneDen was acquired and frozen in 2020; fanlink.to expired in 2024 and silently broke every smart link. Azimuth's ad product relaunches that surface with venue-grounded targeting no DSP can replicate.",
      },
    ],
  },
  {
    slug: "nikkei-volatility",
    title: "Nikkei 225 Volatility & Macro Surprises",
    role: "Econometrics · ECON 560, Drexel",
    year: "2026",
    tags: ["Econometrics", "GARCH", "Time Series"],
    summary:
      "Does unexpected inflation or industrial production news drive short-term volatility in the Nikkei 225? A three-layer ARMA / GARCH(1,1) / ARDL framework over 103 quarterly observations, 2000–2026 — with formal diagnostics for every modeling choice rather than narrative assertion.",
    stats: [
      { value: "103", label: "Quarterly observations" },
      { value: "0.906", label: "GARCH persistence (α₁+β₁)" },
      { value: "+1.08***", label: "Yen depreciation → Nikkei return" },
      { value: "27", label: "Models tested in AIC grid search" },
    ],
    sections: [
      {
        heading: "Method",
        body: [
          "A three-layer modeling framework in EViews: an AR(1) mean equation selected by AIC/BIC grid search; a GARCH(1,1) conditional variance equation capturing volatility clustering; and an ARDL specification testing whether CPI surprises and industrial production news drive conditional mean returns. All series verified I(0) by ADF tests, with an intentional spurious-regression foil on price levels.",
          "A 27-equation AIC grid search selects ARDL(1,2,1) as the best OLS specification; combining the ARDL mean with GARCH variance lowers AIC from 7.60 to 7.16 and passes every residual diagnostic — white noise, ARCH-LM, Durbin-Watson, and Breusch-Godfrey.",
          "Crisis dummies for the GFC and COVID periods, plus a Chow break around Abenomics (2012Q4), keep the mean equation honest about regime shifts that a pooled sample would smear into noise.",
        ],
      },
      {
        heading: "Findings",
        body: [
          "The yen dominates: a 1% depreciation vs. USD raises the Nikkei ~1.08% (p<0.001), consistent with Japan's export-heavy index composition. Crisis dummies are large and significant — GFC −8.3%, COVID −11.6% structural shocks to quarterly mean returns.",
          "Volatility is highly persistent (α₁+β₁ = 0.906; variance shock half-life ~7 quarters). A Chow test at 2012Q4 confirms Abenomics as a structural break: mean returns shift +4pp, volatility falls from 11.1% to 9.2%, and GARCH persistence drops from ~0.94 to ~0.87 as the BoJ backstop dampened tail risk. Interest rate changes are insignificant — Japan's decades of ZIRP left no surprise component to price.",
          "CPI and industrial-production surprises add only marginal explanatory power once FX and crisis regimes are controlled for. For short-horizon Nikkei risk, the yen and the policy regime matter more than the inflation print.",
        ],
      },
      {
        heading: "Why this matters for risk",
        body: [
          "Persistence near 0.91 means a volatility shock does not decay in a quarter or two — it lingers for years. That is consequential for VaR, options pricing, and any hedge that assumes mean-reverting Japanese equity risk on Western timescales.",
          "Companion VAR/VECM work on Japan's fiscal-monetary transmission in the same course earned 99/100 (A+). The shared discipline: every anticipated objection — stationarity, lag selection, identification, structural breaks — answered with a formal test, not a footnote.",
        ],
      },
    ],
    bullets: [
      {
        title: "Grade",
        text: "Companion VAR/VECM work on Japan's fiscal-monetary transmission earned 99/100 (A+) in Drexel's ECON 560.",
      },
      {
        title: "Rigor",
        text: "Every anticipated question — stationarity, GARCH vs. robust OLS, lag selection, identification, structural break testing — answered with formal diagnostics rather than assertion.",
      },
    ],
  },
  {
    slug: "dea-accounting-efficiency",
    title: "DEA Benchmarking: Top 100 Accounting Firms",
    role: "Quantitative Analysis · ACCT 655",
    year: "2025",
    tags: ["Data Envelopment Analysis", "Linear Programming", "Regression"],
    summary:
      "Revenue rankings measure scale, not efficiency. A two-stage Data Envelopment Analysis of Accounting Today's Top 100 firms (2016–2025) identifies which firms actually convert partners, professionals, and offices into revenue — and which ones grow while diluting productivity.",
    stats: [
      { value: "~100", label: "DMUs per year" },
      { value: "10 yrs", label: "Panel: 2016–2025" },
      { value: "BCC", label: "Output-oriented LP formulation" },
      { value: "2-stage", label: "DEA scores → OLS drivers" },
    ],
    sections: [
      {
        heading: "Approach",
        body: [
          "Stage 1 solves a Banker-Charnes-Cooper output-oriented linear program for each firm-year, constructing a benchmark frontier from observed data with no assumed functional form. Inputs: partners, professionals, offices. Output: revenue. A score of 1 means the firm sits on the efficiency frontier; below 1 quantifies exactly how much more output the same inputs should produce.",
          "Stage 2 regresses the efficiency scores on revenue growth, firm size, service mix (MAS%), a year trend, and a Big 4 dummy — with full diagnostics for multicollinearity (VIF), heteroscedasticity, and influential outliers like PE-backed roll-ups.",
          "The panel spans a decade in which private equity remade the mid-market accounting landscape. That makes the efficiency lens especially useful: revenue league tables celebrate consolidators; DEA asks whether the acquired headcount is yet earning its keep.",
        ],
      },
      {
        heading: "What the frontier reveals",
        body: [
          "Boutique specialists (Schellman, Cain Watters) dominate the frontier with lean structures and high-margin engagements, while Big 4 scale carries an efficiency penalty from broader service mixes and audit-heavy models.",
          "A strategic quadrant maps efficiency against revenue growth: Stars (fast-scaling lean firms), Sleepers (PE-backed consolidators growing via M&A faster than they integrate — Cherry Bekaert's revenue doubled in 2024), Dogs (efficient but plateaued Big 4), and Question Marks flagged for strategic review.",
          "Stage-2 results put the practical lever in plain sight: management advisory mix (MAS%) is the structural attribute that most reliably predicts proximity to the frontier. Size alone does not.",
        ],
      },
      {
        heading: "How partners and sponsors can use it",
        body: [
          "For an independent firm, DEA names an efficient peer group — a concrete operational benchmark rather than a vague aspiration to “be more productive.” For a PE sponsor, the Sleepers quadrant is an integration dashboard: growth without frontier recovery is a warning, not a victory lap.",
          "The theoretical spine is Farrell (1957), Charnes-Cooper-Rhodes (1978), and Banker-Charnes-Cooper (1984), applied to a live commercial dataset instead of a textbook toy panel.",
        ],
      },
    ],
    bullets: [
      {
        title: "Core insight",
        text: "A mid-size firm doing more with less is invisible in a revenue league table. DEA makes it visible — and identifies its efficient peer group as an explicit benchmark.",
      },
      {
        title: "Theory base",
        text: "Farrell (1957), Charnes-Cooper-Rhodes (1978), Banker-Charnes-Cooper (1984) — applied to a live commercial dataset.",
      },
    ],
  },
  {
    slug: "greenplate",
    title: "GreenPlate 2.0",
    role: "Case Competition · Aramark",
    year: "2026",
    tags: ["Strategy", "Sustainability", "Financial Modeling"],
    summary:
      "A ten-pillar campus dining decarbonization blueprint for Aramark — 32%+ verified carbon reduction, cost-neutral in Year 1, $750K net surplus over three years. Built for the 2026 Philly-Wide Case Competition as a profit-center strategy, not a CSR slide deck.",
    stats: [
      { value: "32%+", label: "Verified carbon reduction" },
      { value: "$1.9M", label: "3-year net savings" },
      { value: "<12 mo", label: "Payback on primary investments" },
      { value: "10+4", label: "Pillars + radical innovations" },
    ],
    sections: [
      {
        heading: "The framework",
        body: [
          "A university system asked Aramark to cut dining carbon 30% without raising costs or hurting satisfaction. GreenPlate 2.0 answers with ten integrated pillars — CFP-calculator-verified menu swaps (beef chili → black bean chili: −97% CO2e), NVIDIA Metropolis edge-AI demand forecasting cutting waste 25%, a gamified CarbonIQ behavioral platform, supplier carbon scorecards with blockchain traceability, energy retrofits, and circular-economy operations.",
          "The strategic asymmetry: Aramark controls the buildings, not just the menus. HVAC, energy procurement, fleet, and construction specs are all in scope — levers Sodexo and Compass cannot pull on food-only contracts.",
          "Pillar contributions are stacked with a safety margin above the 30% mandate, so a single underperforming workstream does not sink the verified reduction claim.",
        ],
      },
      {
        heading: "Four innovations with no precedent",
        body: [
          "Algae bioreactor smoothie bars that absorb kitchen CO2 exhaust and serve the harvest as spirulina smoothies — the dining hall becomes a visible carbon sink. A Student Carbon Dividend redistributing 50% of Verra carbon-credit revenue to students as dining credit, making eating green literally pay. Edible millet cutlery and mycelium-grown packaging. And an AI Digital Dining Twin with an AR farm-to-plate carbon journey.",
          "The financial model holds it together: ~$1.45M invested over three years against $2.2M+ in savings and revenue, with every pillar self-funding by Year 2. Sustainability as a profit center, not a cost center.",
          "Behavioral design is dual-signal by intent: phantom carbon pricing triggers loss aversion at the point of choice, while real dividend payouts create gain motivation over the semester — something a static eco-label cannot do.",
        ],
      },
      {
        heading: "Proof, not narrative",
        body: [
          "Every menu swap is computed through the WRI Cool Food Pledge Calculator. Quarterly SBTi-aligned third-party audits replace narrative-only claims, so the reduction percentage survives procurement and board scrutiny.",
          "Implementation is sequenced: Year 1 baselines and quick-payback forecasting; Year 2 scales CarbonIQ, electrification, and HVAC; Year 3 locks plant-forward mix, Verra credits, and packages GreenPlate as Aramark’s premium university offer.",
        ],
      },
    ],
    bullets: [
      {
        title: "Verified, not narrated",
        text: "Every menu swap is computed through the WRI Cool Food Pledge Calculator; quarterly SBTi-aligned third-party audits replace narrative-only claims.",
      },
      {
        title: "Behavioral economics",
        text: "Phantom carbon pricing (loss aversion) paired with real dividend payouts (gain motivation) — a dual signal no simple eco-label achieves.",
      },
    ],
  },
];
