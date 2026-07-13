"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  FIN_ATTACH_AXIS,
  SCENARIOS,
  TAKE_AXIS,
  TAKE_RATE,
  TOTAL_US_VENUES,
  YEARS,
  buildModel,
  fmt$K,
  fmt$M,
  pct,
  pct1,
  sensitivityGrid,
  type ScenarioKey,
} from "@/lib/azimuth";
import { AXIS, CHART_COLORS, GRID_STROKE, TOOLTIP_STYLE } from "@/components/charts/theme";

const PARTNER_CUT = new Set(["parafin", "payments"]);

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-bg-card p-5">
      <p className="font-display text-2xl text-ink">{value}</p>
      <p className="mt-1 text-xs leading-snug text-ink-3">{label}</p>
    </div>
  );
}

export default function AzimuthModel() {
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>("base");
  const [highlight, setHighlight] = useState<string>("all");

  const scenario = SCENARIOS[scenarioKey];
  const { years, streams } = useMemo(() => buildModel(scenario), [scenario]);
  const y5 = years[4];
  const cagr = Math.pow(y5.total / years[0].total, 1 / 4) - 1;

  const visibleStreams =
    highlight === "all" ? streams : streams.filter((s) => s.key === highlight);

  const barData = YEARS.map((year, i) => {
    const row: Record<string, number | string> = { year };
    visibleStreams.forEach((s) => {
      row[s.name] = +(s.byYear[i] / 1000).toFixed(2);
    });
    return row;
  });

  const pieData = streams.map((s) => ({
    name: s.name,
    value: +(s.byYear[4] / 1000).toFixed(1),
  }));

  const grid = useMemo(() => sensitivityGrid(scenario), [scenario]);
  const gridFlat = grid.flat();
  const gridMin = Math.min(...gridFlat);
  const gridMax = Math.max(...gridFlat);
  const heatAlpha = (v: number) =>
    0.06 + ((v - gridMin) / Math.max(gridMax - gridMin, 1)) * 0.38;

  const pnlRows: [string, ...string[]][] = [
    ["Revenue", ...years.map((y) => fmt$K(y.total))],
    ["Cost of revenue", ...years.map((y) => fmt$K(y.cogs))],
    ["Gross profit", ...years.map((y) => fmt$K(y.grossProfit))],
    ["Gross margin", ...years.map((y) => pct(y.grossMargin))],
    ["Operating expense", ...years.map((y) => fmt$K(y.opex))],
    ["EBITDA", ...years.map((y) => fmt$K(y.ebitda))],
    ["EBITDA margin", ...years.map((y) => pct(y.ebitdaMargin))],
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center gap-3">
        <h2 className="font-display text-2xl text-ink">The live model</h2>
        <span className="rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-wider text-gold">
          Interactive
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-2">
        This is the actual model, recomputed in your browser. Switch scenarios or
        isolate a stream — every figure below updates from the same assumptions
        used in the underlying workbook.
      </p>

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-xs uppercase tracking-wider text-ink-3">Scenario</span>
        {(Object.keys(SCENARIOS) as ScenarioKey[]).map((k) => (
          <button
            key={k}
            onClick={() => setScenarioKey(k)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              scenarioKey === k
                ? "border-gold bg-gold text-bg"
                : "border-line-strong text-ink-2 hover:border-gold hover:text-gold"
            }`}
          >
            {SCENARIOS[k].label}
          </button>
        ))}
        <span className="ml-4 text-xs uppercase tracking-wider text-ink-3">
          Isolate stream
        </span>
        <select
          value={highlight}
          onChange={(e) => setHighlight(e.target.value)}
          className="rounded-lg border border-line-strong bg-bg-card px-3 py-1.5 text-sm text-ink"
        >
          <option value="all">All streams</option>
          {streams.map((s) => (
            <option key={s.key} value={s.key}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Hero stats */}
      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
        <Stat value={fmt$M(y5.total)} label="Year 5 revenue" />
        <Stat value={fmt$M(y5.ebitda)} label="Year 5 EBITDA" />
        <Stat value={pct(y5.ebitdaMargin)} label="Year 5 EBITDA margin" />
        <Stat value={`${(cagr * 100).toFixed(0)}%`} label="Revenue CAGR (Y1–Y5)" />
        <Stat
          value={`${y5.activeVenues.toLocaleString()}`}
          label={`Active venues (Y5) — ${pct(y5.activeVenues / TOTAL_US_VENUES)} of the ${(TOTAL_US_VENUES / 1000).toFixed(0)}K U.S. universe`}
        />
        <Stat value={fmt$M(y5.gmv)} label="Booking GMV (Y5)" />
        <Stat
          value={fmt$M(y5.parafin + y5.financing + y5.payments)}
          label="Embedded finance revenue (Y5)"
        />
        <Stat
          value={pct(
            (y5.enterpriseApi + y5.financing + y5.parafin + y5.payments) / y5.total,
          )}
          label="Data + capital share of revenue (Y5)"
        />
      </div>

      {/* Charts */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[3fr_2fr]">
        <div className="rounded-xl border border-line bg-bg-card p-6">
          <h3 className="text-sm font-medium text-gold">Revenue build, Y1 → Y5 ($M)</h3>
          <p className="mt-1 text-xs text-ink-3">
            Stacked by stream. Use the dropdown above to isolate one line.
          </p>
          <div className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid stroke={GRID_STROKE} vertical={false} />
                <XAxis dataKey="year" stroke={AXIS.stroke} fontSize={AXIS.fontSize} tickLine={false} />
                <YAxis stroke={AXIS.stroke} fontSize={AXIS.fontSize} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={TOOLTIP_STYLE}
                  cursor={{ fill: "rgba(201,168,106,0.06)" }}
                  formatter={(v) => [`$${Number(v).toLocaleString()}M`]}
                />
                {visibleStreams.map((s, i) => (
                  <Bar
                    key={s.key}
                    dataKey={s.name}
                    stackId={highlight === "all" ? "rev" : undefined}
                    fill={CHART_COLORS[streams.findIndex((x) => x.key === s.key) % CHART_COLORS.length]}
                    radius={
                      highlight !== "all" || i === visibleStreams.length - 1
                        ? [3, 3, 0, 0]
                        : [0, 0, 0, 0]
                    }
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-bg-card p-6">
          <h3 className="text-sm font-medium text-gold">Year 5 revenue mix</h3>
          <p className="mt-1 text-xs text-ink-3">
            Balanced across SaaS, marketplace, data, and embedded finance.
          </p>
          <div className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="55%"
                  outerRadius="85%"
                  paddingAngle={2}
                  stroke="none"
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={TOOLTIP_STYLE}
                  formatter={(v, name) => [`$${Number(v).toLocaleString()}M`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Streams table */}
      <div className="mt-10 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-line bg-bg-raised text-left text-xs uppercase tracking-wider text-ink-3">
              <th className="px-4 py-3 font-medium">Revenue stream</th>
              {YEARS.map((y) => (
                <th key={y} className="px-4 py-3 text-right font-medium">
                  {y}
                </th>
              ))}
              <th className="px-4 py-3 text-right font-medium">% of Y5</th>
            </tr>
          </thead>
          <tbody>
            {streams.map((s) => (
              <tr
                key={s.key}
                className={`border-b border-line last:border-0 ${
                  highlight === s.key ? "bg-gold/5" : ""
                }`}
              >
                <td className="px-4 py-3 text-ink">
                  {s.name}
                  {PARTNER_CUT.has(s.key) && (
                    <span className="ml-2 rounded-full border border-line-strong px-2 py-0.5 text-[10px] uppercase tracking-wider text-ink-3">
                      Partner cut
                    </span>
                  )}
                </td>
                {s.byYear.map((v, i) => (
                  <td key={i} className="px-4 py-3 text-right tabular-nums text-ink-2">
                    {fmt$K(v)}
                  </td>
                ))}
                <td className="px-4 py-3 text-right tabular-nums text-gold">
                  {pct(s.byYear[4] / y5.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sensitivity */}
      <div className="mt-10">
        <h3 className="font-display text-xl text-ink">Sensitivity — Year 5 revenue</h3>
        <p className="mt-2 text-sm text-ink-2">
          Booking take-rate (rows) × guarantee-financing attach (columns). Darker
          cells are higher-revenue outcomes. Base case: {pct1(TAKE_RATE)} take-rate,
          25% attach.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-line bg-bg-raised text-xs uppercase tracking-wider text-ink-3">
                <th className="px-4 py-3 text-left font-medium">Take ↓ / Attach →</th>
                {FIN_ATTACH_AXIS.map((fa) => (
                  <th key={fa} className="px-4 py-3 text-right font-medium">
                    {pct(fa)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TAKE_AXIS.map((tr, r) => (
                <tr key={tr} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 text-ink-2">{pct1(tr)}</td>
                  {FIN_ATTACH_AXIS.map((fa, c) => (
                    <td
                      key={fa}
                      className="px-4 py-3 text-right tabular-nums text-ink"
                      style={{
                        background: `rgba(201, 168, 106, ${heatAlpha(grid[r][c]).toFixed(2)})`,
                      }}
                    >
                      {fmt$M(grid[r][c])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-3">
          Min {fmt$M(gridMin)} · Median {fmt$M(grid[2][2])} · Max {fmt$M(gridMax)}
        </p>
      </div>

      {/* P&L */}
      <div className="mt-10">
        <h3 className="font-display text-xl text-ink">P&amp;L snapshot</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-line bg-bg-raised text-xs uppercase tracking-wider text-ink-3">
                <th className="px-4 py-3 text-left font-medium"></th>
                {YEARS.map((y) => (
                  <th key={y} className="px-4 py-3 text-right font-medium">
                    {y}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pnlRows.map(([label, ...vals]) => {
                const emphatic = label === "Gross profit" || label === "EBITDA";
                return (
                  <tr key={label} className="border-b border-line last:border-0">
                    <td className={`px-4 py-3 ${emphatic ? "font-medium text-gold" : "text-ink-2"}`}>
                      {label}
                    </td>
                    {vals.map((v, i) => (
                      <td
                        key={i}
                        className={`px-4 py-3 text-right tabular-nums ${
                          emphatic ? "font-medium text-ink" : "text-ink-2"
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stream cards */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {streams.map((s, i) => (
          <div key={s.key} className="rounded-xl border border-line bg-bg-card p-5">
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-sm font-medium text-ink">
                <span
                  className="mr-2 inline-block h-2 w-2 rounded-sm align-middle"
                  style={{ background: CHART_COLORS[i % CHART_COLORS.length] }}
                />
                {s.name}
              </h4>
              <span className="shrink-0 text-xs text-ink-3">
                {pct(s.byYear[4] / y5.total)} of Y5
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-3">{s.note}</p>
            <div className="mt-4 grid grid-cols-4 gap-3 text-xs">
              {[
                ["Year 1", fmt$K(s.byYear[0])],
                ["Year 3", fmt$K(s.byYear[2])],
                ["Year 5", fmt$K(s.byYear[4])],
                [
                  "CAGR",
                  `${((Math.pow(Math.max(s.byYear[4], 1) / Math.max(s.byYear[0], 1), 1 / 4) - 1) * 100).toFixed(0)}%`,
                ],
              ].map(([lab, val], j) => (
                <div key={lab}>
                  <p className="text-ink-3">{lab}</p>
                  <p className={`mt-1 font-medium ${j === 2 ? "text-gold" : "text-ink"}`}>
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ink-3">
        Base-case figures cross-reference Azimuth_Financial_Model_FINAL.xlsx for the
        legacy streams; embedded finance (Parafin, Stripe Connect), Smart Ad
        Campaigns, and A&amp;R intelligence lines modeled from whitepaper strategy.
        All values in $K unless noted.
      </p>
    </div>
  );
}
