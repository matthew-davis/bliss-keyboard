import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { ELanguage, TMenuState, TTranslationsProps } from '../../types';
import { getRecordById } from '../../utils';
import './translations.css';

export const Translations = (props: TTranslationsProps): React.ReactElement => {
  const { language, messageState } = props;
  const translation: React.ReactElement[] = [];

  messageState.map((x: TMenuState, i: number) => {
    let character: string = x.menuKey === 0 ? 'space' : getRecordById(x.menuKey)[language];
    if (character === '') character = getRecordById(x.menuKey)[ELanguage.English];

    let definitionSpacer = '';
    let diacritic = '';
    if (x.diacriticKey !== 3333 && x.diacriticKey !== 0) {
      definitionSpacer = ' | ';
      diacritic = getRecordById(x.diacriticKey)[language];
      if (character === '') diacritic = getRecordById(x.diacriticKey)[ELanguage.English];
    }

    const translationsSpacer: string = messageState.length === i + 1 ? ' ' : ' | ';

    translation.push(
      <span key={i}>
        <span>{character}</span>
        <span className={'definitionsSpacer'}>{definitionSpacer}</span>
        <span>{diacritic}</span>
        <span className={'translationsSpacer'}>{translationsSpacer}</span>
      </span>,
    );
  });

  return (
    <div id={'translationsWrapper'}>
      <div className={'translationsText'}>
        <FontAwesomeIcon className={'translationsIcon'} icon={faLanguage} />
        <div className={'translations'}>{translation}</div>
      </div>
      <hr />
    </div>
  );
};
