import React, { useEffect } from "react";
import "./output.css";

export const Output = (): React.ReactElement => {

  useEffect(() => {
    let show = "visible";
    const time = 700;
    const cursor = document.getElementById('cursor')!;

    const blink = () => {
      show = (show === "hidden") ? "visible" : "hidden";
      cursor.style.visibility = show;
      setTimeout(blink, time);
    };

    blink();
  }, []);

  return (
    <div key={"output"} id={"output"}>
      <div className={"outputScreen"}>
        <div className={"outputTyping"}>
          <div className={"characters"}>Characters go here!</div>
          <div id={"cursor"}>&nbsp;</div>
        </div>
      </div>
    </div>
  );
};
