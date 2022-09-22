// Imports
import * as React from "react";
import {ELanguage} from "../app";

// Interfaces
export interface IMenuMap {
  [id: number]: number[],
}



export interface IPassedProps {
  language: ELanguage,
  displayDefinitions: boolean,
  posColours: boolean,
}

// Types
export type TMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type TOnClick = (event: TMouseEvent) => void;

export type TKeyboardKey = { className: string, code: string, character: string }
export type TKeyboardKeys = { [key: string]: TKeyboardKey[] }
export type TKeyboardLanguage = { [key in ELanguage]: TKeyboardKeys };
