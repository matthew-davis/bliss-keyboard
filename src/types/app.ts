import { ELanguage } from "./languages";

export type TOptions = {
  translation: boolean;
  search: boolean;
  numberOfResults: number;
  menu: boolean;
  definitions: boolean;
  languages: boolean;
  defaultLanguage: ELanguage;
  posColours: boolean;
  keyCharacters: boolean;
}
