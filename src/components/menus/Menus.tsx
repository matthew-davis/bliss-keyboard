import * as React from "react";
import { TMenuProps } from "../../types";
import "./menus.css";

export const Menus = (props: TMenuProps): React.ReactElement => {
  const { menuKey } = props;
  let menu: string;

  switch (menuKey) {
    case 1000:
      menu = "Home Menu";
      break;
    case 2000:
      menu = "Diacritic Menu";
      break;
    default:
      menu = "Sub-Menu"
  }

  return (
    <div className={"menu"}>{menu}</div>
  );
};