export const sessionTrend = [
  { date: "Apr 1", sessions: 4250, users: 2980, conversions: 340 },
  { date: "Apr 4", sessions: 4520, users: 3160, conversions: 362 },
  { date: "Apr 7", sessions: 4380, users: 3085, conversions: 355 },
  { date: "Apr 10", sessions: 4875, users: 3310, conversions: 401 },
  { date: "Apr 13", sessions: 5010, users: 3445, conversions: 420 },
  { date: "Apr 16", sessions: 5295, users: 3622, conversions: 443 },
  { date: "Apr 19", sessions: 5170, users: 3520, conversions: 432 },
  { date: "Apr 22", sessions: 5440, users: 3710, conversions: 451 },
  { date: "Apr 25", sessions: 5625, users: 3840, conversions: 468 },
  { date: "Apr 28", sessions: 5890, users: 4005, conversions: 482 },
  { date: "May 1", sessions: 6125, users: 4185, conversions: 498 },
  { date: "May 4", sessions: 6340, users: 4330, conversions: 512 },
];

export const channelPerformance = [
  { channel: "Organic Search", sessions: 28120, engagementRate: 0.67, conversions: 807 },
  { channel: "Direct", sessions: 17560, engagementRate: 0.53, conversions: 462 },
  { channel: "Paid Search", sessions: 14890, engagementRate: 0.61, conversions: 512 },
  { channel: "Referral", sessions: 11240, engagementRate: 0.48, conversions: 323 },
  { channel: "Email", sessions: 7560, engagementRate: 0.59, conversions: 291 },
  { channel: "Social", sessions: 6890, engagementRate: 0.44, conversions: 208 },
];

export const deviceBreakdown = [
  { device: "Desktop", sessions: 54, color: "#4285F4" },
  { device: "Mobile", sessions: 38, color: "#34A853" },
  { device: "Tablet", sessions: 8, color: "#FBBC04" },
];

export const topPages = [
  { path: "/pricing", views: 19840, users: 12310, avgEngagement: "4m 12s", bounceRate: 0.32 },
  { path: "/blog/how-to-scale", views: 16215, users: 10322, avgEngagement: "3m 59s", bounceRate: 0.28 },
  { path: "/features/automation", views: 14700, users: 9540, avgEngagement: "4m 37s", bounceRate: 0.35 },
  { path: "/demo", views: 13250, users: 8450, avgEngagement: "2m 41s", bounceRate: 0.41 },
  { path: "/customer-stories", views: 11890, users: 7920, avgEngagement: "5m 01s", bounceRate: 0.26 },
];

export const geoPerformance = [
  { country: "United States", sessions: 25120, conversions: 610, trend: 0.12 },
  { country: "United Kingdom", sessions: 9420, conversions: 221, trend: 0.08 },
  { country: "Canada", sessions: 8125, conversions: 183, trend: 0.05 },
  { country: "Germany", sessions: 6980, conversions: 174, trend: 0.11 },
  { country: "Australia", sessions: 6240, conversions: 149, trend: 0.09 },
];

export const realTime = {
  activeUsers: 112,
  topActivePage: "/pricing",
  delta: 0.18,
  locations: [
    { city: "San Francisco", active: 28 },
    { city: "New York", active: 22 },
    { city: "London", active: 16 },
    { city: "Toronto", active: 12 },
    { city: "Berlin", active: 9 },
  ],
};
