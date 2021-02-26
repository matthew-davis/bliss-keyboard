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

    // Can probably get away with just passing in the type fo menu and then most items can be pulled within this function
    // such as home, onclick and css string (although you could use that as the deciding factor)

    console.log(props.posColours);
    // build the actual structure that will get coloured
    // add in the css to add the colours
    // toggle calling the css with the prop

    console.log(props.tooltips);
    console.log(props.language);
    // Build tooltips for each character button
    // Once tooltip comes up build search functionality based on language and id
    // Display searched tooltip with each character key

    return _.map(menus[menus.length - 1], id => {
      let disabled = "";
      if (id === 2001) {!home ? disabled = " disabled" : onClick = () => true}

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
