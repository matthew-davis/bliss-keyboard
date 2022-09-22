export const sizeKeyboard = () => {
  const keyboard = document.getElementById('keyboard');
  keyboard && (keyboard.style.fontSize = `${keyboard.parentElement!.clientWidth / 55}px`);
};
