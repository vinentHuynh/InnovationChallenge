import Tabs from "./Tabs";
import Search from "./Search";
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
import Solution from "../Pages/Solution";
import { Info } from "./Info";

export const Header = () => {
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
    <div
      style={{
        backgroundColor: "aliceblue",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="mainTab ">
        <div style={{ height: "100%" }}>
          <MDBTabs className=" headerTab border border-primary">
            <MDBTabsItem className=" headerTab" style={{ fontSize: "6rem" }}>
              <MDBTabsLink
                onClick={() => handleBasicClick("tab1")}
                active={basicActive === "tab1"}
              >
                <h6>Variance Data</h6>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem className=" headerTab">
              <MDBTabsLink
                onClick={() => handleBasicClick("tab2")}
                active={basicActive === "tab2"}
              >
                <h6>Variance Tracking</h6>
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent justify="true" id="style">
            <MDBTabsPane show={basicActive === "tab1"}>
              <Info />
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "tab2"}>
              <Page />
            </MDBTabsPane>
          </MDBTabsContent>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="solutionPage">
      <Search />
      <Tabs />
    </div>
  );
};
