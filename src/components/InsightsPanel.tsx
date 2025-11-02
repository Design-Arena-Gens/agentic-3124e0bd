"use client";

import { ArrowUp, Lightbulb, Sparkles } from "lucide-react";

const insights = [
  {
    title: "Organic search continues to outperform",
    description:
      "Sessions from organic keywords grew by 12% week-over-week. Consider expanding the top converting keyword group with new supporting landing pages.",
    impact: "High impact",
  },
  {
    title: "New users engage deeply with product tours",
    description:
      "Visitors that interact with the guided onboarding spend 3.4x longer on site. Promote the tour earlier in the journey on the home page hero.",
    impact: "Medium impact",
  },
  {
    title: "Email campaigns retain the longest sessions",
    description:
      "Weekly product update emails show a 59% engagement rate. Double down on this format and test in-app messaging using the same content.",
    impact: "High impact",
  },
];

export function InsightsPanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
          <Lightbulb className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Insights</p>
          <p className="text-xs text-slate-500">Automatically surfaced opportunities</p>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {insight.title}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {insight.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                <ArrowUp className="h-3 w-3" />
                {insight.impact}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
        <Sparkles className="h-4 w-4" />
        Generate insight
      </button>
    </div>
  );
}
