// Imports
import * as _ from "lodash";
import * as React from "react";
import {IPassedProps, TMouseEvent, TOnClick} from "../types";
import {getHomeMenu, getNextMenu, getPreviousMenu, getRecordById, getSpecialMenu} from "../utils"

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

  const buildMenu = (menus: number[][], css: string, home: boolean = true): React.ReactElement[] => {

    console.log(props.tooltips);
    console.log(props.language);
    // Build tooltip structure for each character button
    // Once tooltip comes up build search functionality based on language and id => getRecordById(id)[props.language]
    // Display searched tooltip with each character key

    return _.map(menus[menus.length - 1], id => {
      let disabled = "";
      let onClick: TOnClick = () => true;
      let colour = "";

      if (css === "character") {
        colour = " " + getRecordById(id).pos;
        onClick = characterClick;
      } else if (css === "special") {
        if (!home) {disabled = " disabled";}
        onClick = specialClick;
        colour = " BLACK";
      }

      return (
        <div key={`${menus.indexOf(menus[menus.length - 1])}-${id}`} className={`keyboard ${css}-key${disabled}`}>
          <div className={`keyboard ${css}-key-inner`} onClick={onClick} data-id={id}>{id.toString()}</div>
          {props.posColours && <div className={`character-key-pos-colour${colour}`} />}
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className={"keyboard"}>
        <div className={"keyboard character-keyboard"}>
          {buildMenu(characterMap, "character")}
        </div>
        <div className={"keyboard special-keyboard"}>
          {buildMenu(getSpecialMenu(), "special", characterMap.length === 1)}
        </div>
      </div>
    </React.Fragment>
  );
};
