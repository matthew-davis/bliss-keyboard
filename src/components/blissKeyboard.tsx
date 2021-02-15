// Imports
import * as _ from "lodash";
import * as React from "react";
import {getHomeMenu, getNextMenu, ICharacterMap} from "../utils"

// Component
export const BlissKeyboard = (): React.ReactElement => {

  const [charMap, setCharMap] = React.useState<ICharacterMap>(getHomeMenu());

  const handleClick = (x: any) => setCharMap(getNextMenu(x.target.dataset.id, charMap));

  const keyboard = _.map(charMap.currentMenu, x => {
    return (
      <div key={x} className={"key"}>
        <div className={"key-inner"} onClick={handleClick} data-id={x}>
          {x.toString()}
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className={"keyboard"}>
        {keyboard}
      </div>
    </React.Fragment>
  );
};
