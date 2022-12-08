import React, { useEffect } from 'react';
import { TKeyboardProps } from '../../types';
import { buildKeyboard, keyDownHandler, keyUpHandler } from '../../utils';
import './keyboard.css';

export const Keyboard = (props: TKeyboardProps): React.ReactElement => {
  const { language, menu, message, posColours, keyCharacters, setHoveredKey } = props;

  useEffect(() => {
    const keyDownHandlerWrapper = (e: KeyboardEvent) => keyDownHandler(e, menu, message);

    document.body.addEventListener('keydown', keyDownHandlerWrapper);
    document.body.addEventListener('keyup', keyUpHandler);
    return () => {
      document.body.removeEventListener('keydown', keyDownHandlerWrapper);
      document.body.removeEventListener('keyup', keyUpHandler);
    };
  }, [menu.menuState]);

  return (
    <div id={'keyboardWrapper'}>
      {buildKeyboard(language, menu, message, posColours, keyCharacters, setHoveredKey)}
    </div>
  );
};
