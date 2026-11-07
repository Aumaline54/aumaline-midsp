import type { ProjectStatus } from "@/types/project";

interface StatusStyle {
  /** Classes do indicador (barra / ponto). */
  dot: string;
  /** Classes do selo de estado. */
  badge: string;
}

/**
 * Estilos por estado. O estado é sempre acompanhado de texto: a cor nunca
 * é o único meio de transmitir informação.
 */
export const projectStatusStyles: Record<ProjectStatus, StatusStyle> = {
  development: {
    dot: "bg-[#727271]",
    badge: "bg-neutral-100 text-neutral-700 ring-neutral-300",
  },
  evaluation: {
    dot: "bg-amber-600",
    badge: "bg-amber-50 text-amber-900 ring-amber-300",
  },
  approved: {
    dot: "bg-teal-700",
    badge: "bg-teal-50 text-teal-900 ring-teal-300",
  },
  execution: {
    dot: "bg-primary",
    badge: "bg-red-50 text-red-900 ring-red-300",
  },
  completed: {
    dot: "bg-black",
    badge: "bg-black text-white ring-black",
  },
};
