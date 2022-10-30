import {ELanguage} from "./languages";
import {TMenuState} from "./menus";

export type TDefinitionsProps = {
  language: ELanguage,
  hoveredKey: IDefinitionKey | undefined,
}

export interface IDefinitionKey extends TMenuState {
  menuCharacter: number | null;
}