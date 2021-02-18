// Imports
import * as React from "react";
import {Keyboard} from "./keyboard";
import {ELanguage, IOptions} from "../types";
import {Output} from "./output";
import {Translation} from "./translation";
import {Search} from "./search";
import {Languages} from "./languages";

// Component
export const App = (): React.ReactElement => {

  const options: IOptions = {
    language: ELanguage.ENGLISH,
    tooltips: true,
    posColours: true,
  }

  return (
    <React.Fragment>
      <Output />
      <Translation />
      <Search />
      <Languages />
      <Keyboard language={options.language} tooltips={options.tooltips} posColours={options.posColours} />
    </React.Fragment>
  );
};
