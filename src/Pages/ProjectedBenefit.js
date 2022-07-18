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
import graph from "../Images/graph.png";
import benefit from "../Images/ProjectedBenefit.png";
import chart from "../Images/Chart.png";
function Benefit() {
  return (
    <div className="component Benefit">
      <div
        style={{
          fontSize: "7rem",
          color: "aliceblue",
          margin: "1rem",
          marginRight: "2rem",
          textAlign: "right",
          width: "100%",
        }}
      >
        Projected Benefit
      </div>

      <MDBRow style={{ margin: "2rem" }}>
        <MDBCol md="4">
          <div className="card-benefit ">
            <img src={benefit} width={"650px"} alt="benefit" />
          </div>
          <MDBRow>
            <MDBCol md="6" style={{ width: "100%" }}>
              <div className="non-monetary">
                <MDBCard className="text-black" style={{ width: "100%" }}>
                  <MDBCardHeader
                    className="text-info"
                    style={{ fontSize: "2rem" }}
                  >
                    Non-Monetary Benefits
                  </MDBCardHeader>
                  <MDBCardBody style={{ fontSize: "2rem" }}>
                    <div>
                      - Application Ownership <br />
                      - Efficient Communication
                      <br />
                      - Workload Management
                      <br />
                      - Mitigates Business Risks
                      <br />
                    </div>
                  </MDBCardBody>{" "}
                </MDBCard>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="7">
          <div className="graph">
            <img src={chart} width="2000px" alt="chart" />
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Benefit;
