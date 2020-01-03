import React, { Component } from "react";
import styled from "styled-components";
import { breakpoint } from "../utils/styled";

class TextMediaGrid extends Component {
  render() {
    const Root = styled.div`
      column-count: ${this.props.columns ? this.props.columns : "2"};
      column-gap: 0;
      column-gap: ${this.props.columns == "3" ? "70px" : "80px"};
      margin: ${this.props.flush ? "10vh 0 8vh" : "20vh 0 8vh"};
      & > div {
        break-inside: avoid;
        padding-bottom: 80px;
      }
      ${breakpoint.down`${
        this.props.flush ? "margin: 10vh 0 8vh;" : "margin: 20vh 0 8vh;"
      } column-gap: 0; column-count: 1`};
    `;
    return <Root>{this.props.children}</Root>;
  }
}

export default TextMediaGrid;
