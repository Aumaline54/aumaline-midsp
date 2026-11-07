import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getMessages } from "@/lib/i18n";
import type { PerformanceIndicator } from "@/types/project";

interface PerformanceIndicatorsProps {
  indicators: readonly PerformanceIndicator[];
  /** Progresso médio (0–100) dos projectos em execução, calculado a partir dos dados. */
  averageExecutionProgress: number | null;
}

export function PerformanceIndicators({ indicators, averageExecutionProgress }: PerformanceIndicatorsProps) {
  const m = getMessages();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{m.dashboard.performanceTitle}</CardTitle>
          <Badge variant="muted">{m.common.demoData}</Badge>
        </div>
        <CardDescription>{m.dashboard.performanceDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid gap-4 sm:grid-cols-2">
          {indicators.map((indicator) => (
            <div key={indicator.id} className="rounded-md bg-muted p-3">
              <dt className="text-sm text-muted-foreground">{indicator.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">{indicator.value}</dd>
              <dd className="mt-0.5 text-xs text-muted-foreground">{indicator.hint}</dd>
            </div>
          ))}
        </dl>

        {averageExecutionProgress !== null ? (
          <div className="mt-5">
            <div className="flex items-baseline justify-between gap-3 text-sm">
              <span>{m.dashboard.averageExecutionProgress}</span>
              <span className="font-medium tabular-nums">{Math.round(averageExecutionProgress)} %</span>
            </div>
            <Progress
              value={averageExecutionProgress}
              label={m.dashboard.averageExecutionProgress}
              className="mt-2"
            />
            <p className="mt-1.5 text-xs text-muted-foreground">{m.dashboard.averageProgressNote}</p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
