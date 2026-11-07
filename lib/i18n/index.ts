import { defaultLocale, type Locale } from "@/config/i18n";
import { ptPT, type Messages } from "./messages/pt-PT";

const catalogues: Record<Locale, Messages> = {
  "pt-PT": ptPT,
};

/**
 * Devolve as mensagens do idioma pedido. Hoje existe apenas `pt-PT`; para
 * adicionar um idioma, crie o ficheiro em `messages/` e registe-o acima.
 */
export function getMessages(locale: Locale = defaultLocale): Messages {
  return catalogues[locale];
}

export type { Messages };
