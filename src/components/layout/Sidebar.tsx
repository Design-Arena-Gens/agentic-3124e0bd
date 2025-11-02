"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  Compass,
  GaugeCircle,
  Globe2,
  Home,
  Layers,
  Settings,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Realtime", href: "/realtime", icon: GaugeCircle },
  { label: "Acquisition", href: "/acquisition", icon: Compass },
  { label: "Engagement", href: "/engagement", icon: BarChart3 },
  { label: "Monetization", href: "/monetization", icon: Layers },
  { label: "Retention", href: "/retention", icon: Users },
  { label: "Demographics", href: "/demographics", icon: Globe2 },
  { label: "Admin", href: "/admin", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white/90 px-4 py-6 lg:flex lg:flex-col lg:gap-6">
      <div className="px-2">
        <div className="flex items-center gap-2 text-slate-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold">
            GA
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Analytics
            </p>
            <p className="text-lg font-semibold text-slate-900">
              Insights 360
            </p>
          </div>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150",
                "hover:bg-slate-100 hover:text-slate-900",
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "text-slate-500"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </a>
          );
        })}
      </nav>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-800">
          Need deeper insights?
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Upgrade to unlock predictive analytics, user cohorts, and retention
          modeling.
        </p>
        <button className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-slate-900/20">
          Explore Premium
        </button>
      </div>
    </aside>
  );
}
