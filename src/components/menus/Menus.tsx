import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { TMenuProps } from "../../types";
import { getMenuName } from "../../utils";
import "./menus.css";

export const Menus = (props: TMenuProps): React.ReactElement => {
  const { menuState } = props;

  return (
    <div className={"menuWrapper"}>
      <FontAwesomeIcon className={"menuIcon"} icon={faBars} />
      {getMenuName(menuState)}
    </div>
  );
};
