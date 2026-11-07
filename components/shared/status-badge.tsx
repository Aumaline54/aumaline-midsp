import { Badge } from "@/components/ui/badge";
import { projectStatusStyles } from "@/config/project-status";
import { getMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/project";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const m = getMessages();

  return (
    <Badge variant="outline" className={cn(projectStatusStyles[status].badge)}>
      {m.status[status]}
    </Badge>
  );
}
