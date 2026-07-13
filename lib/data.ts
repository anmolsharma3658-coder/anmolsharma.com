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
  title: "Private Equity Analyst · CFA Level III Candidate",
  location: "Philadelphia, PA",
  email: "anmolsharma3658@gmail.com",
  phone: "(215) 459-7044",
  linkedin: "https://www.linkedin.com/in/anmolsharma",
  intro:
    "Analytical, research-driven finance professional translating market intelligence and financial data into actionable strategies. I've researched $2.5B+ in transaction value, engineered Python and SQL pipelines across $240M+ in multi-asset portfolios, and built a $12M diamond sales vertical from scratch.",
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
      "Source, evaluate, and prioritize lower middle market investment opportunities on a fund-by-fund basis, building investable theses for senior decision-makers.",
      "Conduct company and market research with SQL, Python (Pandas, NumPy, Matplotlib), SAS, Tableau, and CRM systems to surface opportunities and accelerate reporting.",
      "Evaluate target financials and workforce/cost trends across mining, oil & gas, and consumer goods, translating findings into diligence prioritization frameworks.",
      "Support cross-border diligence on prospective acquisitions, including a Netherlands-based specialty chemical manufacturer.",
    ],
  },
  {
    company: "Sharda Jewellers – Dhruv Diamonds",
    role: "Business Development Lead",
    period: "2024 – Present",
    location: "Mumbai, India",
    points: [
      "Built a new luxury diamond sales vertical from scratch, driving $12M+ in revenue by converting a new generation of style-conscious luxury buyers.",
      "Curated relationships with top craftsmen and designers to build a differentiated product line, translating craftsmanship intelligence into go-to-market strategy.",
      "Owned the full sales cycle — prospecting, quoting, outreach, and negotiation — through to closing high-value transactions.",
    ],
  },
  {
    company: "JM Financial",
    role: "Financial Due Diligence / Valuation Analyst",
    period: "Jun 2024 – Sep 2025",
    location: "Mumbai, India",
    points: [
      "Identified $45M+ in EBITDA adjustments and $18M in contingent liabilities through GAAP-informed review of financial statements and off-balance-sheet exposures.",
      "Performed comparable company, precedent transaction, and DCF valuations across buy- and sell-side mandates spanning $2.5B+ in transaction value.",
      "Built dynamic Excel cash flow and net debt schedules with multi-scenario sensitivity tables, used directly in live negotiations and investment committee presentations.",
      "Engineered Python and SQL pipelines to analyze $240M+ in multi-asset portfolios, surfacing discrepancies and performance signals across allocation and returns data.",
    ],
  },
  {
    company: "Bighaat",
    role: "Advisory Intern",
    period: "May 2021 – Aug 2021",
    location: "Bengaluru, India",
    points: [
      "Helped secure ₹100 crores (~$12M) in institutional growth capital by building asset-level financial projection models and pitching them to prospective investors.",
      "Mapped order-to-cash workflows using Celonis process mining, identifying 25%+ structural inefficiencies with $4.2M projected annual impact.",
    ],
  },
  {
    company: "Enactus International",
    role: "Business Development Intern",
    period: "Aug 2022 – Apr 2023",
    location: "Mumbai, India",
    points: [
      "Conducted investment feasibility analysis for sustainability-focused ventures and delivered structured findings to institutional and government stakeholders.",
      "Led fundraising and funder outreach, securing financing through targeted engagement with institutional partners.",
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
  "CFA Level III Candidate — CFA Institute Access Scholarship Recipient (2023, 2024)",
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
    ],
  },
  {
    name: "Data & Analytics",
    skills: [
      "Python (Pandas, NumPy)",
      "SQL & data pipelines",
      "Comps & precedent transactions",
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
      "Tokenized private placement infrastructure for Reg D alternatives — an on-chain qualified purchaser access platform for direct family offices, built on the ERC-1400/ERC-3643 security token standards.",
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
        ],
      },
      {
        heading: "What I built",
        body: [
          "A full strategic analysis and positioning plan: Porter's Five Forces with empirical grounding, competitor teardowns of iCapital, Securitize, CAIS, Tokeny, and bulge-bracket prime brokerage — each assessed on revenue model, exploitable vulnerability, and 18-month neutralization path.",
          "A jobs-to-be-done value proposition mapping ZK-proof QP credentials, AI prospecting, and smart-contract subscriptions against the four job dimensions family offices are hiring for: find it, qualify it, commit to it, monitor it. A reusable on-chain credential replaces $5K–$15K in per-subscription legal fees and compresses 20–45 day closes to minutes.",
          "A moat maturity framework defining milestone thresholds at 6, 18, and 36 months — from vulnerable prototype to defensible bilateral network — plus explicit tradeoffs, strategic risks, and validation priorities before committing resources.",
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
      "An eleven-stream interactive revenue model for the demand-capture layer of the U.S. touring economy — SaaS, marketplace take-rate, data licensing, and embedded finance, all priced off one proprietary airplay + venue dataset. The full model runs live on this page.",
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
        ],
      },
      {
        heading: "Why it's built this way",
        body: [
          "Embedded lending and payments run through partners: Parafin underwrites and balance-sheets the loans, Stripe handles compliance. Azimuth keeps rev-share margin with zero originated capital — partner cuts without partner risk.",
          "Airplay velocity doubles as an A&R signal: the earliest leading indicator of an artist breaking, sold to labels as subscriptions and per-deal commissions. Every booked show lifts four revenue lines simultaneously — financing compounds on GMV as the marketplace grows.",
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
      "Does unexpected inflation or industrial production news drive short-term volatility in the Nikkei 225? A three-layer ARMA / GARCH(1,1) / ARDL framework over 103 quarterly observations, 2000–2026.",
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
        ],
      },
      {
        heading: "Findings",
        body: [
          "The yen dominates: a 1% depreciation vs. USD raises the Nikkei ~1.08% (p<0.001), consistent with Japan's export-heavy index composition. Crisis dummies are large and significant — GFC −8.3%, COVID −11.6% structural shocks to quarterly mean returns.",
          "Volatility is highly persistent (α₁+β₁ = 0.906; variance shock half-life ~7 quarters). A Chow test at 2012Q4 confirms Abenomics as a structural break: mean returns shift +4pp, volatility falls from 11.1% to 9.2%, and GARCH persistence drops from ~0.94 to ~0.87 as the BoJ backstop dampened tail risk. Interest rate changes are insignificant — Japan's decades of ZIRP left no surprise component to price.",
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
      "Revenue rankings measure scale, not efficiency. A two-stage Data Envelopment Analysis of Accounting Today's Top 100 firms (2016–2025) identifies which firms actually convert partners, professionals, and offices into revenue.",
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
        ],
      },
      {
        heading: "What the frontier reveals",
        body: [
          "Boutique specialists (Schellman, Cain Watters) dominate the frontier with lean structures and high-margin engagements, while Big 4 scale carries an efficiency penalty from broader service mixes and audit-heavy models.",
          "A strategic quadrant maps efficiency against revenue growth: Stars (fast-scaling lean firms), Sleepers (PE-backed consolidators growing via M&A faster than they integrate — Cherry Bekaert's revenue doubled in 2024), Dogs (efficient but plateaued Big 4), and Question Marks flagged for strategic review.",
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
      "A ten-pillar campus dining decarbonization blueprint for Aramark — 32%+ verified carbon reduction, cost-neutral in Year 1, $750K net surplus over three years. Built for the 2026 Philly-Wide Case Competition.",
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
          "The strategic asymmetry: Aramark controls the buildings, not just the menus. HVAC, energy procurement, fleet, and construction specs are all in scope — levers Sodexo and Compass cannot pull.",
        ],
      },
      {
        heading: "Four innovations with no precedent",
        body: [
          "Algae bioreactor smoothie bars that absorb kitchen CO2 exhaust and serve the harvest as spirulina smoothies — the dining hall becomes a visible carbon sink. A Student Carbon Dividend redistributing 50% of Verra carbon-credit revenue to students as dining credit, making eating green literally pay. Edible millet cutlery and mycelium-grown packaging. And an AI Digital Dining Twin with an AR farm-to-plate carbon journey.",
          "The financial model holds it together: ~$1.45M invested over three years against $2.2M+ in savings and revenue, with every pillar self-funding by Year 2. Sustainability as a profit center, not a cost center.",
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
