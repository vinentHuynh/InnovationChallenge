import React from "react";
import "./Style.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
  MDBCol,
  MDBFooter,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import cost from "../Images/CostBenefit.png";
import Details from "../Components/modal";
function Value() {
  return (
    <div className="component Value">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "5rem",
          fontSize: "7rem",
          margin: "5rem",
          color: "aliceblue",
        }}
      >
        Cost and Value
      </div>
      <div style={{ width: "100%", alignContent: "right" }}>
        <Details />
      </div>
      <div className="value">
        <img src={cost} width={1556} height={597} alt="cost" />
      </div>
    </div>
  );
}
export default Value;
