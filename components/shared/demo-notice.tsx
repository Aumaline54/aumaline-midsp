import { Info } from "lucide-react";
import { getMessages } from "@/lib/i18n";

/** Aviso permanente sempre que uma página apresenta dados de demonstração. */
export function DemoNotice() {
  const m = getMessages();

  return (
    <div
      role="note"
      className="flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950"
    >
      <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      <p>
        <strong className="font-semibold">{m.common.demoData}.</strong> {m.common.demoNotice}
      </p>
    </div>
  );
}
