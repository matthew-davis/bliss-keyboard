import { TMenuState } from './menus';
import { ELanguage } from './languages';

export type TTranslationsProps = {
  language: ELanguage;
  messageState: TMenuState[];
};

export interface IConversion {
  av: number;
  group: string;
  pos: string;
  derivationExplanation: string;
  english: string;
  swedish: string;
  norwegian: string;
  finnish: string;
  hungarian: string;
  german: string;
  dutch: string;
  afrikaans: string;
  russian: string;
  latvian: string;
  polish: string;
  french: string;
  spanish: string;
}
