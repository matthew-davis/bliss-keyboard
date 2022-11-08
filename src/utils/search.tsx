import {ELanguage, TMenuState} from "../types";
import fuzzysort from 'fuzzysort'
import {translationMap} from "./translations";
import React from "react";

const NUMBER_OF_SEARCH_RESULTS = 5;

export const onSubmit = (e: any, language: ELanguage, setSearchResults: (x: any) => void) => {
  e.preventDefault();
  const results = fuzzysort.go(e.target.search.value, translationMap, { key: language }).slice(0, NUMBER_OF_SEARCH_RESULTS);
  const searchResults = results.map((x) => ({ av: x.obj.av, group: x.obj.group, translation: x.obj[language] }));
  setSearchResults(searchResults)
};

export const drawSearchResults = (searchResults: any[]) => {
  return searchResults.map((x: any, index: number) => (
    <div>
      <svg key={index} fill={"#111"} width={"1em"} height={"2em"}>
        <use href={`#${x.av.toString()}`} />
      </svg>
      <div><span>{x.group}</span>{` - ${x.translation}`}</div>
    </div>
  ));
}
