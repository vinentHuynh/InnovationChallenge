import React from "react";
import "./Search.css";
import { Multiselect } from "multiselect-react-dropdown";
import { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const months = [
  { label: "Janurary" },
  { label: "Feburary" },
  { label: "March" },
  { label: "April" },
  { label: "May" },
  { label: "June" },
  { label: "July" },
  { label: "August" },
  { label: "September" },
  { label: "October" },
  { label: "November" },
  { label: "December" },
];
const Search = () => {
  const [options] = useState(months);

  return (
    <div className="Search">
      <div>
        <MDBInput
          label="Deal Number"
          type="text"
          size="lg"
          style={{ margin: "1rem", fontSize: "1.4rem" }}
        />
        <MDBInput
          label="Counter Party"
          type="text"
          size="lg"
          style={{ margin: "1rem", fontSize: "1.4rem" }}
        />
      </div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={months}
        sx={{ width: "100%" }}
        size="medium"
        renderInput={(params) => <TextField {...params} label="Month" />}
      />

      <button
        type="button"
        class="btn btn-primary"
        style={{ margin: "1rem", fontSize: "1rem" }}
      >
        Search
      </button>
    </div>
  );
};
export default Search;
