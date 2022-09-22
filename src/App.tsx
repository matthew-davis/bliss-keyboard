import React, {useEffect, useState} from 'react';
import {
  Definitions,
  Keyboard,
  Languages,
  Menu,
  Output,
  Search,
  Translation,
} from './components';
import { ELanguage, IOptions } from "./types";
import { sizeKeyboard } from "./utils";
import './app.css';

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
  const [menuKey, setMenuKey] = useState<number>(1000);
  const [language, setLanguage] = useState<ELanguage>(options.defaultLanguage);

  useEffect(() => sizeKeyboard(), []);
  window.addEventListener('resize', () => sizeKeyboard());

  return (
    <div id={"keyboardWrapper"}>
      <Output />
      {options.translation && <Translation />}
      {options.search && <Search />}
      <div className={"settingsWrapper"}>
        {options.menu && <Menu menuKey={menuKey} />}
        {options.definitions && <Definitions />}
        {options.languages && <Languages />}
      </div>
      <Keyboard
        menuKey={menuKey}
        setMenuKey={setMenuKey}
        language={language}
        posColours={options.posColours}
      />
    </div>
  );
};

export default App;
