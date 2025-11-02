import { ChannelPerformance } from "@/components/charts/ChannelPerformance";
import { DeviceBreakdown } from "@/components/charts/DeviceBreakdown";
import { SessionsTrend } from "@/components/charts/SessionsTrend";
import { GeoPerformanceList } from "@/components/GeoPerformanceList";
import { InsightsPanel } from "@/components/InsightsPanel";
import { MetricCard } from "@/components/MetricCard";
import { RealTimeCard } from "@/components/RealTimeCard";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopPagesTable } from "@/components/TopPagesTable";
import {
  channelPerformance,
  deviceBreakdown,
  geoPerformance,
  realTime,
  sessionTrend,
  topPages,
} from "@/lib/mockData";

const formatCompact = (value: number) =>
  new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

export default function Home() {
  const totalSessions = sessionTrend.reduce(
    (total, point) => total + point.sessions,
    0,
  );
  const totalUsers = sessionTrend.reduce(
    (total, point) => total + point.users,
    0,
  );
  const totalConversions = sessionTrend.reduce(
    (total, point) => total + point.conversions,
    0,
  );
  const conversionRate = totalConversions / totalSessions;

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="flex-1 space-y-6 px-6 pb-10 pt-6">
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              title="Total sessions"
              value={formatCompact(totalSessions)}
              delta={0.124}
              subtitle="Visitors landing across properties"
              sparkline={sessionTrend.map((point) => ({
                value: point.sessions,
              }))}
              color="#2563eb"
            />
            <MetricCard
              title="Total users"
              value={formatCompact(totalUsers)}
              delta={0.086}
              subtitle="Unique users engaging with content"
              sparkline={sessionTrend.map((point) => ({
                value: point.users,
              }))}
              color="#10b981"
            />
            <MetricCard
              title="Conversion rate"
              value={`${(conversionRate * 100).toFixed(1)}%`}
              delta={0.032}
              subtitle={`${formatCompact(totalConversions)} goal completions`}
              sparkline={sessionTrend.map((point) => ({
                value: point.conversions / point.sessions,
              }))}
              color="#f97316"
            />
            <MetricCard
              title="Avg. engagement"
              value="4m 02s"
              delta={-0.014}
              deltaDirection="decrease"
              subtitle="Average session duration"
              sparkline={sessionTrend.map((point, idx) => ({
                value: 180 + idx * 6 + (idx % 2 === 0 ? 14 : -10),
              }))}
              color="#8b5cf6"
            />
          </section>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,_1.7fr)_minmax(0,_1fr)]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Sessions & users
                  </h2>
                  <p className="text-sm text-slate-500">
                    Engagement trend over time with conversion overlay.
                  </p>
                </div>
                <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-900">
                  Export data
                </button>
              </div>
              <div className="mt-6">
                <SessionsTrend data={sessionTrend} />
              </div>
            </div>
            <RealTimeCard
              activeUsers={realTime.activeUsers}
              topActivePage={realTime.topActivePage}
              delta={realTime.delta}
              locations={realTime.locations}
            />
          </section>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,_1.7fr)_minmax(0,_1fr)]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Traffic channels
                  </h2>
                  <p className="text-sm text-slate-500">
                    Performance by acquisition source with engagement quality.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-900">
                    Breakdown by campaign
                  </button>
                  <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-900">
                    Apply filters
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <ChannelPerformance data={channelPerformance} />
              </div>
            </div>
            <InsightsPanel />
          </section>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,_1.4fr)_minmax(0,_1fr)]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Top landing pages
                  </h2>
                  <p className="text-sm text-slate-500">
                    Conversion and engagement metrics for highest volume pages.
                  </p>
                </div>
                <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-900">
                  View full report
                </button>
              </div>
              <div className="mt-6">
                <TopPagesTable data={topPages} />
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Device breakdown
                    </h2>
                    <p className="text-sm text-slate-500">
                      Share of sessions by device category.
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                    Sample: 48.1k
                  </span>
                </div>
                <div className="mt-6">
                  <DeviceBreakdown data={deviceBreakdown} />
                </div>
                <div className="mt-3 grid gap-3 text-sm text-slate-600">
                  {deviceBreakdown.map((device) => (
                    <div
                      key={device.device}
                      className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: device.color }}
                        />
                        <p className="font-medium text-slate-700">
                          {device.device}
                        </p>
                      </div>
                      <p className="font-semibold text-slate-800">
                        {device.sessions}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Top regions
                    </h2>
                    <p className="text-sm text-slate-500">
                      Sessions and conversions from key markets.
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                    Auto-segmented
                  </span>
                </div>
                <div className="mt-6">
                  <GeoPerformanceList data={geoPerformance} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
