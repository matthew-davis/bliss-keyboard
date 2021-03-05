// Enum
export enum ELanguage {
  ENGLISH = "english",
  SWEDISH = "swedish",
  NORWEGIAN = "norwegian",
  FINNISH = "finnish",
  HUNGARIAN = "hungarian",
  GERMAN = "german",
  DUTCH = "dutch",
  AFRIKAANS = "afrikaans",
  RUSSIAN = "russian",
  LATVIAN = "latvian",
  POLISH = "polish",
  FRENCH = "french",
  SPANISH = "spanish",
}

// Interface
export interface IOptions {
  translation: boolean,
  search: boolean,
  languages: boolean,
  defaultLanguage: ELanguage,
  displayDefinitions: boolean,
  posColours: boolean,
}
