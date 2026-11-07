import type { Metadata } from "next";
import { PerformanceIndicators } from "@/components/dashboard/performance-indicators";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StatCard } from "@/components/dashboard/stat-card";
import { StatusDistribution } from "@/components/dashboard/status-distribution";
import { DemoNotice } from "@/components/shared/demo-notice";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { projectStatusStyles } from "@/config/project-status";
import { demoActivity, demoIndicators, demoProjects } from "@/features/dashboard/demo-data";
import { computePortfolioStats } from "@/features/dashboard/stats";
import { getMessages } from "@/lib/i18n";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  const m = getMessages();
  const stats = computePortfolioStats(demoProjects);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={m.dashboard.title}
        description={m.dashboard.subtitle}
        actions={<Badge variant="muted">{m.common.demoData}</Badge>}
      />

      <DemoNotice />

      <section aria-label={m.dashboard.kpiGroupLabel} className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        <StatCard label={m.dashboard.totalProjects} value={stats.total} />
        {stats.byStatus.map((item) => (
          <StatCard
            key={item.status}
            label={m.status[item.status]}
            value={item.count}
            dotClassName={projectStatusStyles[item.status].dot}
          />
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <StatusDistribution counts={stats.byStatus} total={stats.total} />
        <PerformanceIndicators
          indicators={demoIndicators}
          averageExecutionProgress={stats.averageExecutionProgress}
        />
      </div>

      <RecentActivity items={demoActivity} />
    </div>
  );
}
