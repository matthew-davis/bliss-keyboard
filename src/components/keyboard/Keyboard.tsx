import React, { useEffect } from "react";
import { IOptionsProps } from "../../types";
import "./keyboard.css";
import { buildKeyboard, keyDownHandler, keyUpHandler } from "../../utils";
import { ReactComponent as Characters } from "../../assets/characters.svg";

export const Keyboard = (props: IOptionsProps) => {
  const { menuState, setMenuState, language, posColours } = props;

  useEffect(() => {
    const keyDownHandlerWrapper = (e: KeyboardEvent) => keyDownHandler(e, menuState, setMenuState);

    document.body.addEventListener('keydown', keyDownHandlerWrapper);
    document.body.addEventListener('keyup', keyUpHandler);
    return () => {
      document.body.removeEventListener('keydown', keyDownHandlerWrapper);
      document.body.removeEventListener('keyup', keyUpHandler);
    };
  }, [menuState]);

  return (
    <div key={"keyboard"} id={"keyboard"}>
      <Characters height={0} width={0} />
      {buildKeyboard(menuState, posColours, setMenuState, language)}
    </div>
  );
};
