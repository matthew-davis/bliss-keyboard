import { ELanguage } from "./languages";
import {TMenuState} from "./menus";

export type TMenuMap = { [id: number]: number[] };

export type TKeyboardProps = {
  language: ELanguage,
  menu: { menuState: TMenuState, setMenuState: (x: TMenuState) => void },
  message: { messageState: TMenuState[], setMessageState: (x: TMenuState[]) => void },
  posColours: boolean,
}

export type TKeyboardKey = { className: string, code: string, character: string }
export type TKeyboardKeys = { [key: string]: TKeyboardKey[] }
export type TKeyboardLanguage = { [key in ELanguage]: TKeyboardKeys };
