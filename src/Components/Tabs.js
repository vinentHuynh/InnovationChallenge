import React, { useState } from "react";

import "./Tabs.css";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
} from "mdb-react-ui-kit";
import invoice from "./invoice.png";
import graph from "./invoiceGraph.png";
import BasicTable from "./gridView";

const Tabs = () => {
  const [basicActive, setBasicActive] = useState("tab3");
  const [fillActive, setFillActive] = useState("tab5");

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <div className="RightComponent">
      <div className="Tabs">
        <MDBTabs className="mb-4 border border-primary">
          <MDBTabsItem className="fs-3" style={{ fontSize: "6rem" }}>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              <h4>Trade</h4>
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              <h4>Scheduling</h4>
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
            >
              <h4>Settlements</h4>
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab4")}
              active={basicActive === "tab4"}
            >
              <h4>Treasury</h4>
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </div>
      <div>
        <MDBTabsContent justify="true" id="style">
          <MDBTabsPane show={basicActive === "tab3"}>
            <div className="settlements">
              <MDBTabs className="settlements border border-primary" id="style">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleFillClick("tab5")}
                    active={fillActive === "tab5"}
                  >
                    <h6>KES Invoice</h6>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleFillClick("tab6")}
                    active={fillActive === "tab6"}
                  >
                    <h6>Counter Party Invoice</h6>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleFillClick("tab7")}
                    active={fillActive === "tab7"}
                  >
                    <h6>Variance</h6>
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </div>
            <div>
              <MDBTabsContent>
                <MDBTabsPane show={fillActive === "tab5"}>
                  <div className="Card ">
                    <MDBCard
                      className="border border-primary"
                      style={{
                        width: "30rem",
                        padding: "10px",
                        margin: "10px",
                      }}
                    >
                      <MDBCardHeader style={{ fontSize: "1.5rem" }}>
                        Outstanding
                      </MDBCardHeader>
                      <MDBCardBody style={{ fontSize: "1.1rem" }}>
                        5872547 Volume cut 872 dths
                        <br />
                        5879663 Missing deal
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCard
                      className="border border-primary"
                      style={{
                        width: "30rem",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <MDBCardHeader style={{ fontSize: "1.5rem" }}>
                        Resolved
                      </MDBCardHeader>
                      <MDBCardBody style={{ fontSize: "1.1rem" }}>
                        5875689 Volume cut 545 dths
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  <div className="invoice">
                    <img src={invoice} width={900} height={400} alt="invoice" />
                  </div>
                </MDBTabsPane>
                <MDBTabsPane show={fillActive === "tab6"}>
                  <div className="Card ">
                    <MDBCard
                      className="border border-primary"
                      style={{
                        width: "30rem",
                        padding: "10px",
                        margin: "10px",
                      }}
                    >
                      <MDBCardHeader style={{ fontSize: "1.5rem" }}>
                        Outstanding
                      </MDBCardHeader>
                      <MDBCardBody style={{ fontSize: "1.1rem" }}>
                        5878123 CP Volume cut 215 dths
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCard
                      className="border border-primary"
                      style={{
                        width: "30rem",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <MDBCardHeader style={{ fontSize: "1.5rem" }}>
                        Resolved
                      </MDBCardHeader>
                      <MDBCardBody style={{ fontSize: "1.1rem" }}>
                        5875321 CP Volume cut 5,813 dths
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  <div className="invoice">
                    <img src={invoice} width={900} height={400} alt="invoice" />
                  </div>
                </MDBTabsPane>
                <MDBTabsPane show={fillActive === "tab7"}>
                  <div className="Card ">
                    <MDBCard
                      className="border border-primary"
                      style={{
                        width: "30rem",
                        padding: "10px",
                        margin: "10px",
                      }}
                    >
                      <MDBCardHeader style={{ fontSize: "1.5rem" }}>
                        Outstanding
                      </MDBCardHeader>
                      <MDBCardBody style={{ fontSize: "1.1rem" }}>
                        5878123 Volume cut 215 dths
                        <br />
                        5872547 Volume cut 872 dths
                        <br />
                        5873199 Price Variance
                        <br />
                        5879663 Missing deal
                        <br />
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCard
                      className="border border-primary"
                      style={{
                        width: "30rem",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <MDBCardHeader style={{ fontSize: "1.5rem" }}>
                        Resolved
                      </MDBCardHeader>
                      <MDBCardBody style={{ fontSize: "1.1rem" }}>
                        5875689 Volume cut 545 dths <br /> 5875536 Price
                        Variance (+$0.02)
                        <br />
                        5875321 Volume cut 5,813 dths
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  <div className="graph">
                    <img src={graph} width={696} height={365} alt="graph" />
                  </div>
                </MDBTabsPane>
              </MDBTabsContent>
            </div>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </div>
  );
};

export default Tabs;
