import { defaultLocale, type Locale } from "@/config/i18n";

/**
 * As datas são formatadas manualmente, em UTC, para que o servidor (Node) e o
 * browser produzam exactamente o mesmo texto e não haja diferenças de
 * hidratação (o `Intl` pode variar entre ambientes).
 *
 * O formato é DD/MM/AAAA, comum a pt-PT. Ao adicionar idiomas, estender aqui.
 */
function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export function formatDate(iso: string, _locale: Locale = defaultLocale): string {
  const date = new Date(iso);
  return `${pad(date.getUTCDate())}/${pad(date.getUTCMonth() + 1)}/${date.getUTCFullYear()}`;
}

export function formatDateTime(iso: string, locale: Locale = defaultLocale): string {
  const date = new Date(iso);
  return `${formatDate(iso, locale)} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`;
}

/** Percentagem a partir de uma fração (0–1), usada apenas em componentes de servidor. */
export function formatPercent(value: number, locale: Locale = defaultLocale): string {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value);
}
