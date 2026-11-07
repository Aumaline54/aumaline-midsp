"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { getMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface SidebarProps {
  id: string;
  /** Estado da gaveta em ecrãs pequenos. Em `lg` a sidebar é sempre visível. */
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ id, open, onClose }: SidebarProps) {
  const m = getMessages();

  return (
    <>
      {open ? (
        <div
          aria-hidden="true"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      ) : null}

      <aside
        id={id}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-card transition-transform duration-200 lg:translate-x-0",
          open ? "translate-x-0" : "invisible -translate-x-full lg:visible",
        )}
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={m.common.closeMenu}
            onClick={onClose}
          >
            <X aria-hidden="true" />
          </Button>
        </div>
        <SidebarNav onNavigate={onClose} />
      </aside>
    </>
  );
}
