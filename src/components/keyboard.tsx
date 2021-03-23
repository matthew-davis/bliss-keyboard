// Imports
import * as React from "react";
import {IPassedProps, TMouseEvent, TOnClick} from "../types";
import {getHomeMenu, getIndicatorMenu, getNextMenu, getPreviousMenu, getRecordById, getSpecialMenu} from "../utils"

// Component
export const Keyboard = (props: IPassedProps): React.ReactElement => {

  const [characterMap, setCharacterMap] = React.useState<number[][]>(getHomeMenu());
  const [definition, setDefinition] = React.useState<string>("");

  const characterDefinition = (text: string): void => {
    const def1 = text.replace(/,/g, ", ");
    const def2 = def1.replace(/_/g, " ");
    const def3 = def2.replace(/\b\w/g, l => l.toUpperCase());

    setDefinition(def3);
  };

  const characterClick = (event: TMouseEvent) => {
    setCharacterMap(getNextMenu(parseInt(event.currentTarget.dataset.id || "-1"), characterMap));
  };

  const navigateClick = () => setCharacterMap(getPreviousMenu(characterMap));

  const outputClick = () => console.log("Output Click");

  const buildMenu = (menus: number[][], css: string, home: boolean = true): any[] => {
    return menus[menus.length - 1].map(id => {
      let getDefinition = "Can't find a definition";
      let onClick: TOnClick = characterClick;
      let colour = "no-colour";
      let keySymbol: React.ReactElement = <svg className="bs-icon"><use href={`#${css}_${id.toString()}`} /></svg>;
      let dataId = id;
      const indicators = getIndicatorMenu()[0];
      const key = `${menus.indexOf(menus[menus.length - 1])}-${id}`;
      let className = `keyboard ${css}-key`;
      const onMouseOver = () => characterDefinition(getDefinition);
      const onMouseOut = () => setDefinition("");

      if (getRecordById(id)) {
        getDefinition = getRecordById(id)[props.language];
        colour = " " + getRecordById(id).pos
      }

      if (indicators.indexOf(id) > -1) {
        const charId = characterMap[characterMap.length - 2][0];
        dataId = charId;
        onClick = outputClick;
        keySymbol = (
          <React.Fragment>
            <svg className="bs-icon">
              <use href={`#${css}_${id.toString()}`} />
              <use href={`#${css}_${charId.toString()}`} />
            </svg>
          </React.Fragment>
        );
      }

      if (css === "special" && id === 2001) {
        onClick = () => true;
        if (!home) {
          onClick = navigateClick;
          className += " navigate-up";
          keySymbol = <svg className="bs-icon"><use href={`#${css}_${(id + characterMap.length - 1).toString()}`} /></svg>;
        }
      }

      return (
        <div key={key} className={className} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <div className={`keyboard ${css}-key-inner`} onClick={onClick} data-id={dataId}>{dataId}{keySymbol}</div>
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
