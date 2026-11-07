import Link from "next/link";
import { Construction } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { ModuleSlug } from "@/types/modules";

/**
 * Página estruturada de um módulo ainda sem funcionalidades. Apresenta apenas
 * o estado de desenvolvimento e o âmbito previsto, sem dados fictícios.
 */
export function ModulePlaceholder({ slug }: { slug: ModuleSlug }) {
  const m = getMessages();
  const copy = m.modules[slug];

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={copy.title}
        description={copy.description}
        actions={
          <Badge variant="muted">
            <Construction aria-hidden="true" className="size-3.5" />
            {m.modulePage.statusValue}
          </Badge>
        }
      />

      <Card>
        <CardHeader>
          <CardTitle>{m.modulePage.scopeTitle}</CardTitle>
          <CardDescription>{m.modulePage.scopeNote}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1.5 pl-5 text-sm">
            {copy.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center gap-4 rounded-lg border border-dashed bg-card p-5 text-sm text-muted-foreground">
        <p>{m.modulePage.noFunctionality}</p>
        <Link href="/projectos" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
          {m.modulePage.backToProjects}
        </Link>
      </div>
    </div>
  );
}
