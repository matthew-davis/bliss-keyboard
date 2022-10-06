export const sizeKeyboard = (): void => {
  const keyboard: HTMLElement = document.getElementById('keyboardWrapper')!;
  keyboard && (keyboard.style.fontSize = `${keyboard.parentElement!.clientWidth / 55}px`);
};
