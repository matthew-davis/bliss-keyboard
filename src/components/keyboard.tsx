// Imports
import * as _ from "lodash";
import * as React from "react";
import {getHomeMenu, getNextMenu, getSpecialMenu, ITestMap} from "../utils"
import {ELanguage} from "./app";

// Type
type TMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
type TOnClick = (event: TMouseEvent) => void;

interface IPassedProps {
  language: ELanguage,
  tooltips: boolean,
  posColours: boolean,
}



// Component
export const Keyboard = (props: IPassedProps): React.ReactElement => {

  const [charMap, setCharMap] = React.useState<ITestMap>(getHomeMenu());

  // console.log(charMap);

  const characterClick = (event: TMouseEvent) => {

    console.log(getNextMenu(parseInt(event.currentTarget.dataset.id || "-1"), charMap));

    setCharMap(getNextMenu(parseInt(event.currentTarget.dataset.id || "-1"), charMap));
  };

  const specialClick = (event: TMouseEvent) => {
    console.log(event);
  };

  const buildMenu = (menus: number[][], css: string, onClick: TOnClick): React.ReactElement[] => {

    const result: React.ReactElement[] = [];


    _.map(menus, menu => {
      _.map(menu, id => {
        const highlightKey = "";

        result.push(
          <div key={id} className={`keyboard ${css}-key ${highlightKey}`}>
            <div className={`keyboard ${css}-key-inner`} onClick={onClick} data-id={id}>
              {id.toString()}
            </div>
          </div>
        );
      });
    });

    return result;
  };

  return (
    <React.Fragment>
      <div className={"keyboard"}>
        <div className={"keyboard character-keyboard"}>
          {buildMenu(charMap.menus, "character", characterClick)}
        </div>
        <div className={"keyboard special-keyboard"}>
          {buildMenu([getSpecialMenu()], "special", specialClick)}
        </div>
      </div>
    </React.Fragment>
  );
};
