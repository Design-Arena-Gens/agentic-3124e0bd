"use client";

import { CalendarDays, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const ranges = [
  "Last 7 days",
  "Last 28 days",
  "Last 90 days",
  "Custom range",
];

export function Header() {
  const [range, setRange] = useState(ranges[1]);

  return (
    <header className="sticky top-0 z-20 flex flex-col gap-4 border-b border-slate-200 bg-white/70 px-6 py-5 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Acquisition overview
          </h1>
          <p className="text-sm text-slate-500">
            Channel performance and engagement for {range.toLowerCase()}.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
            <SlidersHorizontal className="h-4 w-4" />
            Compare
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
            Share
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-semibold text-white">
            AM
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex h-11 flex-1 min-w-[220px] items-center">
          <Search className="pointer-events-none absolute left-4 h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder="Search reports, filters, or insights"
            className="h-full w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
          <CalendarDays className="h-4 w-4 text-blue-500" />
          <select
            className="bg-transparent text-sm font-medium text-slate-700 outline-none"
            value={range}
            onChange={(event) => setRange(event.target.value)}
          >
            {ranges.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>
        <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
          Add comparison
        </button>
      </div>
    </header>
  );
}
