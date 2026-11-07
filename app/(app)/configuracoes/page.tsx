import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth/session";
import { isSupabaseConfigured } from "@/lib/env";
import { getMessages } from "@/lib/i18n";

export const metadata: Metadata = { title: "Configurações" };

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-sm">{children}</dd>
    </div>
  );
}

export default function SettingsPage() {
  const m = getMessages();
  const s = m.settings.sections;
  const user = getCurrentUser();
  const supabaseReady = isSupabaseConfigured();

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title={m.settings.title} description={m.settings.subtitle} />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{s.account.title}</CardTitle>
            <CardDescription>
              {s.account.description} {s.account.pending}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="divide-y">
              <Row label={s.account.name}>{user.name}</Row>
              <Row label={s.account.email}>{user.email}</Row>
              <Row label={s.account.role}>{user.role}</Row>
            </dl>
            {user.isDemo ? (
              <Badge variant="muted" className="mt-3">
                {m.common.demoData}
              </Badge>
            ) : null}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{s.organization.title}</CardTitle>
            <CardDescription>{s.organization.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="divide-y">
              <Row label={s.organization.name}>{s.organization.nameValue}</Row>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{s.language.title}</CardTitle>
            <CardDescription>{s.language.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="divide-y">
              <Row label={s.language.current}>{s.language.currentValue}</Row>
            </dl>
            <p className="mt-3 text-xs text-muted-foreground">{s.language.note}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{s.integrations.title}</CardTitle>
            <CardDescription>{s.integrations.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="divide-y">
              <Row label={s.integrations.supabase}>
                <Badge variant="muted">
                  {supabaseReady ? s.integrations.supabaseDetected : s.integrations.supabaseMissing}
                </Badge>
              </Row>
              <Row label={s.integrations.anthropic}>
                <Badge variant="muted">{m.common.planned}</Badge>
              </Row>
              <Row label={s.integrations.billing}>
                <Badge variant="muted">{m.common.planned}</Badge>
              </Row>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
