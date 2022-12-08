export enum ELanguage {
  English = 'english',
  Swedish = 'swedish',
  Norwegian = 'norwegian',
  Finnish = 'finnish',
  Hungarian = 'hungarian',
  German = 'german',
  Dutch = 'dutch',
  Afrikaans = 'afrikaans',
  Russian = 'russian',
  Latvian = 'latvian',
  Polish = 'polish',
  French = 'french',
  Spanish = 'spanish',
}

export type TLanguagesProps = {
  language: { languageState: ELanguage; setLanguageState: (x: ELanguage) => void };
};
