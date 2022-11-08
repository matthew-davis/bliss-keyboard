import React from "react";
import {TMenuState} from "../types";

export const typeCharacters = (messageState: TMenuState[]): JSX.Element[] => {
  return messageState.map((x: TMenuState, index: number) => (
    <svg key={index} fill={"#111"} width={"1em"} height={"2em"}>
      <use href={`#${x.menuKey.toString()}`} />
      <use href={`#${x.diacriticKey.toString()}`} />
    </svg>
  ))
};
