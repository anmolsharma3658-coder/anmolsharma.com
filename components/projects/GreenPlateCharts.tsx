"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AXIS, GRID_STROKE, TOOLTIP_STYLE } from "@/components/charts/theme";

const GOLD = "#c9a86a";
const GREEN = "#7da87a";
const RED = "#b0654f";

// WRI Cool Food Pledge Calculator-verified swaps, kg CO2e per serving.
const SWAPS = [
  { dish: "Beef chili → black bean chili", baseline: 8.1, swapped: 0.27, saving: "−97%" },
  { dish: "Beef bolognese → lentil & mushroom", baseline: 8.1, swapped: 0.33, saving: "−96%" },
  { dish: "Beef tacos → jackfruit al pastor", baseline: 6.75, swapped: 0.25, saving: "−96%" },
  { dish: "Beef burger → 50/50 mycoprotein blend", baseline: 4.59, swapped: 1.55, saving: "−66%" },
  { dish: "Cheese pizza → cauliflower & ricotta", baseline: 2.25, swapped: 0.95, saving: "−58%" },
  { dish: "Pulled pork → pulled jackfruit BBQ", baseline: 1.54, swapped: 0.18, saving: "−88%" },
  { dish: "Eggs & bacon → Fy protein scramble", baseline: 1.44, swapped: 0.29, saving: "−80%" },
];

const FINANCE = [
  { year: "Year 1", cumSavings: 680, investment: 1450 },
  { year: "Year 2", cumSavings: 1580, investment: 1450 },
  { year: "Year 3", cumSavings: 2200, investment: 1450 },
];

const INITIATIVES = [
  { name: "AI demand forecasting", invest: "$80–120K", savings: "$200–400K/yr", co2: "8–10%", payback: "< 8 mo" },
  { name: "Menu redesign + training", invest: "$15–30K", savings: "$120–200K/yr", co2: "10–15%", payback: "< 3 mo" },
  { name: "Energy upgrades (LED, HVAC, solar)", invest: "$300–500K", savings: "$150–300K/yr", co2: "5–8%", payback: "24 mo" },
  { name: "CarbonIQ platform", invest: "$60–90K", savings: "Sponsorship-funded", co2: "5–8%", payback: "Self-funding Y2" },
  { name: "Fleet electrification + AI routing", invest: "$200–400K", savings: "$80–120K/yr", co2: "2–4%", payback: "30 mo" },
  { name: "Algae bioreactors (4 halls)", invest: "$180–320K", savings: "$188–312K revenue", co2: "1.5–2.5%", payback: "14 mo" },
  { name: "Supply chain scorecard", invest: "$20–40K", savings: "$50–100K/yr", co2: "3–5%", payback: "12 mo" },
  { name: "Edible cutlery + mycelium packaging", invest: "$30–50K", savings: "$20–35K/yr", co2: "0.5–1%", payback: "12 mo" },
];

