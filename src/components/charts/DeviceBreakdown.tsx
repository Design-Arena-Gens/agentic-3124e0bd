"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type DeviceEntry = {
  device: string;
  sessions: number;
  color: string;
};

interface DeviceBreakdownProps {
  data: DeviceEntry[];
}

export function DeviceBreakdown({ data }: DeviceBreakdownProps) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Tooltip
          formatter={(value: number) => `${value}% of sessions`}
          contentStyle={{
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 45px rgba(15,23,42,0.07)",
          }}
          labelStyle={{ fontWeight: 600, color: "#1e293b", marginBottom: 4 }}
        />
        <Pie
          data={data}
          dataKey="sessions"
          nameKey="device"
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={88}
          paddingAngle={6}
          cornerRadius={12}
        >
          {data.map((entry) => (
            <Cell key={entry.device} fill={entry.color} stroke="white" strokeWidth={2} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
