// Imports
import * as React from "react";
import {Keyboard} from "./keyboard";

export enum ELanguage {
  ENGLISH = "ENGLISH",
  SWEDISH = "SWEDISH",
  NORWEGIAN = "NORWEGIAN",
  FINNISH = "FINNISH",
  HUNGARIAN = "HUNGARIAN",
  GERMAN = "GERMAN",
  DUTCH = "DUTCH",
  AFRIKAANS = "AFRIKAANS",
  RUSSIAN = "RUSSIAN",
  LATVIAN = "LATVIAN",
  POLISH = "POLISH",
  FRENCH = "FRENCH",
  SPANISH = "SPANISH",
}

interface IOptions {
  language: ELanguage,
  tooltips: boolean,
  posColours: boolean,
}

// Component
export const App = (): React.ReactElement => {

  const options: IOptions = {
    language: ELanguage.ENGLISH,
    tooltips: true,
    posColours: true,
  }



  return (
    <React.Fragment>

      <div>Output</div>
      <div>Translation</div>
      <div>Search</div>
      <div>Languages</div>




      <Keyboard language={options.language} tooltips={options.tooltips} posColours={options.posColours} />
    </React.Fragment>
  );
};
