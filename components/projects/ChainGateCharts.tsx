"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AXIS, GRID_STROKE, TOOLTIP_STYLE } from "@/components/charts/theme";

const GOLD = "#c9a86a";
const BLUE = "#8fb3db";

// Market expansion by product generation (midpoints of documented ranges).
const GENERATIONS = [
  {
    gen: "G1",
    label: "Gold–BTC (60/40)",
    aumLow: 75,
    aumHigh: 150,
    aumMid: 112.5,
    officesCum: 2000,
    segment: "Crypto-native family offices",
  },
  {
    gen: "G2",
    label: "Gold–ETH + precious metals",
    aumLow: 200,
    aumHigh: 350,
    aumMid: 275,
    officesCum: 5000,
    segment: "Digital asset + inflation-hedge investors",
  },
  {
    gen: "G3",
    label: "Treasury–BTC + farmland baskets",
    aumLow: 500,
    aumHigh: 1000,
    aumMid: 750,
    officesCum: 11500,
    segment: "Fixed-income, real assets, impact investors",
  },
  {
    gen: "G4",
    label: "Volatility + carbon baskets",
    aumLow: 800,
    aumHigh: 1500,
    aumMid: 1150,
    officesCum: 15500,
    segment: "Macro traders, ESG-mandated offices",
  },
  {
    gen: "Platform",
    label: "Full multi-collateral engine",
    aumLow: 1500,
    aumHigh: 2500,
    aumMid: 2000,
    officesCum: 15500,
    segment: "Any QP seeking low-correlation exposure",
  },
];

const FORCES = [
  { force: "Threat of substitutes", rating: 5, label: "High", note: "The status quo: 72% of $250M+ offices use existing prime brokerage / placement relationships" },
  { force: "Buyer power (LPs)", rating: 5, label: "High", note: "9,000+ sophisticated, fee-sensitive family offices with zero lock-in" },
  { force: "Rivalry", rating: 4, label: "Moderate–High", note: "8–12 platforms; iCapital at $180B+ platform assets with visible fee compression" },
  { force: "Threat of new entrants", rating: 3, label: "Moderate", note: "Low cost to build, high cost to monetize: BD registration is 6–18 months, $500K–$2M" },
  { force: "Supplier power", rating: 2, label: "Low–Moderate", note: "Commoditized stack; only real risk is Ethereum L1 gas — solved by L2 deployment" },
];

const QUADRANTS: {
  title: string;
  tone: "target" | "threat" | "neutral";
  entries: string[];
  note: string;
}[] = [
  {
    title: "High blockchain · strong LP pipeline",
    tone: "target",
    entries: ["★ ChainGate target quadrant"],
    note: "On-chain QP credentials + AI-curated LP pipeline. No platform occupies this at scale.",
  },
  {
    title: "High blockchain · weak LP pipeline",
    tone: "neutral",
    entries: ["Securitize", "Tokeny"],
    note: "Tokenization rails without an investor acquisition engine.",
  },
  {
    title: "Low blockchain · strong LP pipeline",
    tone: "threat",
    entries: ["iCapital (most dangerous)", "CAIS", "Goldman / UBS prime brokerage"],
    note: "Strong LP networks, no on-chain rails. iCapital's tokenization roadmap is the threat to watch.",
  },
  {
    title: "Low blockchain · weak LP pipeline",
    tone: "neutral",
    entries: ["Law-firm subscriptions", "Status quo (do nothing)"],
    note: "High friction, zero platform fee — the most dangerous substitute.",
  },
];

