import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { getMessages } from "@/lib/i18n";

export const metadata: Metadata = { title: "Metodologia MIDSP" };

export default function MethodologyPage() {
  const m = getMessages();
  const { methodology } = m;

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={methodology.title}
        description={methodology.subtitle}
        actions={<Badge variant="muted">{methodology.provisional}</Badge>}
      />

      <Card>
        <CardContent className="pt-5">
          <p className="max-w-3xl text-sm leading-relaxed">{methodology.intro}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {siteConfig.company} · {siteConfig.fullName}
          </p>
        </CardContent>
      </Card>

      <section aria-labelledby="stages-title">
        <h2 id="stages-title" className="mb-3 text-lg font-semibold">
          {methodology.stagesTitle}
        </h2>
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {methodology.stages.map((stage, index) => (
            <li key={stage.id}>
              <Card className="h-full">
                <CardHeader>
                  <span aria-hidden="true" className="text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <CardTitle>{stage.title}</CardTitle>
                  <CardDescription>{stage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-medium text-muted-foreground">{methodology.relatedModules}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {stage.modules.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/modulos/${slug}`}
                          className="inline-flex rounded-full border border-input bg-card px-2.5 py-0.5 text-xs hover:bg-muted"
                        >
                          {m.modules[slug].title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
