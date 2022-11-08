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
import { ReactComponent as Words } from "./assets/words.svg";
import {IDefinitionKey} from "./types/definitions";

const options: TOptions = {
  translation: true,
  search: true,
  menu: true,
  definitions: true,
  languages: true,
  defaultLanguage: ELanguage.English,
  posColours: true,
  keyCharacters: true,
}

const App = () => {
  const [languageState, setLanguageState] = useState<ELanguage>(options.defaultLanguage);
  const [menuState, setMenuState] = useState<TMenuState>({ menuKey: 1000, diacriticKey: 0 });
  const [messageState, setMessageState] = useState<TMenuState[]>([]);
  const [hoveredKey, setHoveredKey] = useState<IDefinitionKey | undefined>(undefined);

  useEffect(() => sizeKeyboard(), []);
  window.addEventListener('resize', () => sizeKeyboard());

  return (
    <div id={"appWrapper"}>
      <Characters height={0} width={0} />
      <Words height={0} width={0} />
      <Output messageState={messageState} />
      {options.translation && <Translations language={languageState} messageState={messageState} />}
      {options.search && <Search language={languageState} />}
      <div className={"settingsWrapper"}>
        {options.menu && <Menus menuState={menuState} language={languageState} />}
        {options.definitions && <Definitions language={languageState} hoveredKey={hoveredKey} />}
        {options.languages && <Languages language={{languageState, setLanguageState}} />}
      </div>
      <Keyboard
        language={languageState}
        menu={{menuState, setMenuState}}
        message={{messageState, setMessageState}}
        posColours={options.posColours}
        keyCharacters={options.keyCharacters}
        setHoveredKey={setHoveredKey}
      />
    </div>
  );
};

export default App;
