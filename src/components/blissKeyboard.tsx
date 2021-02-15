// Imports
import * as React from "react";
import {getNextMenu} from "../utils"

// Component
export const BlissKeyboard = (): React.ReactElement => {

  const testId = 15214;
  const testCharMap = {
    id: 15214,
    parentMenuId: -1,
    parentMenu: [],
    currentMenuId: 1000,
    currentMenu: [15214, 15474, 15991, 24883, 15666, 14417, 15975, 13403, 15471, 13867, 14164, 8485, 12366, 13089],
    indicatorMenu: false,
  };

  console.log(getNextMenu(testId, testCharMap));


  return (
    <React.Fragment>
      <div>
        Hello
      </div>
    </React.Fragment>
  );
};
