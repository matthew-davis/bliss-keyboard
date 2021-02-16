// Imports
import * as _ from "lodash";
import * as React from "react";
import {getHomeMenu, getNavigationMenu, getNextMenu, ICharacterMap} from "../utils"

// Component
export const BlissKeyboard = (): React.ReactElement => {

  const [charMap, setCharMap] = React.useState<ICharacterMap>(getHomeMenu());
  const [navigationMap, setNaigationMap] = React.useState(getNavigationMenu());



  const handleClick = (x: any) => setCharMap(getNextMenu(x.target.dataset.id, charMap));


  const navigationKeyboard = (
    <div key={3001} className={"navigation-key"}>
      <div className={"navigation-key-inner"} data-id={3001}>
        {"3001"}
      </div>
    </div>
  );



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
      <div className={"keyboards"}>

        <div className={"navigation-keyboard"}>
          {navigationKeyboard}
        </div>

        <div className={"keyboard"}>
          {keyboard}
        </div>

      </div>
    </React.Fragment>
  );
};
