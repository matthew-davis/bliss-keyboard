import React, { useState } from "react";
import { keyboardLanguage } from "./keyboardLanguage";
import { getMenu } from "../../utils";
import { ELanguage } from "../../types";
import "./Keyboard.css";

const Keyboard = () => {
  const [menuKey, setMenuKey] = useState<number>(1000);
  const [language, setLanguage] = useState<ELanguage>(ELanguage.English);

  const getKey = (event: KeyboardEvent) => {
    console.log(event.key);

    // const location: string =
    //   event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT ? "-R" : "";
    // const selector: any = [`[data-code="${event.keyCode}${location}"]`];
    // // Prevents the default behaviour of keys that are used by the browser: Tab, Alt and @
    // [9, 18, 222].indexOf(event.keyCode) > -1 && event.preventDefault();
    // return document.querySelector(selector);
  };

  document.body.addEventListener("keydown", function (e) {
    getKey(e);

    // const key = getKey(e);
    // key && key.setAttribute("data-pressed", "on");
  });

  document.body.addEventListener("keyup", function (e) {
    // const key = getKey(e);
    // key && key.removeAttribute("data-pressed");
  });

  const htmlDecode = (input: string, finalClass: string) => {
    const doc = new DOMParser().parseFromString(input, "text/html");
    if (input.startsWith("<span>") || finalClass === "key--placeholder") {
      return <span>{doc.documentElement.textContent}</span>;
    }
    return doc.documentElement.textContent;
  };

  // TODO: This whole function needs refactored
  const buildKeyboard = (
    menuKey: number,
    language: ELanguage = ELanguage.English
  ): React.ReactNode => {
    const menu = getMenu(menuKey);
    const menuLength = menu.length;
    const keyboardCharacters = keyboardLanguage[language];
    const keyboard: any = [];

    ["row1", "row2", "row3", "row4", "row5"].forEach((row) => {
      const buildKey = (key: any, index: any) => {
        let finalClass = "";
        let menuCharacter: any = " ";

        if (menuKey === 2000) {
          setMenuKey(1000);
        }

        if (language === ELanguage.German) {
          setLanguage(ELanguage.English);
        }

        if (row === "row1") {
          if (menuLength < 34) finalClass = "key--placeholder";
          if (menuLength >= 34 && menuLength <= 45 && menuLength - 33 < index)
            finalClass = "key--placeholder";
          // TODO: Remove when I'm done making the menus
          if (menuLength > 45) return <div>XXX</div>;
        }

        if (row === "row2") {
          if (menuLength < 10 && menuLength < index)
            finalClass = "key--placeholder";
          if (menuLength < 30 && index === 11) finalClass = "key--placeholder";
          if (menuLength < 31 && index === 12) finalClass = "key--placeholder";
          if (!finalClass.includes("placeholder"))
            menuCharacter = menu[index - 1];
        }

        if (row === "row3") {
          if (menuLength < 11) finalClass = "key--placeholder";
          if (menuLength >= 11 && menuLength <= 19 && menuLength - 10 < index)
            finalClass = "key--placeholder";
          if (menuLength < 29 && index === 10) finalClass = "key--placeholder";
          if (menuLength < 32 && index === 11) finalClass = "key--placeholder";
        }

        if (row === "row4") {
          if (menuLength < 20) finalClass = "key--placeholder";
          if (menuLength >= 20 && menuLength <= 26 && menuLength - 19 < index)
            finalClass = "key--placeholder";
          if (menuLength < 27 && index === 8) finalClass = "key--placeholder";
          if (menuLength < 28 && index === 9) finalClass = "key--placeholder";
          if (menuLength < 33 && index === 10) finalClass = "key--placeholder";
        }

        if (["8", "9", "13", "32"].indexOf(key.dataCode) > -1 || !finalClass)
          finalClass = key.className;
        if (
          ["17-R", "192", "220", "225", "X1", "X2", "X3"].indexOf(
            key.dataCode
          ) > -1
        )
          finalClass = "key--placeholder";
        if (["17", "18"].indexOf(key.dataCode) > -1)
          finalClass = "key--w1 key--placeholder";
        if (["20"].indexOf(key.dataCode) > -1)
          finalClass = "key--w3 key--placeholder";
        if (["16", "16-R"].indexOf(key.dataCode) > -1)
          finalClass = "key--w4 key--placeholder";
        if (["Y1", "Y2"].indexOf(key.dataCode) > -1)
          finalClass += " key--placeholder";

        // if (!finalClass.includes("placeholder")) menuCharacter = menu[index - 1];
        if (["8", "9", "13", "32"].indexOf(key.dataCode) > -1)
          menuCharacter = " ";

        return (
          <div
            key={key.dataCode}
            className={finalClass}
            data-code={key.dataCode}
          >
            <span className={"key--character"}>
              {htmlDecode(key.character, finalClass)}
            </span>
            <span className={"menu--character"}>{menuCharacter}</span>
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

  return (
    <div key={"keyboard"} id="keyboard">
      {buildKeyboard(menuKey, language)}
    </div>
  );
};

export default Keyboard;
