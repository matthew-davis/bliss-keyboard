// Imports
import * as _ from "lodash";
import * as React from "react";
import {getHomeMenu, getNavigationMenu, getNextMenu, getSpecialMenu, ICharacterMap} from "../utils"

// Type
type TOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

// Component
export const MainKeyboard = (): React.ReactElement => {

  const [charMap, setCharMap] = React.useState<ICharacterMap>(getHomeMenu());

  const characterClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCharMap(getNextMenu(parseInt(event.currentTarget.dataset.id || "-1"), charMap));
  };

  const navigationClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCharMap(getNextMenu(parseInt(event.currentTarget.dataset.menu || "-1"), charMap))
  };

  const specialClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event);
  };

  const buildMenu = (menu: number[], css: string, onClick: TOnClick): React.ReactElement[] => {
    return _.map(menu, x => {
      let navigationActive = "";

      (x === 3001 && charMap.parentMenuId === -1) ? navigationActive = "navigation-active" : null;
      (x === 3002 && charMap.parentMenuId === 1000) ? navigationActive = "navigation-active" : null;
      (x === 3003 && charMap.parentMenuId !== -1 && charMap.parentMenuId !== 1000 && !charMap.indicatorMenu) ? navigationActive = "navigation-active" : null;
      (x === 3004 && charMap.indicatorMenu) ? navigationActive = "navigation-active" : null;

      return (
        <div key={x} className={`${css}-key`}>
          <div className={`${css}-key-inner ${navigationActive}`} onClick={onClick} data-id={x} data-menu={charMap.parentMenuId}>
            {x.toString()}
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className={"main-keyboard"}>
        <div className={"navigation-keyboard"}>
          {buildMenu(getNavigationMenu(), "navigation", navigationClick)}
        </div>
        <div className={"character-keyboard"}>
          {buildMenu(charMap.currentMenu, "character", characterClick)}
        </div>
        <div className={"special-keyboard"}>
          {buildMenu(getSpecialMenu(), "special", specialClick)}
        </div>
      </div>
    </React.Fragment>
  );
};
