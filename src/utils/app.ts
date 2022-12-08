export const sizeKeyboard = (): void => {
  const keyboard: HTMLElement | null = document.getElementById('keyboardWrapper');
  if (keyboard) {
    if (keyboard.parentElement?.clientWidth) {
      keyboard.style.fontSize = `${keyboard.parentElement.clientWidth / 55}px`;
    }
  }
};
