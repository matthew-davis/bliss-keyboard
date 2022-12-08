import { ELanguage } from './languages';

export type TMenuProps = {
  menuState: TMenuState;
  language: ELanguage;
};

export type TMenuState = {
  menuKey: number;
  diacriticKey: number;
  group?: string;
};

export type TMenuName = {
  [key: number]: { [key: string]: string };
};
