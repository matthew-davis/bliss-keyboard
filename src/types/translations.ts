import { TMenuState } from "./menus";
import {ELanguage} from "./languages";

export type TTranslationsProps = {
  language: ELanguage,
  messageState: TMenuState[],
}
