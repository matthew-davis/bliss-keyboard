// Imports
import * as React from "react";
import {ELanguage} from "./app";

// Interfaces
export interface ICharacterMap {
  highlights: number[],
  menus: number[][],
  indicatorMenu: boolean,
}

export interface IMenuMap {
  [id: number]: number[],
}

export interface IPassedProps {
  language: ELanguage,
  tooltips: boolean,
  posColours: boolean,
}

// Types
export type TMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type TOnClick = (event: TMouseEvent) => void;
