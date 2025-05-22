import type { Locale } from "./config";

export const getDictionary = async (locale: Locale) => {
  const dictionary = await import(`@/locales/${locale}/common.json`);
  return dictionary.default;
};
