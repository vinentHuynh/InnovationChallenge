import React from "react";
import "./Style.css";
import { ReactDOM } from "react";
import process from "../Images/Process.png";
import cycle from "../Images/Cycle.png";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
function Problem() {
  return (
    <div className="component Problem">
      <div style={{ width: "50%" }}>
        <span className="problem">Problem</span>
        <span id="problem">
          - Information overload <br />
          - Communication bottlenecks <br />
          - Geographical Differences
          <br />- Manual Entry
        </span>
      </div>
      <div
        style={{ height: "fit-content", width: "fit-content", margin: "5rem" }}
      ></div>
      <div
        style={{ width: "fit-content", height: "fit-content", margin: "2rem" }}
      >
        <img src={cycle} width={543} height={600} alt="cycle" />
      </div>

      <div className="photo">
        <img src={process} width={1400} height={200} alt="process" />
      </div>
    </div>
  );
}
export default Problem;
