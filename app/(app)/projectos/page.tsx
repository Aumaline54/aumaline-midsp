import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { DemoNotice } from "@/components/shared/demo-notice";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { demoProjects } from "@/features/dashboard/demo-data";
import { ProjectsTable } from "@/features/projects/projects-table";
import { getMessages } from "@/lib/i18n";

export const metadata: Metadata = { title: "Projectos" };

export default function ProjectsPage() {
  const m = getMessages();

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={m.projects.title}
        description={m.projects.subtitle}
        actions={
          <Button disabled title={m.common.comingSoon}>
            <Plus aria-hidden="true" />
            {m.projects.newProject}
          </Button>
        }
      />

      <DemoNotice />

      <ProjectsTable projects={demoProjects} />
    </div>
  );
}
