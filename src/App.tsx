import React, { useEffect } from 'react';
import Keyboard from './components/Keyboard/Keyboard';

const sizeKeyboard = () => {
  const keyboard = document.getElementById('keyboard');
  keyboard && (keyboard.style.fontSize = `${keyboard.parentElement!.clientWidth / 55}px`);
};

const App = () => {
  useEffect(() => sizeKeyboard(), []);

  window.addEventListener('resize', function (e) {
    sizeKeyboard();
  });

  return <Keyboard />;
};

export default App;
