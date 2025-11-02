"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TrendPoint = {
  date: string;
  sessions: number;
  users: number;
  conversions: number;
};

interface SessionsTrendProps {
  data: TrendPoint[];
}

export function SessionsTrend({ data }: SessionsTrendProps) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={data} margin={{ left: 20, right: 20, top: 20, bottom: 0 }}>
        <defs>
          <linearGradient id="sessionGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tick={{ fill: "#64748b", fontSize: 12 }}
        />
        <YAxis
          tickFormatter={(value) => `${Math.round(value / 1000)}k`}
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tick={{ fill: "#64748b", fontSize: 12 }}
        />
        <Tooltip
          formatter={(value: number) => value.toLocaleString()}
          contentStyle={{
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 45px rgba(15,23,42,0.07)",
          }}
          labelStyle={{ fontWeight: 600, color: "#1e293b", marginBottom: 4 }}
        />
        <Legend
          verticalAlign="top"
          align="left"
          height={36}
          iconType="circle"
          wrapperStyle={{ paddingBottom: 16, paddingLeft: 8 }}
        />
        <Area
          type="monotone"
          dataKey="sessions"
          stroke="#2563eb"
          strokeWidth={2.5}
          fill="url(#sessionGradient)"
          name="Sessions"
        />
        <Area
          type="monotone"
          dataKey="users"
          stroke="#10b981"
          strokeWidth={2.5}
          fill="url(#userGradient)"
          name="Users"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
