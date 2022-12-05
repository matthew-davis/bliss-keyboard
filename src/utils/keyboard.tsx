import React from "react";
import { ELanguage, IDefinitionKey, TKeyboardKey, TKeyboardKeys, TMenuState } from "../types";
import { getMenu } from "./menus";
import { keyboardLanguage } from "./languages";
import { getRecordById } from "./translations";

const specialKeys: string[] = ["Tab", "Backspace", "Enter", "Space"];

export const keyDownHandler = (
  event: KeyboardEvent,
  menu: { menuState: TMenuState, setMenuState: (x: TMenuState) => void },
  message: { messageState: TMenuState[], setMessageState: (x: TMenuState[]) => void },
): void => {
  if (document.activeElement!.id !== "search") {
    const key: HTMLElement | null = getKey(event);
    key && key.setAttribute("data-pressed", "on");
    if (key) keyType(key, menu, message);
  }
};

export const keyUpHandler = (event: KeyboardEvent): void => {
  const key: HTMLElement | null = getKey(event);
  key && key.removeAttribute("data-pressed");
}

const keyMouseClick = (
  event: MouseEvent,
  menu: { menuState: TMenuState, setMenuState: (x: TMenuState) => void },
  message: { messageState: TMenuState[], setMessageState: (x: TMenuState[]) => void },
): void => {
  let key: Element | null = event.target as Element;
  const keyCharacter: string | null = key && key.getAttribute("data-character");
  if (keyCharacter === null) key = key && key.parentNode as Element;
  key && keyType(key as HTMLElement, menu, message);
}

const keyType = (
  key: HTMLElement,
  menu: { menuState: TMenuState, setMenuState: (x: TMenuState) => void },
  message: { messageState: TMenuState[], setMessageState: (x: TMenuState[]) => void },
): void => {
  const dataCharacter: string = key.getAttribute("data-character") || "";
  const dataCharacterCode: number = parseInt(dataCharacter);

  if (isNaN(dataCharacterCode) && specialKeys.indexOf(dataCharacter) > -1) {
    switch (dataCharacter) {
      case "Tab":
        menu.menuState.diacriticKey > 0
          ? menu.setMenuState({ menuKey: menu.menuState.menuKey, diacriticKey: 0 })
          : menu.setMenuState({ menuKey: 1000, diacriticKey: 0 })
        break;
      case "Backspace":
        message.messageState.pop();
        message.setMessageState([...message.messageState]);
        break;
      case "Enter":
        // TODO: Figure out where to put the message after typed
        break;
      case "Space":
        message.messageState.push({ menuKey: 0, diacriticKey: 0 });
        message.setMessageState([...message.messageState]);
        break;
    }
  }

  if (!isNaN(dataCharacterCode)) {
    if (menu.menuState.menuKey === 1000 && menu.menuState.diacriticKey === 0) {
      menu.setMenuState({ menuKey: dataCharacterCode, diacriticKey: 0 });
    }

    if (menu.menuState.menuKey !== 1000 && menu.menuState.diacriticKey === 0) {
      console.log(menu.menuState.menuKey);
      console.log(dataCharacterCode);

      menu.setMenuState({ menuKey: menu.menuState.menuKey, diacriticKey: dataCharacterCode });
    }

    if (menu.menuState.diacriticKey > 0) {
      message.messageState.push({ menuKey: menu.menuState.diacriticKey, diacriticKey: dataCharacterCode });
      message.setMessageState([...message.messageState]);
      menu.setMenuState({ menuKey: 1000, diacriticKey: 0 });
    }
  }
}

const getKey = (event: KeyboardEvent): HTMLElement | null => {
  const selector: keyof HTMLElementTagNameMap = [`[data-code="${event.code}"]`] as unknown as keyof HTMLElementTagNameMap;
  ["Tab", "AltLeft", "Quote", "Slash"].indexOf(event.code) > -1 && event.preventDefault();
  return document.querySelector(selector);
};

const htmlDecode = (input: string, finalClass: string): JSX.Element | string | null => {
  const doc: Document = new DOMParser().parseFromString(input, "text/html");
  if (input.startsWith("<span>") || finalClass === "key--placeholder") {
    return <span>{doc.documentElement.textContent}</span>;
  }
  return doc.documentElement.textContent;
};

