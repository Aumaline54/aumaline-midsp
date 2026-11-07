"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/shared/status-badge";
import { formatDate } from "@/lib/format";
import { getMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { PROJECT_STATUSES, type Project, type ProjectStatus } from "@/types/project";

type Filter = ProjectStatus | "all";

export function ProjectsTable({ projects }: { projects: readonly Project[] }) {
  const m = getMessages();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = filter === "all" ? projects : projects.filter((project) => project.status === filter);
  const filters: readonly Filter[] = ["all", ...PROJECT_STATUSES];

  return (
    <div className="flex flex-col gap-4">
      <div role="group" aria-label={m.projects.filterLabel} className="flex flex-wrap gap-2">
        {filters.map((item) => {
          const selected = item === filter;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-3 py-1 text-sm transition-colors",
                selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input bg-card hover:bg-muted",
              )}
            >
              {item === "all" ? m.projects.filterAll : m.status[item]}
            </button>
          );
        })}
      </div>

      <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
        {visible.length} {m.projects.resultsCount}
      </p>

      {visible.length === 0 ? (
        <p className="rounded-lg border bg-card p-6 text-sm text-muted-foreground">{m.projects.empty}</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border bg-card">
          <table className="w-full min-w-[44rem] text-sm">
            <caption className="sr-only">{m.projects.tableCaption}</caption>
            <thead className="border-b bg-muted text-left text-xs text-muted-foreground">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">{m.projects.columns.name}</th>
                <th scope="col" className="px-4 py-3 font-medium">{m.projects.columns.sector}</th>
                <th scope="col" className="px-4 py-3 font-medium">{m.projects.columns.owner}</th>
                <th scope="col" className="px-4 py-3 font-medium">{m.projects.columns.status}</th>
                <th scope="col" className="px-4 py-3 font-medium">{m.projects.columns.progress}</th>
                <th scope="col" className="px-4 py-3 font-medium">{m.projects.columns.updatedAt}</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {visible.map((project) => (
                <tr key={project.id}>
                  <th scope="row" className="px-4 py-3 text-left font-medium">{project.name}</th>
                  <td className="px-4 py-3">{project.sector}</td>
                  <td className="px-4 py-3">{project.owner}</td>
                  <td className="px-4 py-3"><StatusBadge status={project.status} /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Progress
                        value={project.progress}
                        label={`${m.projects.columns.progress}: ${project.name}`}
                        className="w-24"
                      />
                      <span className="w-10 text-right text-xs tabular-nums text-muted-foreground">
                        {project.progress} %
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    <time dateTime={project.updatedAt}>{formatDate(project.updatedAt)}</time>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