export default function ChainGateCharts() {
  return (
    <div className="mt-16 space-y-10">
      <div>
        <div className="flex items-center gap-3">
          <h2 className="font-display text-2xl text-ink">The market math</h2>
          <span className="rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-wider text-gold">
            From the strategy document
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Each product generation opens a structurally distinct investor segment on
          the same ERC-1400/ERC-3643 stack — the addressable market compounds from
          ~$112B to $1.5–2.5T without rebuilding the platform.
        </p>
      </div>

      {/* Expansion chart */}
      <div className="rounded-xl border border-line bg-bg-card p-6">
        <h3 className="text-sm font-medium text-gold">
          Addressable AUM by product generation ($B, range midpoints) vs. reachable QP offices
        </h3>
        <div className="mt-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={GENERATIONS} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={GRID_STROKE} vertical={false} />
              <XAxis dataKey="gen" stroke={AXIS.stroke} fontSize={AXIS.fontSize} tickLine={false} />
              <YAxis
                yAxisId="aum"
                stroke={AXIS.stroke}
                fontSize={AXIS.fontSize}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                yAxisId="offices"
                orientation="right"
                stroke={AXIS.stroke}
                fontSize={AXIS.fontSize}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
              />
              <Tooltip
                contentStyle={TOOLTIP_STYLE}
                cursor={{ fill: "rgba(201,168,106,0.06)" }}
                formatter={(v, name, item) =>
                  name === "Addressable AUM ($B)"
                    ? [
                        `$${item?.payload?.aumLow}B–$${item?.payload?.aumHigh}B — ${item?.payload?.label}`,
                        name,
                      ]
                    : [`${Number(v).toLocaleString()} offices — ${item?.payload?.segment}`, name]
                }
              />
              <Legend wrapperStyle={{ fontSize: 12, color: "#9aa3b2" }} />
              <Bar
                yAxisId="aum"
                dataKey="aumMid"
                name="Addressable AUM ($B)"
                fill={GOLD}
                radius={[3, 3, 0, 0]}
                barSize={44}
              />
              <Line
                yAxisId="offices"
                dataKey="officesCum"
                name="Cumulative QP offices reachable"
                stroke={BLUE}
                strokeWidth={2}
                dot={{ fill: BLUE, r: 3 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Positioning map */}
      <div>
        <h3 className="font-display text-xl text-ink">Competitive positioning map</h3>
        <p className="mt-2 text-sm text-ink-2">
          The two axes that split this market: blockchain-native infrastructure depth
          (vertical) and investor-side LP pipeline ownership (horizontal).
        </p>
        <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {QUADRANTS.map((q) => (
            <div
              key={q.title}
              className={`p-6 ${
                q.tone === "target"
                  ? "bg-gold/10"
                  : q.tone === "threat"
                    ? "bg-bg-card"
                    : "bg-bg-card"
              }`}
            >
              <p className="text-[11px] uppercase tracking-wider text-ink-3">{q.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {q.entries.map((e) => (
                  <span
                    key={e}
                    className={`rounded-full border px-3 py-1 text-xs ${
                      q.tone === "target"
                        ? "border-gold text-gold"
                        : e.includes("dangerous")
                          ? "border-[#b0654f] text-[#cf8871]"
                          : "border-line-strong text-ink-2"
                    }`}
                  >
                    {e}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-3">{q.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Five forces */}
      <div>
        <h3 className="font-display text-xl text-ink">Porter&apos;s Five Forces</h3>
        <div className="mt-4 space-y-3">
          {FORCES.map((f) => (
            <div key={f.force} className="rounded-xl border border-line bg-bg-card p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-ink">{f.force}</p>
                <p className="shrink-0 text-xs text-gold">{f.label}</p>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-gold"
                  style={{ width: `${(f.rating / 5) * 100}%`, opacity: 0.45 + f.rating * 0.11 }}
                />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-3">{f.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Unit economics strip */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
        {[
          ["$5K–$15K", "Legal cost per subscription ChainGate's credential replaces"],
          ["20–45 days", "Traditional Reg D close, compressed to minutes on-chain"],
          ["$50K–$150K", "Fully-loaded cost of the status quo on a $10M commitment"],
          ["$40K–$60K", "ChainGate cost at 40–60 bps on the same commitment"],
        ].map(([v, l]) => (
          <div key={l} className="bg-bg-card p-5">
            <p className="font-display text-2xl text-ink">{v}</p>
            <p className="mt-1 text-xs leading-snug text-ink-3">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
