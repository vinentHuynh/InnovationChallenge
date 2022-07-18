import React from "react";
import currentSolution from "../Components/CurrentSolution.png";

export default function CurrentSolution() {
  return (
    <div className="component current" id="currentSolution">
      <img
        src={currentSolution}
        style={{ margin: "2rem" }}
        alt="currentSolution"
      />
    </div>
  );
}
