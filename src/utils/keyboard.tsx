import React from "react";
import {ELanguage, TKeyboardKey, TKeyboardKeys} from "../types";
import { getMenu } from "./menus";
import { keyboardLanguage } from "./languages";
import {getRecordById} from "./translations";

const specialKeys = ["Tab", "Backspace", "Enter", "Space"];

export const keyDownHandler = (e: any, menuState: any, setMenuState: any): void => {
  const key: HTMLElement | null = getKey(e);
  key && key.setAttribute("data-pressed", "on");

  if (key) keyType(key, menuState, setMenuState);
};

export const keyUpHandler = (e: KeyboardEvent): void => {
  const key: HTMLElement | null = getKey(e);
  key && key.removeAttribute("data-pressed");
}

const keyMouseClick = (e: any, menuState: any, setMenuState: any) => {
  let key = e.target;
  const keyCharacter = key.getAttribute("data-character");
  if (keyCharacter === null) key = key.parentNode;
  if (key) keyType(key, menuState, setMenuState);
}

const keyType = (key: HTMLElement, menuState: any, setMenuState: any) => {
  const dataCharacter = key.getAttribute("data-character") || "";
  const dataCharacterCode = parseInt(dataCharacter);

  if (isNaN(dataCharacterCode) && specialKeys.indexOf(dataCharacter) > -1) {
    switch (dataCharacter) {
      case "Tab":
        menuState.diacriticKey > 0
          ? setMenuState({ menuKey: menuState.menuKey, diacriticKey: 0 })
          : setMenuState({ menuKey: 1000, diacriticKey: 0 })
        break;
      case "Backspace":
        break;
      case "Enter":
        break;
      case "Space":
        break;
    }
  }

  if (!isNaN(dataCharacterCode)) {
    if (menuState.menuKey === 1000 && menuState.diacriticKey === 0) {
      setMenuState({ menuKey: dataCharacterCode, diacriticKey: 0 });
    }

    if (menuState.menuKey !== 1000 && menuState.diacriticKey === 0) {
      setMenuState({ menuKey: menuState.menuKey, diacriticKey: dataCharacterCode });
    }

    if (menuState.diacriticKey > 0) {
      console.log(`Type: ${dataCharacter}`);
      setMenuState({ menuKey: menuState.menuKey, diacriticKey: menuState.diacriticKey });
    }
  }
}

const getKey = (event: KeyboardEvent) => {
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

export const buildKeyboard = (
  menuState: { menuKey: number, diacriticKey: number },
  posColours: boolean,
  setMenuState: (x: any) => void,
  language: ELanguage = ELanguage.English,
) => {
  const menu: number[] = getMenu(menuState);
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
        if (menuLength < 12 && menuLength < index) finalClass = "key--placeholder";
        if (key.code === "Tab") finalClass = key.className;
        if (key.code === "IntlBackslash") finalClass = "key--placeholder";
        if (!finalClass.includes("placeholder")) menuCharacter = menu[index - 1];
      }

      if (row === "row3") {
        if (menuLength < 13) finalClass = "key--placeholder";
        if (menuLength >= 13 && menuLength <= 23 && menuLength - 13 < index) finalClass = "key--placeholder";
        if (key.code === "CapsLock") finalClass = "key--w3 key--placeholder";
        if (key.code === "Enter") finalClass = key.className;
        if (!finalClass.includes("placeholder") && key.code !== "Enter") menuCharacter = menu[(index + 12) - 1];
      }

      if (row === "row4") {
        if (menuLength < 24) finalClass = "key--placeholder";
        if (menuLength >= 24 && menuLength <= 33 && menuLength - 24 < index) finalClass = "key--placeholder";
        if (["ShiftLeft", "ShiftRight"].indexOf(key.code) > -1) finalClass = "key--w4 key--placeholder";
        if (!finalClass.includes("placeholder")) menuCharacter = menu[(index + 23) - 1];
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
        <div
          key={key.code}
          data-character={menuCharacter ? menuCharacter.toString() : key.code}
          className={finalClass}
          data-code={key.code}
          onClick={(e) => keyMouseClick(e, menuState, setMenuState)}
        >
          {posColours && menuCharacter && (<span className={`key--pos ${colour}`}>&nbsp;</span>)}
          <span className={"key--character"}>{htmlDecode(key.character, finalClass)}</span>
          {menuCharacter && menuState.diacriticKey === 0 && (
            <svg fill={"#eee"} width={"2.5em"} height={"2.5em"}><use href={`#${menuCharacter.toString()}`}></use></svg>
          )}
          {menuCharacter === menuState.diacriticKey && (
            <svg fill={"#eee"} width={"2.5em"} height={"2.5em"}>
              <use href={`#${menuState.diacriticKey.toString()}`} />
            </svg>
          )}
          {menuCharacter && menuCharacter !== menuState.diacriticKey && menuState.diacriticKey > 0 && (
            <svg fill={"#eee"} width={"2.5em"} height={"2.5em"}>
              <use href={`#${menuCharacter.toString()}`} />
              <use href={`#${menuState.diacriticKey.toString()}`} />
            </svg>
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
