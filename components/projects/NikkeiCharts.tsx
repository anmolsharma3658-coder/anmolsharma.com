"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AXIS, GRID_STROKE, TOOLTIP_STYLE } from "@/components/charts/theme";

const GOLD = "#c9a86a";
const BLUE = "#8fb3db";
const RED = "#b0654f";

// ARDL best model (OLS), AIC-selected — coefficients from EViews output.
const ARDL_COEFS = [
  { name: "R_YEN", coef: 1.078, sig: "***", note: "1% yen fall → +1.08% return" },
  { name: "GDP_G", coef: 0.883, sig: "", note: "contemporaneous growth" },
  { name: "GDP_G(−1)", coef: 1.313, sig: "", note: "one-quarter lag" },
  { name: "GDP_G(−2)", coef: -1.526, sig: "†", note: "two-quarter lag" },
  { name: "D_GFC", coef: -8.342, sig: "**", note: "2007Q4–2009Q1 dummy" },
  { name: "D_COVID", coef: -11.628, sig: "**", note: "2020Q1–Q2 dummy" },
];

const AIC_LADDER = [
  { model: "AR(1) baseline", aic: 7.601, adjR2: 0.009 },
  { model: "ARMA(1,1)", aic: 7.594, adjR2: 0.011 },
  { model: "ARDL(1,0,0)", aic: 7.501, adjR2: 0.142 },
  { model: "ARDL(1,2,1)", aic: 7.348, adjR2: 0.228 },
  { model: "ARDL + GARCH(1,1)", aic: 7.162, adjR2: NaN },
];

const PRE_POST = [
  { metric: "Mean return (%)", pre: -1.03, post: 3.0 },
  { metric: "Std dev (%)", pre: 11.06, post: 9.2 },
  { metric: "Sharpe", pre: -0.09, post: 0.33 },
  { metric: "GARCH α₁+β₁", pre: 0.94, post: 0.87 },
];

const GARCH_PARAMS = [
  { param: "ω (base variance)", coef: 4.317, p: "0.048*" },
  { param: "α₁ (ARCH shock)", coef: 0.184, p: "0.010**" },
  { param: "β₁ (GARCH persistence)", coef: 0.722, p: "0.000***" },
];

