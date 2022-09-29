import { ELanguage } from "./languages";

export interface IMenuMap { [id: number]: number[] }
export interface IOptionsProps {
  menuState: {
    menuKey: number,
    diacriticKey: number,
  },
  setMenuState: (x: any) => void,
  language: ELanguage,
  posColours: boolean,
}

export type TKeyboardKey = { className: string, code: string, character: string }
export type TKeyboardKeys = { [key: string]: TKeyboardKey[] }
export type TKeyboardLanguage = { [key in ELanguage]: TKeyboardKeys };
