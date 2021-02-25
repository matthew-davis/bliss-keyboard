// Imports
import * as _ from "lodash";
import * as React from "react";
import {IPassedProps, TMouseEvent, TOnClick} from "../types";
import {getHomeMenu, getNextMenu, getPreviousMenu, getSpecialMenu} from "../utils"

// Component
export const Keyboard = (props: IPassedProps): React.ReactElement => {

  const [characterMap, setCharacterMap] = React.useState<number[][]>(getHomeMenu());

  const characterClick = (event: TMouseEvent) => {
    setCharacterMap(getNextMenu(parseInt(event.currentTarget.dataset.id || "-1"), characterMap));
  };

  const specialClick = (event: TMouseEvent) => {
    if (parseInt(event.currentTarget.dataset.id || "-1") === 2001) {
      setCharacterMap(getPreviousMenu(parseInt(event.currentTarget.dataset.id || "-1"), characterMap));
    } else {
      console.log("Didn't hit 2001");
    }
  };

  const buildMenu = (menus: number[][], css: string, onClick: TOnClick, home: boolean = true): React.ReactElement[] => {


    // I'm updating the menus, but the screen isn't reacting to the change so I need to chase the values all the way through the motions
    // Best guess right now is that it has something to do with the array memory address not changing so something is cached
    // or perhaps not done.

    console.log(menus);

    return _.map(menus[menus.length - 1], id => {
      let disabled = "";
      if (!home && id === 2001) {disabled = " disabled"}

      return (
        <div key={`${menus.indexOf(menus[menus.length - 1])}-${id}`} className={`keyboard ${css}-key${disabled}`}>
          <div className={`keyboard ${css}-key-inner`} onClick={onClick} data-id={id}>
            {id.toString()}
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className={"keyboard"}>
        <div className={"keyboard character-keyboard"}>
          {buildMenu(characterMap, "character", characterClick)}
        </div>
        <div className={"keyboard special-keyboard"}>
          {buildMenu(getSpecialMenu(), "special", specialClick, characterMap.length === 1)}
        </div>
      </div>
    </React.Fragment>
  );
};
