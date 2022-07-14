import React from "react";
import "./Search.css";
import { Multiselect } from "multiselect-react-dropdown";
import { useState } from "react";

const months = [
  { month: "Janurary", id: 1 },
  { month: "Feburary", id: 2 },
  { month: "March", id: 3 },
  { month: "April", id: 4 },
  { month: "May", id: 5 },
  { month: "June", id: 6 },
  { month: "July", id: 7 },
  { month: "August", id: 8 },
  { month: "September", id: 9 },
  { month: "October", id: 10 },
  { month: "November", id: 11 },
  { month: "December", id: 12 },
];
const Search = () => {
  const [options] = useState(months);
  return (
    <div className="Search">
      <div>
        <label>
          <input id="textbox" type="text" placeholder="Deal Number" />
        </label>
        <label>
          <input id="textbox" type="text" placeholder="Counter Party" />
        </label>
      </div>

      <div style={{ background: "white" }}>
        <Multiselect
          options={options}
          displayValue="month"
          placeholder="Month"
          className="Month"
        />
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <input className="searchButton" type="submit" value="Search" />
      </div>
    </div>
  );
};
export default Search;
