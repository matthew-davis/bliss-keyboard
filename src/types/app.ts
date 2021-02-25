// Enum
export enum ELanguage {
  ENGLISH = "ENGLISH",
  SWEDISH = "SWEDISH",
  NORWEGIAN = "NORWEGIAN",
  FINNISH = "FINNISH",
  HUNGARIAN = "HUNGARIAN",
  GERMAN = "GERMAN",
  DUTCH = "DUTCH",
  AFRIKAANS = "AFRIKAANS",
  RUSSIAN = "RUSSIAN",
  LATVIAN = "LATVIAN",
  POLISH = "POLISH",
  FRENCH = "FRENCH",
  SPANISH = "SPANISH",
}

// Interface
export interface IOptions {
  translation: boolean,
  search: boolean,
  languages: boolean,
  defaultLanguage: ELanguage,
  tooltips: boolean,
  posColours: boolean,
}