export const buildKeyboard = (
  language: ELanguage = ELanguage.English,
  menu: { menuState: TMenuState, setMenuState: (x: TMenuState) => void },
  message: { messageState: TMenuState[], setMessageState: (x: TMenuState[]) => void },
  posColours: boolean,
  keyCharacters: boolean,
  setHoveredKey: (x: IDefinitionKey | undefined) => void,
): React.ReactNode[] => {
  const menuCurrent: number[] = getMenu(menu.menuState);
  const menuLength: number = menuCurrent.length;
  const keyboardCharacters: TKeyboardKeys = keyboardLanguage[language];
  const keyboard: React.ReactNode[] = [];
  const rows: string[] = ["row1", "row2", "row3", "row4", "row5"];

  rows.forEach((row) => {
    const buildKey = (key: TKeyboardKey, index: number): JSX.Element => {
      let finalClass: string = key.className;
      let menuCharacter: number | null = null;
      let colour: string = "no-colour";

      if (row === "row1") {
        if (menuLength < 34) finalClass = "key--placeholder";
        if (menuLength >= 34 && menuLength <= 45 && menuLength - 33 < index) finalClass = "key--placeholder";
        if (key.code === "Backquote" && language === ELanguage.English) finalClass = "key--placeholder";
        if (key.code === "Section") finalClass = "key--placeholder";
        if (key.code === "Backspace") finalClass = key.className;
        if (!finalClass.includes("placeholder") && key.code !== "Backspace") menuCharacter = menuCurrent[(index + 33) - 1];
      }

      if (row === "row2") {
        if (menuLength < 12 && menuLength < index) finalClass = "key--placeholder";
        if (key.code === "Tab") finalClass = key.className;
        if (key.code === "IntlBackslash") finalClass = "key--placeholder";
        if (key.code === "LessThan") finalClass = "key--placeholder";
        if (!finalClass.includes("placeholder")) menuCharacter = menuCurrent[index - 1];
      }

      if (row === "row3") {
        if (menuLength < 13) finalClass = "key--placeholder";
        if (menuLength >= 13 && menuLength <= 23 && menuLength - 12 < index) finalClass = "key--placeholder";
        if (key.code === "CapsLock") finalClass = "key--w3 key--placeholder";
        if (key.code === "Enter") finalClass = key.className;
        if (!finalClass.includes("placeholder") && key.code !== "Enter") menuCharacter = menuCurrent[(index + 12) - 1];
      }

      if (row === "row4") {
        if (menuLength < 24) finalClass = "key--placeholder";
        if (menuLength >= 24 && menuLength <= 33 && menuLength - 23 < index) finalClass = "key--placeholder";
        if (["ShiftLeft", "ShiftRight"].indexOf(key.code) > -1) finalClass = "key--w4 key--placeholder";
        if (!finalClass.includes("placeholder")) menuCharacter = menuCurrent[(index + 23) - 1];
      }

      if (row === "row5") {
        if (["ControlLeft", "AltLeft"].indexOf(key.code) > -1) finalClass = "key--w1 key--placeholder";
        if (key.code === "Space") finalClass = key.className;
        if (["ControlRight", "AltRight", "X1", "X2", "X3"].indexOf(key.code) > -1) finalClass = "key--placeholder";
        if (["Y1", "Y2"].indexOf(key.code) > -1) finalClass += " key--placeholder";
      }

      if (menuCharacter && getRecordById(menuCharacter)) {
        colour = getRecordById(menuCharacter).pos;
      }

      return (
        <div
          key={key.code}
          data-character={menuCharacter ? menuCharacter.toString() : key.code}
          className={finalClass}
          data-code={key.code}
          onClick={(e) => keyMouseClick(e as unknown as MouseEvent, menu, message)}
          onMouseEnter={() => setHoveredKey({ ...menu.menuState, menuCharacter: menuCharacter })}
          onMouseLeave={() => setHoveredKey(undefined)}
        >
          {posColours && menuCharacter && (<span className={`key--pos ${colour}`}>&nbsp;</span>)}
          {(keyCharacters || ["Backspace", "Tab", "Enter"].includes(key.code)) && (<span className={"key--character"}>{htmlDecode(key.character, finalClass)}</span>)}
          <svg fill={"#eee"} width={"2.5em"} height={"2.5em"}>
            {menuCharacter && menu.menuState.diacriticKey === 0 && (<use href={`#${menuCharacter.toString()}`}></use>)}
            {menuCharacter === menu.menuState.diacriticKey && (<use href={`#${menu.menuState.diacriticKey.toString()}`} />)}
            {menuCharacter && menuCharacter !== menu.menuState.diacriticKey && menu.menuState.diacriticKey > 0 && (
              <>
                <use href={`#${menuCharacter.toString()}`} />
                <use href={`#${menu.menuState.diacriticKey.toString()}`} />
              </>
            )}
          </svg>
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
