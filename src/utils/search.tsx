import {ELanguage, TMenuState} from "../types";
import fuzzysort from 'fuzzysort'
import {translationMap} from "./translations";
import React from "react";
import {IDefinitionKey} from "../types/definitions";
import {getMenuNameFromCharacter} from "./menus";

export const onSubmit = (e: any, language: ELanguage, setSearchResults: (x: any) => void, numberOfResults: number) => {
  e.preventDefault();
  const results = fuzzysort.go(e.target.search.value, translationMap, { key: language }).slice(0, numberOfResults);
  const searchResults = results.map((x) => ({ av: x.obj.av, group: x.obj.group, translation: x.obj[language] }));
  setSearchResults(searchResults)
};

export const drawSearchResults = (
  search: { searchResults: any[], setSearchResults: (x: any) => void },
  menu: { menuState: TMenuState, setMenuState: (x: TMenuState) => void },
  setHoveredKey: (x: IDefinitionKey | undefined) => void,
  message: { messageState: TMenuState[], setMessageState: (x: TMenuState[]) => void },
) => {
  return search.searchResults.map((x: any, index: number) => {
    const resultClass = `searchResult ${x.group === "word" ? "searchResultWord" : "searchResultCharacter"}`
    const svgClass = `searchSvg ${x.group === "word" ? "searchSvgWord" : "searchSvgCharacter"}`

    const handleClick = () => {
      if (x.group === "word") {
        message.messageState.push({ menuKey: x.av, diacriticKey: 0 });
        message.setMessageState([...message.messageState]);
      }

      if (x.group === "character") {
        menu.setMenuState({ menuKey: getMenuNameFromCharacter(x.av), diacriticKey: x.av });
      }

      setHoveredKey(undefined);
      search.setSearchResults([]);
      (document.getElementById("search")! as HTMLInputElement).value = "";
    }

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
    )
  });
}
