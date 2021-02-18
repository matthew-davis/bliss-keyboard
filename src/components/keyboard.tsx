// Imports
import * as _ from "lodash";
import * as React from "react";
import {ICharacterMap, IPassedProps, TMouseEvent, TOnClick} from "../types";
import {getHomeMenu, getNextMenu, getSpecialMenu} from "../utils"

// Component
export const Keyboard = (props: IPassedProps): React.ReactElement => {

  const [charMap, setCharMap] = React.useState<ICharacterMap>(getHomeMenu());

  const characterClick = (event: TMouseEvent) => {
    setCharMap(getNextMenu(parseInt(event.currentTarget.dataset.id || "-1"), charMap));
  };

  const specialClick = (event: TMouseEvent) => {
    console.log(event);
  };

  const isSimpleMenu = (menu: number[] | number[][]) => !(menu[0] as number[])[0];

  const buildMenu = (menu: number[] | number[][], css: string, onClick: TOnClick): React.ReactElement[] => {
    const result: React.ReactElement[] = [];

    if (isSimpleMenu(menu)) {
      _.map(menu, id => {
        result.push(
          <div key={id as unknown as number} className={`keyboard ${css}-key`}>
            <div className={`keyboard ${css}-key-inner`} onClick={onClick} data-id={id}>
              {id.toString()}
            </div>
          </div>
        );
      });
    } else {

      // Need to build the function for building multiple components
      // Alternatively I take the map function above and refactor it to take single menus
      // then this if statement can just divy up the menus and submit them to the map function

      console.log("is not simple menu")
    }

    return result;
  };

  return (
    <React.Fragment>
      <div className={"keyboard"}>
        <div className={"keyboard character-keyboard"}>
          {buildMenu(charMap.menus, "character", characterClick)}
        </div>
        <div className={"keyboard special-keyboard"}>
          {buildMenu(getSpecialMenu(), "special", specialClick)}
        </div>
      </div>
    </React.Fragment>
  );
};
