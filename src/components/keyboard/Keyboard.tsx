import React from "react";
import { IOptionsProps } from "../../types";
import "./keyboard.css";
import {buildKeyboard, getKey} from "../../utils";
import { ReactComponent as Characters } from "../../assets/characters.svg";

export const Keyboard = (props: IOptionsProps) => {
  const { menuKey, setMenuKey, language, posColours } = props;

  document.body.addEventListener("keydown", (e) => {
    const key = getKey(e);
    key && key.setAttribute("data-pressed", "on");
    key && setMenuKey(parseInt(key.getAttribute("data-character") || ""));
  });

  document.body.addEventListener("keyup", (e) => {
    const key = getKey(e);
    key && key.removeAttribute("data-pressed");
  });

  return (
    <div key={"keyboard"} id={"keyboard"}>
      <Characters height={0} width={0} />
      {buildKeyboard(menuKey, posColours, setMenuKey, language)}
    </div>
  );
};
