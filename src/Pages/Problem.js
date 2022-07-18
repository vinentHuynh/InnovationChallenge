import React from "react";
import "./Style.css";
import { ReactDOM } from "react";
import process from "../Components/Process.png";
function Problem() {
  return (
    <div className="component Problem">
      <span className="problem">Problem</span>
      <span className="photo">
        <img src={process} width={1400} height={200} alt="process" />
      </span>
      <div>
        <h1>Major Issues</h1>
        <span id="problem">
          - Information overload <br />
          - Communication bottlenecks <br />
          - Geographical Differences
          <br />- Manual Entry
        </span>
      </div>
    </div>
  );
}
export default Problem;
