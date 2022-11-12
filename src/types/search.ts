import {ELanguage} from "./languages";
import {TMenuState} from "./menus";
import {IDefinitionKey} from "./definitions";

export type TSearchProps = {
  language: ELanguage;
  numberOfResults: number;
  menu: { menuState: TMenuState, setMenuState: (x: TMenuState) => void },
  setHoveredKey: (x: IDefinitionKey | undefined) => void,
  message: { messageState: TMenuState[], setMessageState: (x: TMenuState[]) => void },
}
