"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

type SparklinePoint = {
  value: number;
};

export interface MetricCardProps {
  title: string;
  value: string;
  delta: number;
  deltaLabel?: string;
  deltaDirection?: "increase" | "decrease";
  subtitle?: string;
  sparkline?: SparklinePoint[];
  color?: string;
}

export function MetricCard({
  title,
  value,
  delta,
  deltaLabel = "vs previous period",
  deltaDirection = "increase",
  subtitle,
  sparkline,
  color = "#2563eb",
}: MetricCardProps) {
  const isIncrease = deltaDirection === "increase";
  const Icon = isIncrease ? TrendingUp : TrendingDown;

  const gradientId = `spark-${color.replace("#", "")}`;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {title}
          </p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{value}</p>
        </div>
        <span
          className="rounded-full border border-slate-200 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400"
        >
          {deltaLabel}
        </span>
      </div>
      {subtitle ? (
        <p className="mt-3 text-sm text-slate-500">{subtitle}</p>
      ) : null}
      <div className="mt-4 flex items-center gap-2 text-sm font-medium">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
            isIncrease
              ? "bg-emerald-100 text-emerald-700"
              : "bg-rose-100 text-rose-700"
          }`}
        >
          <Icon className="h-3.5 w-3.5" />
          {Math.abs(delta * 100).toFixed(1)}%
        </span>
        <span className="text-xs text-slate-500">{deltaLabel}</span>
      </div>
      {sparkline ? (
        <div className="mt-5 h-20">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkline}>
              <defs>
                <linearGradient
                  id={gradientId}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2.5}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : null}
      <div
        className="pointer-events-none absolute inset-x-8 -bottom-12 h-24 rounded-full bg-gradient-to-t from-blue-500/5 via-slate-100/0 opacity-0 transition group-hover:bottom-3 group-hover:opacity-100"
        aria-hidden="true"
      />
    </div>
  );
}
