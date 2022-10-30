import * as React from "react";
import "./definitions.css";
import {TDefinitionsProps} from "../../types/definitions";
import {getMenuName, getRecordById} from "../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faLanguage} from "@fortawesome/free-solid-svg-icons";
import {ELanguage} from "../../types";

export const Definitions = (props: TDefinitionsProps): React.ReactElement => {
  const { language, hoveredKey } = props;
  let definition: React.ReactElement = (<></>);

  if (hoveredKey && hoveredKey.menuCharacter) {
    let character: string = "";
    let spacer: string = "";
    let diacritic: string = "";

    if (hoveredKey.menuKey === 1000 && hoveredKey.diacriticKey === 0) {
      character = getMenuName({ menuKey: hoveredKey.menuCharacter, diacriticKey: hoveredKey.diacriticKey }, language);
    }

    if (hoveredKey.menuKey > 1000 && hoveredKey.diacriticKey === 0) {
      character = getRecordById(hoveredKey.menuCharacter)[language];
      if (character === "") {
        character = getRecordById(hoveredKey.menuCharacter)[ELanguage.English];
      }
    }

    if (hoveredKey.menuKey > 1000 && hoveredKey.diacriticKey > 0) {
      character = getRecordById(hoveredKey.diacriticKey)[language];
      if (character === "") {
        character = getRecordById(hoveredKey.diacriticKey)[ELanguage.English];
      }
      if (hoveredKey.menuCharacter !== 3333) {
        spacer = " | ";
        diacritic = getRecordById(hoveredKey.menuCharacter)[language];
        if (character === "") {
          diacritic = getRecordById(hoveredKey.menuCharacter)[ELanguage.English];
        }
      }
    }

    definition = (
      <>
        <span>{character}</span>
        <span className={"definitionsSpacer"}>{spacer}</span>
        <span>{diacritic}</span>
      </>
    );
  }

  return (
    <div id={"definitionsWrapper"}>
      <div className={"definitionsText"}>
        <FontAwesomeIcon className={"definitionsIcon"} icon={faComment} />
        <div className={"definitions"}>{definition}</div>
      </div>
    </div>
  );
};
