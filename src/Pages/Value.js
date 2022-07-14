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

function Value() {
  return (
    <div className="component Value">
      <div className="Cards">
        <MDBCard
          shadow="0"
          border="success"
          background="white"
          className="mb-3"
          style={{ padding: "1rem" }}
        >
          <MDBCardHeader className="text-success" style={{ fontSize: "3rem" }}>
            Benefit
          </MDBCardHeader>

          <MDBCardBody className="text-success">
            <div style={{ border: "1px solid black", padding: "1rem" }}>
              <MDBCardTitle style={{ fontSize: "2rem" }}>
                Settlement Month Deals
              </MDBCardTitle>
              <MDBCardText className="text-body" style={{ fontSize: "1.2rem" }}>
                5 minutes a deal <br />
                6 deals resolved a day <br />
                .5 hours saved a day <br />
                4 full time settlements analysts <br />
                2 people working on a deal at once <br />
                10 days a month in settlements cycle <br />
                40 hours a month
              </MDBCardText>

              <MDBFooter style={{ fontSize: "1.5rem" }}>
                $5000 monthly time cost savings
              </MDBFooter>
            </div>
            <div
              style={{
                marginTop: "10px",
                border: "1px solid black",
                padding: "1rem",
              }}
            >
              <MDBCardTitle style={{ fontSize: "2rem" }}>
                Older Period Deal
              </MDBCardTitle>
              <MDBCardText className="text-body" style={{ fontSize: "1.2rem" }}>
                10 minutes a deal
                <br />
                4 deals a month
                <br />
                4 full time settlements analysts
                <br />
                2 people working on deal at once
                <br />
                5.33 hours a month
                <br />
              </MDBCardText>
              <MDBFooter style={{ fontSize: "1.5rem" }}>
                $666.67 monthly time cost savings
              </MDBFooter>
            </div>
          </MDBCardBody>
        </MDBCard>

        <MDBCard
          shadow="0"
          border="#EF5350"
          background="white"
          className="mb-3"
          style={{ padding: "1rem" }}
        >
          <MDBCardHeader style={{ fontSize: "3rem", color: "#EF5350" }}>
            Cost
          </MDBCardHeader>
          <MDBCardBody style={{ color: "#EF5350" }}>
            <div
              style={{
                marginTop: "10px",
                border: "1px solid black",
                padding: "1rem",
              }}
            >
              <MDBCardTitle style={{ fontSize: "2rem" }}>
                Development Cost
              </MDBCardTitle>
              <MDBCardText className="text-body" style={{ fontSize: "1.2rem" }}>
                2 in house developers <br />
                6 hours of work a day <br />
                12 weeks of work <br />
                5 days a week <br />
                $125 opportunity cost per employee hour <br />
              </MDBCardText>
              <MDBFooter style={{ fontSize: "1.5rem" }}>
                $90,000 Total Development Cost
              </MDBFooter>
            </div>
            <div
              style={{
                marginTop: "10px",
                border: "1px solid black",
                padding: "1rem",
              }}
            >
              <MDBCardTitle style={{ fontSize: "2rem" }}>
                Implementation Cost
              </MDBCardTitle>

              <MDBCardText className="text-body" style={{ fontSize: "1.2rem" }}>
                .25 training hours
                <br />
                4 settlement analysts
                <br />
                30 traders/schedulers
                <br />
                34 total employees
                <br />
                $125 opportunity cost per employee hour
                <br />
              </MDBCardText>
              <MDBFooter style={{ fontSize: "1.5rem" }}>
                $1,062.50 Implementation cost
              </MDBFooter>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
export default Value;
