import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { TMenuState, TTranslationsProps } from "../../types";
import { getRecordById } from "../../utils";
import './translations.css';

export const Translations = (props: TTranslationsProps): React.ReactElement => {
  const { language, messageState } = props;
  let translation: string = '';

  messageState.map((x: TMenuState, i: number) => {
    const spacer: string = (messageState.length === i + 1) ? "" : " | ";
    const character: string = (x.menuKey === 0) ? " " : getRecordById(x.menuKey)[language];
    translation += `${character}${spacer}`;
  });

  return (
    <div id={"translationsWrapper"}>
      <div className={"translationsText"}>
        <FontAwesomeIcon className={"translationsIcon"} icon={faLanguage} />
        <div className={"translations"}>{translation}</div>
      </div>
      <hr />
    </div>
  );
};
