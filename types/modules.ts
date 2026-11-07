export const MODULE_SLUGS = [
  "ai-project-builder",
  "market-intelligence",
  "strategic-planning",
  "business-model",
  "commercial-management",
  "financial-intelligence",
  "execution-management",
  "performance-bsc",
  "risk-management",
  "reports-documents",
] as const;

export type ModuleSlug = (typeof MODULE_SLUGS)[number];

export type ModuleStatus = "planned" | "in-development" | "available";

export interface ModuleCopy {
  /** Nome do módulo (mantém-se em inglês, conforme a navegação definida). */
  title: string;
  description: string;
  /** Âmbito previsto, a confirmar na fase de especificação do módulo. */
  scope: readonly string[];
}