export default function NikkeiCharts() {
  return (
    <div className="mt-16 space-y-10">
      <div>
        <div className="flex items-center gap-3">
          <h2 className="font-display text-2xl text-ink">The results, charted</h2>
          <span className="rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-wider text-gold">
            EViews estimates
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          All figures below are the actual estimates from the final specification —
          sample 2003Q2–2025Q1, 88 observations, convergence in 24 iterations.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* ARDL coefficients */}
        <div className="rounded-xl border border-line bg-bg-card p-6">
          <h3 className="text-sm font-medium text-gold">
            What moves the Nikkei — ARDL(1,2,1) coefficients
          </h3>
          <p className="mt-1 text-xs text-ink-3">
            R² = 0.361 · Adj-R² = 0.229 · DW = 2.01 · F-prob = 0.003
          </p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ARDL_COEFS}
                layout="vertical"
                margin={{ top: 4, right: 24, left: 12, bottom: 4 }}
              >
                <CartesianGrid stroke={GRID_STROKE} horizontal={false} />
                <XAxis type="number" stroke={AXIS.stroke} fontSize={AXIS.fontSize} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={82}
                  stroke={AXIS.stroke}
                  fontSize={AXIS.fontSize}
                  tickLine={false}
                  axisLine={false}
                />
                <ReferenceLine x={0} stroke="#2a3140" />
                <Tooltip
                  contentStyle={TOOLTIP_STYLE}
                  cursor={{ fill: "rgba(201,168,106,0.06)" }}
                  formatter={(v, _n, item) => [
                    `${Number(v) > 0 ? "+" : ""}${v}${item?.payload?.sig ?? ""} — ${item?.payload?.note ?? ""}`,
                    "Coefficient",
                  ]}
                />
                <Bar dataKey="coef" radius={[0, 3, 3, 0]}>
                  {ARDL_COEFS.map((d) => (
                    <Cell key={d.name} fill={d.coef >= 0 ? GOLD : RED} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs text-ink-3">
            † p&lt;0.10 · * p&lt;0.05 · ** p&lt;0.01 · *** p&lt;0.001. Interest-rate
            changes (DI_JP) insignificant at p&gt;0.70 — ZIRP left no surprise to price.
          </p>
        </div>

        {/* AIC ladder */}
        <div className="rounded-xl border border-line bg-bg-card p-6">
          <h3 className="text-sm font-medium text-gold">
            Model selection — AIC ladder (lower is better)
          </h3>
          <p className="mt-1 text-xs text-ink-3">
            27-equation grid search; ARDL mean + GARCH variance wins.
          </p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={AIC_LADDER} margin={{ top: 8, right: 8, left: 0, bottom: 24 }}>
                <CartesianGrid stroke={GRID_STROKE} vertical={false} />
                <XAxis
                  dataKey="model"
                  stroke={AXIS.stroke}
                  fontSize={10}
                  tickLine={false}
                  interval={0}
                  angle={-18}
                  textAnchor="end"
                />
                <YAxis
                  domain={[7.0, 7.7]}
                  stroke={AXIS.stroke}
                  fontSize={AXIS.fontSize}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={TOOLTIP_STYLE}
                  cursor={{ fill: "rgba(201,168,106,0.06)" }}
                  formatter={(v, _n, item) => [
                    `AIC ${v}${Number.isNaN(item?.payload?.adjR2) ? "" : ` · Adj-R² ${item?.payload?.adjR2}`}`,
                  ]}
                />
                <Bar dataKey="aic" radius={[3, 3, 0, 0]}>
                  {AIC_LADDER.map((d, i) => (
                    <Cell key={d.model} fill={i === AIC_LADDER.length - 1 ? GOLD : "#475467"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Abenomics break */}
      <div className="rounded-xl border border-line bg-bg-card p-6">
        <h3 className="text-sm font-medium text-gold">
          Structural break — pre vs. post-Abenomics (Dec 2012)
        </h3>
        <p className="mt-1 text-xs text-ink-3">
          Chow test at 2012Q4: F ≈ 3.8, p &lt; 0.001 — parameter stability rejected.
          N = 50 pre, 53 post.
        </p>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PRE_POST} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={GRID_STROKE} vertical={false} />
              <XAxis dataKey="metric" stroke={AXIS.stroke} fontSize={AXIS.fontSize} tickLine={false} />
              <YAxis stroke={AXIS.stroke} fontSize={AXIS.fontSize} tickLine={false} axisLine={false} />
              <ReferenceLine y={0} stroke="#2a3140" />
              <Tooltip
                contentStyle={TOOLTIP_STYLE}
                cursor={{ fill: "rgba(201,168,106,0.06)" }}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: "#9aa3b2" }} />
              <Bar dataKey="pre" name="Pre-Abenomics (2000–2012)" fill="#5f6878" radius={[3, 3, 0, 0]} />
              <Bar dataKey="post" name="Post-Abenomics (2013–2025)" fill={BLUE} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* GARCH table */}
      <div className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-line bg-bg-raised text-left text-xs uppercase tracking-wider text-ink-3">
              <th className="px-4 py-3 font-medium">GARCH(1,1) variance equation</th>
              <th className="px-4 py-3 text-right font-medium">Coefficient</th>
              <th className="px-4 py-3 text-right font-medium">p-value</th>
            </tr>
          </thead>
          <tbody>
            {GARCH_PARAMS.map((r) => (
              <tr key={r.param} className="border-b border-line last:border-0">
                <td className="px-4 py-3 text-ink">{r.param}</td>
                <td className="px-4 py-3 text-right tabular-nums text-ink-2">{r.coef}</td>
                <td className="px-4 py-3 text-right tabular-nums text-ink-2">{r.p}</td>
              </tr>
            ))}
            <tr className="bg-gold/5">
              <td className="px-4 py-3 font-medium text-gold">
                Persistence α₁ + β₁ — variance shock half-life ≈ 7 quarters
              </td>
              <td className="px-4 py-3 text-right font-medium tabular-nums text-ink">0.906</td>
              <td className="px-4 py-3 text-right tabular-nums text-ink-3">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
