import { ELanguage } from "./languages";

export interface IOptions {
  translation: boolean;
  search: boolean;
  menu: boolean;
  definitions: boolean;
  languages: boolean;
  defaultLanguage: ELanguage;
  posColours: boolean;
}
