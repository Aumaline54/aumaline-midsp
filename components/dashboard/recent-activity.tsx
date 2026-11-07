import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateTime } from "@/lib/format";
import { getMessages } from "@/lib/i18n";
import type { ActivityItem } from "@/types/project";

export function RecentActivity({ items }: { items: readonly ActivityItem[] }) {
  const m = getMessages();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{m.dashboard.activityTitle}</CardTitle>
          <Badge variant="muted">{m.common.demoData}</Badge>
        </div>
        <CardDescription>{m.dashboard.activityDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="divide-y">
          {items.map((item) => (
            <li key={item.id} className="py-3 first:pt-0 last:pb-0">
              <p className="text-sm">
                <span className="font-medium">{item.actor}</span> {item.action}{" "}
                <span className="font-medium">{item.projectName}</span>
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                <time dateTime={item.at}>{formatDateTime(item.at)}</time>
              </p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
