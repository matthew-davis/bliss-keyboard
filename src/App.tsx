import React, { useEffect, useState } from "react";
import {
  Definitions,
  Keyboard,
  Languages,
  Menus,
  Output,
  Search,
  Translations,
} from "./components";
import { ELanguage, IOptions } from "./types";
import { sizeKeyboard } from "./utils";
import "./app.css";

const options: IOptions = {
  translation: true,
  search: true,
  menu: true,
  definitions: true,
  languages: true,
  defaultLanguage: ELanguage.English,
  posColours: true,
}

const App = () => {
  const [menuState, setMenuState] = useState<any>({ menuKey: 1000, diacriticKey: 0 });
  const [language, setLanguage] = useState<ELanguage>(options.defaultLanguage);

  useEffect(() => sizeKeyboard(), []);
  window.addEventListener('resize', () => sizeKeyboard());

  return (
    <div id={"keyboardWrapper"}>
      <Output />
      {options.translation && <Translations />}
      {options.search && <Search />}
      <div className={"settingsWrapper"}>
        {options.menu && <Menus menuState={{ menuKey: 1000, diacriticKey: 0 }} />}
        {options.definitions && <Definitions />}
        {options.languages && <Languages />}
      </div>
      <Keyboard
        menuState={menuState}
        setMenuState={setMenuState}
        language={language}
        posColours={options.posColours}
      />
    </div>
  );
};

export default App;
