"use client";

import { useId, useRef, type ReactNode } from "react";
import { useDisclosure } from "@/hooks/use-disclosure";
import { useDismiss } from "@/hooks/use-dismiss";
import { cn } from "@/lib/utils";

interface PopoverProps {
  /** Conteúdo do botão que abre o painel. */
  trigger: ReactNode;
  /** Nome acessível do botão. */
  triggerLabel: string;
  triggerClassName?: string;
  panelClassName?: string;
  children: ReactNode;
}

/**
 * Painel simples com padrão de divulgação (botão + região), fecha com Escape
 * ou ao clicar fora. Pode ser substituído por Popover/DropdownMenu do shadcn/ui.
 */
export function Popover({ trigger, triggerLabel, triggerClassName, panelClassName, children }: PopoverProps) {
  const { isOpen, close, toggle } = useDisclosure();
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useDismiss(containerRef, isOpen, close);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={triggerLabel}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
        className={cn(
          "inline-flex items-center gap-2 rounded-md text-sm transition-colors hover:bg-muted",
          triggerClassName,
        )}
      >
        {trigger}
      </button>
      {isOpen ? (
        <div
          id={panelId}
          className={cn(
            "absolute right-0 z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-lg border bg-card p-1 shadow-lg",
            panelClassName,
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
