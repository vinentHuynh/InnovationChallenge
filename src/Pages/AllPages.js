import React from "react";
import ReactPageScroller from "react-page-scroller";
import Intro from "./Intro";
import Problem from "./Problem";
import Solution from "./Solution";
import Value from "./Value";
import Benefit from "./ProjectedBenefit";
import CurrentSolution from "./CurrentSolution";
import "../index.css";
export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handleBeforePageChange = (number) => {};
  handlePageChange = (number) => {
    this.setState({ currentPage: number });
  };

  render() {
    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Intro />
          <Problem />
          <CurrentSolution />
          <Solution />
          <Value />
          <Benefit />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}
