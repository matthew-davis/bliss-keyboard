// Imports
import * as React from "react";
import {ELanguage} from "./app";

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
