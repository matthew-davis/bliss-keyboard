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
import { ELanguage, TMenuState, TOptions } from "./types";
import { sizeKeyboard } from "./utils";
import "./app.css";
import { ReactComponent as Characters } from "./assets/characters.svg";

const options: TOptions = {
  translation: true,
  search: true,
  menu: true,
  definitions: true,
  languages: true,
  defaultLanguage: ELanguage.English,
  posColours: true,
}

const App = () => {
  const [language, setLanguage] = useState<ELanguage>(options.defaultLanguage);
  const [menuState, setMenuState] = useState<TMenuState>({ menuKey: 1000, diacriticKey: 0 });
  const [messageState, setMessageState] = useState<TMenuState[]>([]);

  useEffect(() => sizeKeyboard(), []);
  window.addEventListener('resize', () => sizeKeyboard());

  return (
    <div id={"appWrapper"}>
      <Characters height={0} width={0} />
      <Output messageState={messageState} />
      {options.translation && <Translations language={language} messageState={messageState} />}
      {options.search && <Search />}
      <div className={"settingsWrapper"}>
        {options.menu && <Menus menuState={menuState} />}
        {options.definitions && <Definitions />}
        {options.languages && <Languages />}
      </div>
      <Keyboard
        language={language}
        menu={{menuState, setMenuState}}
        message={{messageState, setMessageState}}
        posColours={options.posColours}
      />
    </div>
  );
};

export default App;
