import { TMenuState } from './menus';
import { ELanguage } from './languages';

export type TMessageState = TMenuState[];

export type TOutputProps = {
  messageState: TMessageState;
  setMessageState: (x: TMessageState) => void;
  language: ELanguage;
};
