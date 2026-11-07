import { PROJECT_STATUSES, type Project, type ProjectStatus } from "@/types/project";

export interface StatusCount {
  status: ProjectStatus;
  count: number;
  /** Fração entre 0 e 1. */
  share: number;
}

export interface PortfolioStats {
  total: number;
  byStatus: readonly StatusCount[];
  /** Progresso médio (0–100) dos projectos em execução; `null` se não existirem. */
  averageExecutionProgress: number | null;
}

export function computePortfolioStats(projects: readonly Project[]): PortfolioStats {
  const total = projects.length;

  const byStatus = PROJECT_STATUSES.map((status): StatusCount => {
    const count = projects.filter((project) => project.status === status).length;
    return { status, count, share: total === 0 ? 0 : count / total };
  });

  const executing = projects.filter((project) => project.status === "execution");
  const averageExecutionProgress =
    executing.length === 0
      ? null
      : executing.reduce((sum, project) => sum + project.progress, 0) / executing.length;

  return { total, byStatus, averageExecutionProgress };
}
