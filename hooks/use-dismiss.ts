"use client";

import { useEffect, type RefObject } from "react";

/**
 * Chama `onDismiss` ao premir Escape ou ao clicar fora do elemento.
 * Só fica activo enquanto `active` for verdadeiro.
 */
export function useDismiss(
  ref: RefObject<HTMLElement | null>,
  active: boolean,
  onDismiss: () => void,
): void {
  useEffect(() => {
    if (!active) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onDismiss();
    }

    function handlePointerDown(event: PointerEvent) {
      const element = ref.current;
      if (element && event.target instanceof Node && !element.contains(event.target)) {
        onDismiss();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [ref, active, onDismiss]);
}
