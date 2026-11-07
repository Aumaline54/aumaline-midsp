import {
  BookOpen,
  Boxes,
  FolderKanban,
  Gauge,
  Handshake,
  LayoutDashboard,
  ListChecks,
  FileText,
  Settings,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";
import type { NavItem } from "@/types/navigation";

/** Ordem e destinos da sidebar (13 entradas). Os rótulos vêm de `lib/i18n`. */
export const mainNavigation: readonly NavItem[] = [
  { id: "dashboard", href: "/dashboard", icon: LayoutDashboard },
  { id: "projects", href: "/projectos", icon: FolderKanban },
  { id: "ai-project-builder", href: "/modulos/ai-project-builder", icon: Sparkles },
  { id: "market-intelligence", href: "/modulos/market-intelligence", icon: TrendingUp },
  { id: "strategic-planning", href: "/modulos/strategic-planning", icon: Target },
  { id: "business-model", href: "/modulos/business-model", icon: Boxes },
  { id: "commercial-management", href: "/modulos/commercial-management", icon: Handshake },
  { id: "financial-intelligence", href: "/modulos/financial-intelligence", icon: Wallet },
  { id: "execution-management", href: "/modulos/execution-management", icon: ListChecks },
  { id: "performance-bsc", href: "/modulos/performance-bsc", icon: Gauge },
  { id: "risk-management", href: "/modulos/risk-management", icon: ShieldAlert },
  { id: "reports-documents", href: "/modulos/reports-documents", icon: FileText },
  { id: "settings", href: "/configuracoes", icon: Settings },
] as const;

/** Ligação secundária para a página de apresentação da metodologia. */
export const methodologyLink = {
  href: "/midsp",
  icon: BookOpen,
} as const;
