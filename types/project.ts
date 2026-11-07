export const PROJECT_STATUSES = [
  "development",
  "evaluation",
  "approved",
  "execution",
  "completed",
] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export interface Project {
  id: string;
  name: string;
  sector: string;
  owner: string;
  status: ProjectStatus;
  /** Progresso em percentagem (0–100). */
  progress: number;
  /** Data ISO 8601 (YYYY-MM-DD). */
  updatedAt: string;
}

export interface ActivityItem {
  id: string;
  /** Data e hora ISO 8601 em UTC. */
  at: string;
  actor: string;
  action: string;
  projectId: string;
  projectName: string;
}

export interface PerformanceIndicator {
  id: string;
  label: string;
  value: string;
  hint: string;
}
