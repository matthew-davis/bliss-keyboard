import React from 'react';
import fuzzysort from 'fuzzysort';
import { getMenuNameFromCharacter } from './menus';
import { translationMap } from './translations';
import { ELanguage, IDefinitionKey, TMenuState, TSearchResults } from '../types';

export const onSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  language: ELanguage,
  setSearchResults: (x: TSearchResults[]) => void,
  numberOfResults: number,
): void => {
  e.preventDefault();
  const form = e.currentTarget;
  const formElements = form.elements as typeof form.elements & {
    search: HTMLInputElement;
  };
  const results = fuzzysort
    .go(formElements.search.value, translationMap, { key: language })
    .slice(0, numberOfResults);
  const searchResults = results.map((x) => ({
    av: x.obj.av,
    group: x.obj.group,
    translation: x.obj[language],
  }));
  setSearchResults(searchResults);
};

export const drawSearchResults = (
  search: { searchResults: TSearchResults[]; setSearchResults: (x: TSearchResults[]) => void },
  menu: { menuState: TMenuState; setMenuState: (x: TMenuState) => void },
  setHoveredKey: (x: IDefinitionKey | undefined) => void,
  message: { messageState: TMenuState[]; setMessageState: (x: TMenuState[]) => void },
): JSX.Element[] => {
  return search.searchResults.map((x: TSearchResults, index: number) => {
    const resultClass = `searchResult ${
      x.group === 'word' ? 'searchResultWord' : 'searchResultCharacter'
    }`;
    const svgClass = `searchSvg ${x.group === 'word' ? 'searchSvgWord' : 'searchSvgCharacter'}`;

    const handleClick = () => {
      if (x.group === 'word') {
        message.messageState.push({ menuKey: x.av, diacriticKey: 0 });
        message.setMessageState([...message.messageState]);
      }

      if (x.group === 'character') {
        menu.setMenuState({
          menuKey: getMenuNameFromCharacter(x.av),
          diacriticKey: x.av,
          group: x.group,
        });
      }

      setHoveredKey(undefined);
      search.setSearchResults([]);
      (document.getElementById('search') as HTMLInputElement).value = '';
    };

    return (
      <div
        key={index}
        className={resultClass}
        onMouseEnter={() => setHoveredKey({ ...menu.menuState, menuCharacter: x.av })}
        onMouseLeave={() => setHoveredKey(undefined)}
        onClick={handleClick}
      >
        <svg className={svgClass}>
          <use href={`#${x.av.toString()}`} />
        </svg>
      </div>
    );
  });
};
