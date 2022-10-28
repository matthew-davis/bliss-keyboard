import * as React from "react";
import {ReactComponent as English} from "../../assets/gb.svg";
import {ReactComponent as Swedish} from "../../assets/se.svg";
import {ReactComponent as Norwegian} from "../../assets/no.svg";
import {ReactComponent as Finnish} from "../../assets/fi.svg";
import {ReactComponent as Hungarian} from "../../assets/hu.svg";
import {ReactComponent as German} from "../../assets/de.svg";
import {ReactComponent as Dutch} from "../../assets/nl.svg";
import {ReactComponent as Afrikaans} from "../../assets/za.svg";
import {ReactComponent as Russian} from "../../assets/ru.svg";
import {ReactComponent as Latvian} from "../../assets/lv.svg";
import {ReactComponent as Polish} from "../../assets/pl.svg";
import {ReactComponent as French} from "../../assets/fr.svg";
import {ReactComponent as Spanish} from "../../assets/es.svg";
import {ELanguage, TLanguagesProps} from "../../types";
import "./languages.css";

export const Languages = (props: TLanguagesProps): React.ReactElement => {
  const { language } = props;

  return (
    <div className={"languagesWrapper"}>
      <a className={`flags ${language.languageState === ELanguage.English && "active"}`} href={"#0"}>
        <English height={"100%"} onClick={() => language.setLanguageState(ELanguage.English)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Swedish && "active"}`} href={"#0"}>
        <Swedish height={"100%"} onClick={() => language.setLanguageState(ELanguage.Swedish)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Norwegian && "active"}`} href={"#0"}>
        <Norwegian height={"100%"} onClick={() => language.setLanguageState(ELanguage.Norwegian)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Finnish && "active"}`} href={"#0"}>
        <Finnish height={"100%"} onClick={() => language.setLanguageState(ELanguage.Finnish)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Hungarian && "active"}`} href={"#0"}>
        <Hungarian height={"100%"} onClick={() => language.setLanguageState(ELanguage.Hungarian)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.German && "active"}`} href={"#0"}>
        <German height={"100%"} onClick={() => language.setLanguageState(ELanguage.German)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Dutch && "active"}`} href={"#0"}>
        <Dutch height={"100%"} onClick={() => language.setLanguageState(ELanguage.Dutch)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Afrikaans && "active"}`} href={"#0"}>
        <Afrikaans height={"100%"} onClick={() => language.setLanguageState(ELanguage.Afrikaans)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Russian && "active"}`} href={"#0"}>
        <Russian height={"100%"} onClick={() => language.setLanguageState(ELanguage.Russian)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Latvian && "active"}`} href={"#0"}>
        <Latvian height={"100%"} onClick={() => language.setLanguageState(ELanguage.Latvian)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Polish && "active"}`} href={"#0"}>
        <Polish height={"100%"} onClick={() => language.setLanguageState(ELanguage.Polish)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.French && "active"}`} href={"#0"}>
        <French height={"100%"} onClick={() => language.setLanguageState(ELanguage.French)} />
      </a>
      <a className={`flags ${language.languageState === ELanguage.Spanish && "active"}`} href={"#0"}>
        <Spanish height={"100%"} onClick={() => language.setLanguageState(ELanguage.Spanish)} />
      </a>
    </div>
  );
};
