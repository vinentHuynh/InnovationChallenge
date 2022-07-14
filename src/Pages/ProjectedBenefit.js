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
import graph from "../Components/graph.png";
function Benefit() {
  return (
    <div className="component Benefit">
      <div className="card-benefit">
        <MDBCard
          style={{ fontSize: "1.5rem" }}
          shadow="0"
          border="info"
          background="blue"
        >
          <MDBCardHeader style={{ fontSize: "5rem" }} className="text-info">
            Projected Benefit
          </MDBCardHeader>
          <MDBCardBody className="text-info">
            <MDBCardText
              style={{ border: "1px solid black", padding: ".5rem" }}
              className="bg-success text-black "
            >
              Benefit (3 - 5 years): <br /> $187,000 - $323,000
            </MDBCardText>
            <MDBCardText
              style={{
                border: "1px solid black",
                padding: ".5rem",
                fontSize: "1.5rem",
                background: "#EF5350",
              }}
              className=" text-dark "
            >
              Cost: <br />
              $91,062.50
            </MDBCardText>

            <MDBCardTitle style={{ fontSize: "1.4rem" }}>
              Total Profit
            </MDBCardTitle>
            <MDBCardText
              className="bg-info text-black"
              style={{ border: "1px solid black", padding: ".5rem" }}
            >
              {" "}
              Range of:
              <br /> $95,937.50 - $231,937.50
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="graph">
        <img src={graph} width={1000} height={680} alt="graph" />
      </div>
      <div className="non-monetary">
        <MDBCard className="text-black">
          <MDBCardHeader className="text-info" style={{ fontSize: "3rem" }}>
            Non-Monetary Benefits
          </MDBCardHeader>
          <MDBCardBody style={{ fontSize: "1.4rem" }}>
            Application Ownership <br />
            Efficient Communication <br />
            Workload Management
            <br />
            Mitigates Business Risks <br />
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
export default Benefit;
