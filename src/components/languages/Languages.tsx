import * as React from 'react';
import { ReactComponent as English } from '../../assets/gb.svg';
import { ReactComponent as Swedish } from '../../assets/se.svg';
import { ReactComponent as Norwegian } from '../../assets/no.svg';
import { ReactComponent as Finnish } from '../../assets/fi.svg';
import { ReactComponent as Hungarian } from '../../assets/hu.svg';
import { ReactComponent as German } from '../../assets/de.svg';
import { ReactComponent as Dutch } from '../../assets/nl.svg';
import { ReactComponent as Afrikaans } from '../../assets/za.svg';
import { ReactComponent as Russian } from '../../assets/ru.svg';
import { ReactComponent as Latvian } from '../../assets/lv.svg';
import { ReactComponent as Polish } from '../../assets/pl.svg';
import { ReactComponent as French } from '../../assets/fr.svg';
import { ReactComponent as Spanish } from '../../assets/es.svg';
import { ELanguage, TLanguagesProps } from '../../types';
import { languageNames } from '../../utils';
import './languages.css';

const flagComponents: { language: ELanguage; Flag: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  { language: ELanguage.English, Flag: English },
  { language: ELanguage.Swedish, Flag: Swedish },
  { language: ELanguage.Norwegian, Flag: Norwegian },
  { language: ELanguage.Finnish, Flag: Finnish },
  { language: ELanguage.Hungarian, Flag: Hungarian },
  { language: ELanguage.German, Flag: German },
  { language: ELanguage.Dutch, Flag: Dutch },
  { language: ELanguage.Afrikaans, Flag: Afrikaans },
  { language: ELanguage.Russian, Flag: Russian },
  { language: ELanguage.Latvian, Flag: Latvian },
  { language: ELanguage.Polish, Flag: Polish },
  { language: ELanguage.French, Flag: French },
  { language: ELanguage.Spanish, Flag: Spanish },
];

export const Languages = (props: TLanguagesProps): React.ReactElement => {
  const { language } = props;

  return (
    <div id={'languagesWrapper'}>
      {flagComponents.map(({ language: flagLanguage, Flag }) => (
        <div
          key={flagLanguage}
          id={flagLanguage}
          tabIndex={-1}
          title={languageNames[flagLanguage][language.languageState]}
          className={`flags ${language.languageState === flagLanguage && 'active'}`}
          onClick={(event) => {
            event.preventDefault();
            document.getElementById(flagLanguage)?.focus();
          }}
        >
          <Flag height={'100%'} onClick={() => language.setLanguageState(flagLanguage)} />
        </div>
      ))}
    </div>
  );
};