export default function GreenPlateCharts() {
  return (
    <div className="mt-16 space-y-10">
      <div data-reveal>
        <div className="flex items-center gap-3">
          <h2 className="font-display text-2xl text-ink">The numbers behind 32%</h2>
          <span className="rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-wider text-gold">
            CFP-calculator verified
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          Every swap below was computed through the WRI Cool Food Pledge Calculator —
          baseline ingredient × serving weight, summed across CFP Metrics 2 and 4.
          Applied across a 10,000-meal/day week: ~270 → ~185 metric tons CO2e, a
          31.5% cut from menu changes alone.
        </p>
      </div>

      {/* Menu swaps */}
      <div className="rounded-xl border border-line bg-bg-card p-6">
        <h3 className="text-sm font-medium text-gold">
          Item-level swaps — kg CO2e per serving
        </h3>
        <div className="mt-4 h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={SWAPS}
              layout="vertical"
              margin={{ top: 4, right: 40, left: 12, bottom: 4 }}
            >
              <CartesianGrid stroke={GRID_STROKE} horizontal={false} />
              <XAxis type="number" stroke={AXIS.stroke} fontSize={AXIS.fontSize} tickLine={false} />
              <YAxis
                type="category"
                dataKey="dish"
                width={230}
                stroke={AXIS.stroke}
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={TOOLTIP_STYLE}
                cursor={{ fill: "rgba(201,168,106,0.06)" }}
                formatter={(v, name, item) =>
                  name === "Baseline"
                    ? [`${v} kg CO2e`, "Baseline"]
                    : [`${v} kg CO2e (${item?.payload?.saving})`, "After swap"]
                }
              />
              <Legend wrapperStyle={{ fontSize: 12, color: "#9aa3b2" }} />
              <Bar dataKey="baseline" name="Baseline" fill={RED} radius={[0, 3, 3, 0]} barSize={10} />
              <Bar dataKey="swapped" name="After swap" fill={GREEN} radius={[0, 3, 3, 0]} barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Financial trajectory */}
      <div className="rounded-xl border border-line bg-bg-card p-6">
        <h3 className="text-sm font-medium text-gold">
          Cumulative savings + revenue vs. total investment ($K)
        </h3>
        <p className="mt-1 text-xs text-ink-3">
          Break-even inside Year 2; $750K net surplus by Year 3, $2.8M projected at
          five years with scale.
        </p>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={FINANCE} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={GRID_STROKE} vertical={false} />
              <XAxis dataKey="year" stroke={AXIS.stroke} fontSize={AXIS.fontSize} tickLine={false} />
              <YAxis stroke={AXIS.stroke} fontSize={AXIS.fontSize} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={TOOLTIP_STYLE}
                cursor={{ fill: "rgba(201,168,106,0.06)" }}
                formatter={(v, name) => [`$${Number(v).toLocaleString()}K`, name]}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: "#9aa3b2" }} />
              <Bar
                dataKey="cumSavings"
                name="Cumulative savings + revenue"
                fill={GOLD}
                radius={[3, 3, 0, 0]}
                barSize={48}
              />
              <Line
                dataKey="investment"
                name="Total 3-year investment ($1.45M)"
                stroke={RED}
                strokeDasharray="6 4"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Initiative table */}
      <div className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-line bg-bg-raised text-left text-xs uppercase tracking-wider text-ink-3">
              <th className="px-4 py-3 font-medium">Initiative</th>
              <th className="px-4 py-3 text-right font-medium">Y1 invest</th>
              <th className="px-4 py-3 text-right font-medium">Annual savings</th>
              <th className="px-4 py-3 text-right font-medium">CO2e impact</th>
              <th className="px-4 py-3 text-right font-medium">Payback</th>
            </tr>
          </thead>
          <tbody>
            {INITIATIVES.map((r) => (
              <tr key={r.name} className="border-b border-line last:border-0">
                <td className="px-4 py-3 text-ink">{r.name}</td>
                <td className="px-4 py-3 text-right tabular-nums text-ink-2">{r.invest}</td>
                <td className="px-4 py-3 text-right tabular-nums text-ink-2">{r.savings}</td>
                <td className="px-4 py-3 text-right tabular-nums text-ink-2">{r.co2}</td>
                <td className="px-4 py-3 text-right tabular-nums text-gold">{r.payback}</td>
              </tr>
            ))}
            <tr className="bg-gold/5 font-medium">
              <td className="px-4 py-3 text-gold">Total (3-year)</td>
              <td className="px-4 py-3 text-right tabular-nums text-ink">~$1.45M</td>
              <td className="px-4 py-3 text-right tabular-nums text-ink">&gt;$2.2M</td>
              <td className="px-4 py-3 text-right tabular-nums text-ink">≥32%</td>
              <td className="px-4 py-3 text-right tabular-nums text-ink">Net positive Y2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
