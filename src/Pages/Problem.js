import React from "react";
import "./Style.css";
import { ReactDOM } from "react";
import process from "../Components/Process.png";
function Problem() {
  return (
    <div className="component Problem">
      <div className="photo">
        <img src={process} width={1500} height={200} alt="process" />
      </div>
      <div className="problem">Problem</div>
    </div>
  );
}
export default Problem;
