import React from "react";
import Tabs from "../Components/Tabs";
import Search from "../Components/Search";
import * as ReactDOM from "react-dom";
import "./Style.css";
import { Header } from "../Components/Header";
import BasicTable from "../Components/gridView";
function Solution() {
  return (
    <div className="component Solution">
      <Header />
    </div>
  );
}
export default Solution;

const Page = () => {
  return (
    <div className="component Solution">
      <Search />
      <Tabs />
    </div>
  );
};
