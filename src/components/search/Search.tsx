import * as React from "react";
import './search.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {onSubmit} from "../../utils/search";

export const Search = (): React.ReactElement => {


  return (
    <div id={"searchWrapper"}>
      <div className={"searchFunctionsWrapper"}>
        <form className={"searchInput"} onSubmit={onSubmit}>
          <input id={"search"} type={"search"} placeholder={"Search..."} name={"search"} />
          <button type="submit"><FontAwesomeIcon className={"searchIcon"} icon={faMagnifyingGlass} /></button>
        </form>
        <div className={"searchOutput"}>Search Output</div>
      </div>
      <hr />
    </div>
  );
};
