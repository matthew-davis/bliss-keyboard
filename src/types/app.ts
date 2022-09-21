// Enum
export enum ELanguage {
  English = "ENGLISH",
  Swedish = "SWEDISH",
  Norwegian = "NORWEGIAN",
  Finnish = "FINNISH",
  Hungarian = "HUNGARIAN",
  German = "GERMAN",
  Dutch = "DUTCH",
  Afrikaans = "AFRIKAANS",
  Russian = "RUSSIAN",
  Latvian = "LATVIAN",
  Polish = "POLISH",
  French = "FRENCH",
  Spanish = "SPANISH",
}

// Interface
export interface IOptions {
  translation: boolean;
  search: boolean;
  languages: boolean;
  defaultLanguage: ELanguage;
  displayDefinitions: boolean;
  posColours: boolean;
}
