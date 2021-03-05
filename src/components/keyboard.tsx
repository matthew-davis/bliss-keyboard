// Imports
import * as React from "react";
import {IPassedProps, TMouseEvent, TOnClick} from "../types";
import {getHomeMenu, getNextMenu, getPreviousMenu, getRecordById, getSpecialMenu} from "../utils"

// Component
export const Keyboard = (props: IPassedProps): React.ReactElement => {

  const [characterMap, setCharacterMap] = React.useState<number[][]>(getHomeMenu());
  const [definition, setDefinition] = React.useState<string>("");

  const characterDefinition = (text: string): void => setDefinition(text.replace(/,/g, ", "));

  const characterClick = (event: TMouseEvent) => {
    setCharacterMap(getNextMenu(parseInt(event.currentTarget.dataset.id || "-1"), characterMap));
  };

  const navigateClick = () => setCharacterMap(getPreviousMenu(characterMap));

  const buildMenu = (menus: number[][], css: string, home: boolean = true): React.ReactElement[] => {
    return menus[menus.length - 1].map(id => {
      let disabled = "";
      let getDefinition = "";
      let onClick: TOnClick = () => true;
      let colour = "";

      if (id === -1) {return <p key={1}>Character Indicator Keys Go Here!</p>;}

      if (getRecordById(id)) {
        getDefinition = getRecordById(id)[props.language];
        colour = " " + getRecordById(id).pos;
      }

      if (css === "character") {
        onClick = characterClick;
      } else if (css === "special") {
        if (!home && id === 2001) {
          onClick = navigateClick;
          disabled = " navigateUp";
        }
      }

      return (
        <div
          key={`${menus.indexOf(menus[menus.length - 1])}-${id}`}
          className={`keyboard ${css}-key${disabled}`}
          onMouseOver={() => characterDefinition(getDefinition)}
          onMouseOut={() => setDefinition("")}
        >
          <div className={`keyboard ${css}-key-inner`} onClick={onClick} data-id={id}>{id.toString()}</div>
          {props.posColours && <div className={`character-key-pos-colour${colour}`}/>}
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      {props.displayDefinitions && <div className={"character-definitions"}>&nbsp;{definition}&nbsp;</div>}
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
