import {ELanguage, TMenuState} from "../types";
import fuzzysort from 'fuzzysort'
import {translationMap} from "./translations";
import React from "react";
import {IDefinitionKey} from "../types/definitions";

export const onSubmit = (e: any, language: ELanguage, setSearchResults: (x: any) => void, numberOfResults: number) => {
  e.preventDefault();
  const results = fuzzysort.go(e.target.search.value, translationMap, { key: language }).slice(0, numberOfResults);
  const searchResults = results.map((x) => ({ av: x.obj.av, group: x.obj.group, translation: x.obj[language] }));
  setSearchResults(searchResults)
};

export const drawSearchResults = (
  searchResults: any[],
  menu: TMenuState,
  setHoveredKey: (x: IDefinitionKey | undefined) => void,
) => {
  return searchResults.map((x: any, index: number) => {
    const resultClass = `searchResult ${x.group === "word" ? "searchResultWord" : "searchResultCharacter"}`

    return (
      <div
        key={index}
        className={resultClass}
        onMouseEnter={() => setHoveredKey({ ...menu, menuCharacter: x.av })}
        onMouseLeave={() => setHoveredKey(undefined)}
      >
        <svg fill={"#111"} className={"searchSvg"}>
          <use href={`#${x.av.toString()}`} />
        </svg>
      </div>
    )
  });
}
