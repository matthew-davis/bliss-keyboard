// Imports
import * as _ from "lodash";
import * as React from "react";
import {ICharacterMap, IPassedProps, TMouseEvent, TOnClick} from "../types";
import {getHomeMenu, getNextMenu, getSpecialMenu} from "../utils"

// Component
export const Keyboard = (props: IPassedProps): React.ReactElement => {

  const [charMap, setCharMap] = React.useState<ICharacterMap>(getHomeMenu());

  console.log(charMap);


  const characterClick = (event: TMouseEvent) => {
    setCharMap(getNextMenu(parseInt(event.currentTarget.dataset.id || "-1"), charMap));
  };

  const specialClick = (event: TMouseEvent) => {
    console.log(event);
  };

  const isSimpleMenu = (menu: number[] | number[][]) => !(menu[0] as number[])[0];

  const buildMenu = (iteration: number, menus: number[][], css: string, onClick: TOnClick): React.ReactElement[] => {
    let tempResult: React.ReactElement[] = [];

    for (let i = 0; i < menus.length; i++) {

      let colour = "";

      if (i === 1 - menus.length) {
        colour = "red";
      }


      tempResult = tempResult.concat(_.map(menus[i], id => {
        return (
          <div key={`${iteration}-${i}-${id}`} className={`keyboard ${css}-key ${colour}`}>
            <div className={`keyboard ${css}-key-inner`} onClick={onClick} data-id={id}>
              {id.toString()}
            </div>
          </div>
        );
      }));
    }

    return tempResult;
  }

  const buildAllMenus = (menu: number[] | number[][], css: string, onClick: TOnClick): React.ReactElement[] => {
    let menus: number[][] = [];
    let finalResult: React.ReactElement[] = [];

    isSimpleMenu(menu) ? menus.push(menu as number[]) : menus = menu as number[][];

    for (let i = 0; i < menus.length; i++) finalResult = finalResult.concat(buildMenu(i, menus, css, onClick));

    return finalResult;
  };

  return (
    <React.Fragment>
      <div className={"keyboard"}>
        <div className={"keyboard character-keyboard"}>
          {buildAllMenus(charMap.menus, "character", characterClick)}
        </div>
        <div className={"keyboard special-keyboard"}>
          {buildAllMenus(getSpecialMenu(), "special", specialClick)}
        </div>
      </div>
    </React.Fragment>
  );
};
