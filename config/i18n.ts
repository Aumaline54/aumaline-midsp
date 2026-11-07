export const locales = ["pt-PT"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-PT";
