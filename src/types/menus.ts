export type TMenuProps = {
  menuState: TMenuState;
}

export type TMenuState = {
  menuKey: number;
  diacriticKey: number;
}

export type TMenuName = {
  [key: number]: string;
}
