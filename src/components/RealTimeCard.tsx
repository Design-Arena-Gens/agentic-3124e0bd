"use client";

import { SignalHigh } from "lucide-react";

type Location = {
  city: string;
  active: number;
};

interface RealTimeCardProps {
  activeUsers: number;
  topActivePage: string;
  delta: number;
  locations: Location[];
}

export function RealTimeCard({
  activeUsers,
  topActivePage,
  delta,
  locations,
}: RealTimeCardProps) {
  const isPositive = delta >= 0;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg">
      <div className="absolute -right-16 top-6 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            Real time
          </p>
          <h3 className="mt-3 text-4xl font-semibold">{activeUsers}</h3>
          <p className="mt-1 text-sm text-slate-300">
            Active users on site right now
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
          <SignalHigh className="h-6 w-6 text-blue-300" />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm font-medium">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
            isPositive ? "bg-emerald-500/20 text-emerald-200" : "bg-rose-500/20 text-rose-200"
          }`}
        >
          {(isPositive ? "+" : "-") + Math.abs(delta * 100).toFixed(1)}% vs 5 min ago
        </span>
        <span className="text-xs text-slate-400">
          Top page: <strong className="text-slate-200">{topActivePage}</strong>
        </span>
      </div>
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
          Live locations
        </p>
        <div className="mt-3 flex flex-col gap-3">
          {locations.map((location) => (
            <div key={location.city} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <div className="flex-1">
                <p className="text-sm text-slate-200">{location.city}</p>
                <div className="mt-1 h-1.5 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-400"
                    style={{ width: `${Math.min(location.active * 3, 100)}%` }}
                  />
                </div>
              </div>
              <span className="text-xs text-slate-300">
                {location.active} users
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
