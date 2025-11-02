"use client";

import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";

type GeoEntry = {
  country: string;
  sessions: number;
  conversions: number;
  trend: number;
};

interface GeoPerformanceListProps {
  data: GeoEntry[];
}

export function GeoPerformanceList({ data }: GeoPerformanceListProps) {
  return (
    <div className="flex flex-col gap-3">
      {data.map((row) => {
        const isPositive = row.trend >= 0;
        const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;

        return (
          <div
            key={row.country}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{row.country}</p>
                <p className="text-xs text-slate-500">
                  {row.sessions.toLocaleString()} sessions •{" "}
                  {row.conversions.toLocaleString()} conversions
                </p>
              </div>
            </div>
            <div
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                isPositive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
              }`}
            >
              <TrendIcon className="h-4 w-4" />
              {(Math.abs(row.trend) * 100).toFixed(1)}%
            </div>
          </div>
        );
      })}
    </div>
  );
}
