"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChannelPoint = {
  channel: string;
  sessions: number;
  engagementRate: number;
  conversions: number;
};

interface ChannelPerformanceProps {
  data: ChannelPoint[];
}

export function ChannelPerformance({ data }: ChannelPerformanceProps) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={data}
        margin={{ top: 16, right: 24, left: 0, bottom: 12 }}
        barCategoryGap={18}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="channel"
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tick={{ fill: "#64748b", fontSize: 12 }}
        />
        <YAxis
          yAxisId="left"
          tickFormatter={(value) => `${Math.round(value / 1000)}k`}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#94a3b8", fontSize: 12 }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickFormatter={(value) => `${Math.round(value * 100)}%`}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#94a3b8", fontSize: 12 }}
        />
        <Tooltip
          formatter={(value: number, name) =>
            name === "Engagement"
              ? `${(value * 100).toFixed(1)}%`
              : value.toLocaleString()
          }
          contentStyle={{
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 45px rgba(15,23,42,0.07)",
          }}
          labelStyle={{ fontWeight: 600, color: "#1e293b", marginBottom: 4 }}
        />
        <Legend iconType="circle" wrapperStyle={{ paddingTop: 12 }} />
        <Bar
          yAxisId="left"
          dataKey="sessions"
          name="Sessions"
          fill="#2563eb"
          radius={[8, 8, 8, 8]}
          barSize={18}
        />
        <Bar
          yAxisId="right"
          dataKey="engagementRate"
          name="Engagement"
          fill="#fb923c"
          radius={[8, 8, 8, 8]}
          barSize={18}
        />
        <Bar
          yAxisId="left"
          dataKey="conversions"
          name="Conversions"
          fill="#10b981"
          radius={[8, 8, 8, 8]}
          barSize={18}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
