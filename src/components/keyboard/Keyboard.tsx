import React, { useState } from "react";
import { ELanguage } from "../../types";
import "./keyboard.css";
import {buildKeyboard, getKey} from "../../utils/keyboard/keyboardBuild";
import { ReactComponent as Characters } from "../../assets/character.svg";

const Keyboard = () => {
  const [menuKey, setMenuKey] = useState<number>(1000);
  const [language, setLanguage] = useState<ELanguage>(ELanguage.English);

  document.body.addEventListener("keydown", function (e) {
    const key = getKey(e);
    key && key.setAttribute("data-pressed", "on");
  });

  document.body.addEventListener("keyup", function (e) {
    const key = getKey(e);
    key && key.removeAttribute("data-pressed");
  });

  return (
    <div key={"keyboard"} id="keyboard">
      <Characters height={0} width={0} />
      {buildKeyboard(menuKey, language)}
    </div>
  );
};

export default Keyboard;
