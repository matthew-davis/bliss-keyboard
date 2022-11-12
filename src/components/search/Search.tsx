import * as React from "react";
import './search.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {drawSearchResults, onSubmit} from "../../utils/search";
import {TSearchProps} from "../../types/search";
import {useState} from "react";

export const Search = (props: TSearchProps): React.ReactElement => {
  const { language, numberOfResults, menu, setHoveredKey, message } = props;
  const [searchResults, setSearchResults] = useState<any[]>([]);

  return (
    <div id={"searchWrapper"}>
      <div className={"searchFunctionsWrapper"}>
        <form id={"searchForm"} className={"searchInput"} onSubmit={(event: any) => onSubmit(event, language, setSearchResults, numberOfResults)}>
          <input id={"search"} type={"search"} placeholder={"Search..."} name={"search"} />
          <button type="submit"><FontAwesomeIcon className={"searchIcon"} icon={faMagnifyingGlass} /></button>
        </form>
        <div className={"searchOutput"}>
          {drawSearchResults({ searchResults, setSearchResults }, menu, setHoveredKey, message)}
        </div>
      </div>
      <hr />
    </div>
  );
};
