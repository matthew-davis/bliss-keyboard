// Imports
import * as React from "react";
import {Keyboard} from "./keyboard";
import {ELanguage, IOptions} from "../types";
import {Output} from "./output";
import {Translation} from "./translation";
import {Search} from "./search";
import {Languages} from "./languages";
import "../assets/bliss-font/css/characters.css";
// import "../assets/bliss-font/css/deprecated.css";
// import "../assets/bliss-font/css/diacritics.css";
// import "../assets/bliss-font/css/words.css";

// Component
export const App = (): React.ReactElement => {

  const options: IOptions = {
    translation: true,
    search: true,
    languages: true,
    defaultLanguage: ELanguage.ENGLISH,
    displayDefinitions: true,
    posColours: true,
  }

  return (
    <React.Fragment>
      <Output />
      {options.translation && <Translation />}
      {options.search && <Search />}
      {options.languages && <Languages />}
      <Keyboard language={options.defaultLanguage} displayDefinitions={options.displayDefinitions} posColours={options.posColours} />
    </React.Fragment>
  );
};
