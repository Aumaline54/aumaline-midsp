/**
 * DADOS DE DEMONSTRAÇÃO.
 * Nada neste ficheiro corresponde a projectos, pessoas ou valores reais.
 * Serão substituídos por dados do Supabase numa fase posterior.
 */
import type { ActivityItem, PerformanceIndicator, Project } from "@/types/project";

export const demoProjects: readonly Project[] = [
  { id: "demo-001", name: "Projecto Demo 01", sector: "Indústria", owner: "Responsável A", status: "development", progress: 20, updatedAt: "2026-11-03" },
  { id: "demo-002", name: "Projecto Demo 02", sector: "Serviços", owner: "Responsável B", status: "development", progress: 35, updatedAt: "2026-11-05" },
  { id: "demo-003", name: "Projecto Demo 03", sector: "Energia", owner: "Responsável C", status: "development", progress: 10, updatedAt: "2026-10-29" },
  { id: "demo-004", name: "Projecto Demo 04", sector: "Comércio", owner: "Responsável A", status: "evaluation", progress: 60, updatedAt: "2026-11-04" },
  { id: "demo-005", name: "Projecto Demo 05", sector: "Tecnologia", owner: "Responsável D", status: "evaluation", progress: 70, updatedAt: "2026-11-02" },
  { id: "demo-006", name: "Projecto Demo 06", sector: "Serviços", owner: "Responsável B", status: "approved", progress: 85, updatedAt: "2026-10-30" },
  { id: "demo-007", name: "Projecto Demo 07", sector: "Indústria", owner: "Responsável C", status: "approved", progress: 90, updatedAt: "2026-10-27" },
  { id: "demo-008", name: "Projecto Demo 08", sector: "Energia", owner: "Responsável D", status: "execution", progress: 45, updatedAt: "2026-11-06" },
  { id: "demo-009", name: "Projecto Demo 09", sector: "Comércio", owner: "Responsável A", status: "execution", progress: 65, updatedAt: "2026-11-05" },
  { id: "demo-010", name: "Projecto Demo 10", sector: "Tecnologia", owner: "Responsável B", status: "execution", progress: 80, updatedAt: "2026-11-01" },
  { id: "demo-011", name: "Projecto Demo 11", sector: "Serviços", owner: "Responsável C", status: "completed", progress: 100, updatedAt: "2026-09-18" },
  { id: "demo-012", name: "Projecto Demo 12", sector: "Indústria", owner: "Responsável D", status: "completed", progress: 100, updatedAt: "2026-08-22" },
];

export const demoActivity: readonly ActivityItem[] = [
  { id: "act-1", at: "2026-11-06T16:20:00Z", actor: "Responsável A", action: "actualizou o estado de", projectId: "demo-008", projectName: "Projecto Demo 08" },
  { id: "act-2", at: "2026-11-05T11:05:00Z", actor: "Responsável B", action: "submeteu para avaliação", projectId: "demo-002", projectName: "Projecto Demo 02" },
  { id: "act-3", at: "2026-11-05T09:40:00Z", actor: "Responsável A", action: "registou um novo marco em", projectId: "demo-009", projectName: "Projecto Demo 09" },
  { id: "act-4", at: "2026-11-04T15:15:00Z", actor: "Responsável D", action: "anexou um documento a", projectId: "demo-005", projectName: "Projecto Demo 05" },
  { id: "act-5", at: "2026-11-03T10:30:00Z", actor: "Responsável A", action: "criou o projecto", projectId: "demo-001", projectName: "Projecto Demo 01" },
  { id: "act-6", at: "2026-11-02T14:00:00Z", actor: "Responsável D", action: "iniciou a avaliação de", projectId: "demo-005", projectName: "Projecto Demo 05" },
];

/**
 * Marcadores de indicadores. Os nomes e as definições de cada indicador ainda
 * não foram fornecidos pela AUMALINE, por isso não existem valores.
 */
export const demoIndicators: readonly PerformanceIndicator[] = [
  { id: "indicator-1", label: "Indicador de desempenho 1", value: "—", hint: "Por definir — sem dados" },
  { id: "indicator-2", label: "Indicador de desempenho 2", value: "—", hint: "Por definir — sem dados" },
  { id: "indicator-3", label: "Indicador de desempenho 3", value: "—", hint: "Por definir — sem dados" },
  { id: "indicator-4", label: "Indicador de desempenho 4", value: "—", hint: "Por definir — sem dados" },
];

export const demoNotifications: readonly { id: string; text: string; at: string }[] = [
  { id: "n-1", text: "Projecto Demo 04 aguarda decisão de avaliação.", at: "2026-11-06T09:00:00Z" },
  { id: "n-2", text: "Projecto Demo 08 tem um marco com prazo próximo.", at: "2026-11-05T17:30:00Z" },
];
