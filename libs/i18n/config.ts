export const locales= ["en","fr","es"] as const
export const defaultlocale ="en"

export type Locale =typeof locales[number]