export type HttpsString = "https://"
export type DomainEnding = "com" | "de" | any
export type UrlString = `${HttpsString}${string}.${DomainEnding}`
