import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projectStatusStyles } from "@/config/project-status";
import type { StatusCount } from "@/features/dashboard/stats";
import { formatPercent } from "@/lib/format";
import { getMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface StatusDistributionProps {
  counts: readonly StatusCount[];
  total: number;
}

/**
 * Barra segmentada + tabela. A tabela garante que a informação não depende
 * apenas da cor e é legível por leitores de ecrã.
 */
export function StatusDistribution({ counts, total }: StatusDistributionProps) {
  const m = getMessages();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{m.dashboard.distributionTitle}</CardTitle>
        <CardDescription>{m.dashboard.distributionDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div aria-hidden="true" className="flex h-3 w-full overflow-hidden rounded-full bg-muted">
          {counts
            .filter((item) => item.count > 0)
            .map((item) => (
              <div
                key={item.status}
                className={cn("h-full", projectStatusStyles[item.status].dot)}
                style={{ width: `${item.share * 100}%` }}
              />
            ))}
        </div>

        <table className="mt-4 w-full text-sm">
          <caption className="sr-only">{m.dashboard.distributionTableLabel}</caption>
          <thead>
            <tr className="text-left text-xs text-muted-foreground">
              <th scope="col" className="pb-2 font-medium">
                {m.dashboard.statusColumn}
              </th>
              <th scope="col" className="pb-2 text-right font-medium">
                {m.dashboard.countColumn}
              </th>
              <th scope="col" className="pb-2 text-right font-medium">
                {m.dashboard.shareColumn}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {counts.map((item) => (
              <tr key={item.status}>
                <th scope="row" className="py-2 text-left font-normal">
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn("size-2.5 rounded-full", projectStatusStyles[item.status].dot)}
                    />
                    {m.status[item.status]}
                  </span>
                </th>
                <td className="py-2 text-right tabular-nums">{item.count}</td>
                <td className="py-2 text-right tabular-nums text-muted-foreground">
                  {formatPercent(item.share)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t font-medium">
              <th scope="row" className="pt-2 text-left font-medium">
                {m.dashboard.totalProjects}
              </th>
              <td className="pt-2 text-right tabular-nums">{total}</td>
              <td />
            </tr>
          </tfoot>
        </table>
      </CardContent>
    </Card>
  );
}
