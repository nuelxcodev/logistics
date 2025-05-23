export const locales = ["en", "fr", "es", "de", "it", "pt", "zh", "ar", "uk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
