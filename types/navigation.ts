import type { LucideIcon } from "lucide-react";

export type NavItemId =
  | "dashboard"
  | "projects"
  | "ai-project-builder"
  | "market-intelligence"
  | "strategic-planning"
  | "business-model"
  | "commercial-management"
  | "financial-intelligence"
  | "execution-management"
  | "performance-bsc"
  | "risk-management"
  | "reports-documents"
  | "settings";

export interface NavItem {
  id: NavItemId;
  href: string;
  icon: LucideIcon;
}
