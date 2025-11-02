"use client";

type PageRow = {
  path: string;
  views: number;
  users: number;
  avgEngagement: string;
  bounceRate: number;
};

interface TopPagesTableProps {
  data: PageRow[];
}

export function TopPagesTable({ data }: TopPagesTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
            <th className="px-5 py-3">Page</th>
            <th className="px-5 py-3 text-right">Views</th>
            <th className="px-5 py-3 text-right">Users</th>
            <th className="px-5 py-3 text-right">Avg engagement</th>
            <th className="px-5 py-3 text-right">Bounce rate</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white text-sm">
          {data.map((row) => (
            <tr key={row.path} className="transition hover:bg-slate-50/80">
              <td className="px-5 py-3 font-medium text-slate-700">
                <div>
                  <span className="text-slate-900">{row.path}</span>
                  <p className="text-xs text-slate-400">Landing page</p>
                </div>
              </td>
              <td className="px-5 py-3 text-right text-slate-600">
                {row.views.toLocaleString()}
              </td>
              <td className="px-5 py-3 text-right text-slate-600">
                {row.users.toLocaleString()}
              </td>
              <td className="px-5 py-3 text-right text-slate-600">
                {row.avgEngagement}
              </td>
              <td className="px-5 py-3 text-right text-slate-600">
                {(row.bounceRate * 100).toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
