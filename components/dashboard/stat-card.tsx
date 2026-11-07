import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: number | string;
  /** Classe de cor do indicador visual (opcional). */
  dotClassName?: string;
}

export function StatCard({ label, value, dotClassName }: StatCardProps) {
  return (
    <Card className="p-4">
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        {dotClassName ? <span aria-hidden="true" className={cn("size-2 rounded-full", dotClassName)} /> : null}
        {label}
      </p>
      <p className="mt-2 text-3xl font-semibold tabular-nums tracking-tight">{value}</p>
    </Card>
  );
}
