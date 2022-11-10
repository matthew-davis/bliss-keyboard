import {ELanguage} from "./languages";
import {TMenuState} from "./menus";
import {IDefinitionKey} from "./definitions";

export type TSearchProps = {
  language: ELanguage;
  numberOfResults: number;
  menu: TMenuState,
  setHoveredKey: (x: IDefinitionKey | undefined) => void,
}
