import React from "react";
import {ELanguage, TKeyboardKey, TKeyboardKeys} from "../../types";
import { getMenu } from "./keyboardMenu";
import { keyboardLanguage } from "./keyboardLanguage";
import {getRecordById} from "../translation";

export const getKey = (event: KeyboardEvent) => {
  const selector: keyof HTMLElementTagNameMap = [`[data-code="${event.code}"]`] as unknown as keyof HTMLElementTagNameMap;
  ["Tab", "AltLeft", "Quote", "Slash"].indexOf(event.code) > -1 && event.preventDefault();
  return document.querySelector(selector);
};

const htmlDecode = (input: string, finalClass: string) => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  if (input.startsWith("<span>") || finalClass === "key--placeholder") {
    return <span>{doc.documentElement.textContent}</span>;
  }
  return doc.documentElement.textContent;
};

export const buildKeyboard = (menuKey: number, language: ELanguage = ELanguage.English) => {
  const menu: number[] = getMenu(menuKey);
  const menuLength: number = menu.length;
  const keyboardCharacters: TKeyboardKeys = keyboardLanguage[language];
  const keyboard: React.ReactNode[] = [];
  const rows: string[] = ["row1", "row2", "row3", "row4", "row5"];

  rows.forEach((row) => {
    const buildKey = (key: TKeyboardKey, index: number) => {
      let finalClass: string = key.className;
      let menuCharacter: number | null = null;
      let colour = "no-colour";

      if (row === "row1") {
        if (menuLength < 34) finalClass = "key--placeholder";
        if (menuLength >= 34 && menuLength <= 45 && menuLength - 33 < index) finalClass = "key--placeholder";

        // TODO: Remove when I'm done making the menus
        if (menuLength > 45) return <div>XXX</div>;

        if (key.code === "Backquote") finalClass = "key--placeholder";
        if (key.code === "Backspace") finalClass = key.className;
        if (!finalClass.includes("placeholder") && key.code !== "Backspace") menuCharacter = menu[(index + 33) - 1];
      }

      if (row === "row2") {
        if (menuLength < 10 && menuLength < index) finalClass = "key--placeholder";
        if (menuLength < 30 && index === 11) finalClass = "key--placeholder";
        if (menuLength < 31 && index === 12) finalClass = "key--placeholder";
        if (key.code === "Tab") finalClass = key.className;
        if (key.code === "IntlBackslash") finalClass = "key--placeholder";
        if (!finalClass.includes("placeholder")) menuCharacter = menu[index - 1];
        if (menuLength >= 30 && index === 11 && !finalClass.includes("placeholder")) menuCharacter = menu[30 - 1];
        if (menuLength >= 31 && index === 12 && !finalClass.includes("placeholder")) menuCharacter = menu[31 - 1];
      }

      if (row === "row3") {
        if (menuLength < 11) finalClass = "key--placeholder";
        if (menuLength >= 11 && menuLength <= 19 && menuLength - 10 < index) finalClass = "key--placeholder";
        if (menuLength < 29 && index === 10) finalClass = "key--placeholder";
        if (menuLength < 32 && index === 11) finalClass = "key--placeholder";
        if (key.code === "CapsLock") finalClass = "key--w3 key--placeholder";
        if (key.code === "Enter") finalClass = key.className;
        if (!finalClass.includes("placeholder") && key.code !== "Enter") menuCharacter = menu[(index + 10) - 1];
        if (menuLength >= 29 && index === 10 && !finalClass.includes("placeholder")) menuCharacter = menu[29 - 1];
        if (menuLength >= 32 && index === 11 && !finalClass.includes("placeholder")) menuCharacter = menu[32 - 1];
      }

      if (row === "row4") {
        if (menuLength < 20) finalClass = "key--placeholder";
        if (menuLength >= 20 && menuLength <= 26 && menuLength - 19 < index) finalClass = "key--placeholder";
        if (menuLength < 27 && index === 8) finalClass = "key--placeholder";
        if (menuLength < 28 && index === 9) finalClass = "key--placeholder";
        if (menuLength < 33 && index === 10) finalClass = "key--placeholder";
        if (["ShiftLeft", "ShiftRight"].indexOf(key.code) > -1) finalClass = "key--w4 key--placeholder";
        if (!finalClass.includes("placeholder")) menuCharacter = menu[(index + 19) - 1];
        if (menuLength >= 27 && index === 8 && !finalClass.includes("placeholder")) menuCharacter = menu[27 - 1];
        if (menuLength >= 28 && index === 9 && !finalClass.includes("placeholder")) menuCharacter = menu[28 - 1];
        if (menuLength >= 33 && index === 10 && !finalClass.includes("placeholder")) menuCharacter = menu[33 - 1];
      }

      if (row === "row5") {
        if (["ControlLeft", "AltLeft"].indexOf(key.code) > -1) finalClass = "key--w1 key--placeholder";
        if (key.code === "Space") finalClass = key.className;
        if (["ControlRight", "AltRight", "X1", "X2", "X3"].indexOf(key.code) > -1) finalClass = "key--placeholder";
        if (["Y1", "Y2"].indexOf(key.code) > -1) finalClass += " key--placeholder";
      }

      if (menuCharacter && getRecordById(menuCharacter)) {
        colour = getRecordById(menuCharacter).pos
      }

      return (
        <div key={key.code} className={finalClass} data-code={key.code}>
          {menuCharacter && (<span className={`key--pos ${colour}`}>&nbsp;</span>)}
          <span className={"key--character"}>{htmlDecode(key.character, finalClass)}</span>
          {menuCharacter && (
            <svg fill={"#eee"} width={"2.5em"} height={"2.5em"}><use href={`#${menuCharacter.toString()}`}></use></svg>
          )}
        </div>
      );
    };

    keyboard.push(
      <div key={row} className="keyboard__row">
        {keyboardCharacters[row].map(buildKey)}
      </div>
    );
  });

  return keyboard;
};
