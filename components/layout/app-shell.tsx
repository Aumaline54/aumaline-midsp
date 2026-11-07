"use client";

import { useEffect, useId, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { useDisclosure } from "@/hooks/use-disclosure";
import { getMessages } from "@/lib/i18n";

export function AppShell({ children }: { children: ReactNode }) {
  const m = getMessages();
  const menuId = useId();
  const pathname = usePathname();
  const { isOpen, open, close } = useDisclosure();

  // Fecha a gaveta ao mudar de página.
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Escape fecha a gaveta móvel.
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return (
    <div className="min-h-screen">
      <a
        href="#conteudo-principal"
        className="sr-only z-[60] rounded-md bg-card px-3 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {m.common.skipToContent}
      </a>

      <Sidebar id={menuId} open={isOpen} onClose={close} />

      <div className="lg:pl-64">
        <Header onOpenMenu={open} menuOpen={isOpen} menuId={menuId} />
        <main id="conteudo-principal" tabIndex={-1} className="mx-auto w-full max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
