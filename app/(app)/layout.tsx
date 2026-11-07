import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";

/**
 * Layout da área autenticada. Quando a autenticação existir, a verificação
 * de sessão deve ser feita aqui (ou em middleware/proxy).
 */
export default function AppLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
