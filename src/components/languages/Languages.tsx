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
    <div id={"languagesWrapper"}>
      <div
        id={ELanguage.English}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.English && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.English)!.focus();
        }}
      >
        <English height={"100%"} onClick={() => language.setLanguageState(ELanguage.English)} />
      </div>
      <div
        id={ELanguage.Swedish}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Swedish && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Swedish)!.focus();
        }}
      >
        <Swedish height={"100%"} onClick={() => language.setLanguageState(ELanguage.Swedish)} />
      </div>
      <div
        id={ELanguage.Norwegian}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Norwegian && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Norwegian)!.focus();
        }}
      >
        <Norwegian height={"100%"} onClick={() => language.setLanguageState(ELanguage.Norwegian)} />
      </div>
      <div
        id={ELanguage.Finnish}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Finnish && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Finnish)!.focus();
        }}
      >
        <Finnish height={"100%"} onClick={() => language.setLanguageState(ELanguage.Finnish)} />
      </div>
      <div
        id={ELanguage.Hungarian}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Hungarian && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Hungarian)!.focus();
        }}
      >
        <Hungarian height={"100%"} onClick={() => language.setLanguageState(ELanguage.Hungarian)} />
      </div>
      <div
        id={ELanguage.German}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.German && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.German)!.focus();
        }}
      >
        <German height={"100%"} onClick={() => language.setLanguageState(ELanguage.German)} />
      </div>
      <div
        id={ELanguage.Dutch}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Dutch && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Dutch)!.focus();
        }}
      >
        <Dutch height={"100%"} onClick={() => language.setLanguageState(ELanguage.Dutch)} />
      </div>
      <div
        id={ELanguage.Afrikaans}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Afrikaans && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Afrikaans)!.focus();
        }}
      >
        <Afrikaans height={"100%"} onClick={() => language.setLanguageState(ELanguage.Afrikaans)} />
      </div>
      <div
        id={ELanguage.Russian}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Russian && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Russian)!.focus();
        }}
      >
        <Russian height={"100%"} onClick={() => language.setLanguageState(ELanguage.Russian)} />
      </div>
      <div
        id={ELanguage.Latvian}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Latvian && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Latvian)!.focus();
        }}
      >
        <Latvian height={"100%"} onClick={() => language.setLanguageState(ELanguage.Latvian)} />
      </div>
      <div
        id={ELanguage.Polish}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Polish && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Polish)!.focus();
        }}
      >
        <Polish height={"100%"} onClick={() => language.setLanguageState(ELanguage.Polish)} />
      </div>
      <div
        id={ELanguage.French}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.French && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.French)!.focus();
        }}
      >
        <French height={"100%"} onClick={() => language.setLanguageState(ELanguage.French)} />
      </div>
      <div
        id={ELanguage.Spanish}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Spanish && "active"}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Spanish)!.focus();
        }}
      >
        <Spanish height={"100%"} onClick={() => language.setLanguageState(ELanguage.Spanish)} />
      </div>
    </div>
  );
};
