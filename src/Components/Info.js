import React from "react";
import "./Info.css";
import { MDBInput } from "mdb-react-ui-kit";
import GetGrid from "./gridView";

import "@silevis/reactgrid/styles.css";
export const Info = () => {
  return (
    <div className="Info">
      <div id="Info">
        <MDBInput label="Deal Number" id="form" type="text" />
        <MDBInput label="KES Volume" id="form" type="text" />
        <MDBInput label="KES Amount" id="form" type="text" />
        <MDBInput label="CP Volume" id="form" type="text" />
        <MDBInput label="CP Amount" id="form" type="text" />
        <button type="button" class="btn btn-primary">
          Add Variance
        </button>
      </div>
    </div>
  );
};
