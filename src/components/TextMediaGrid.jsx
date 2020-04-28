import React, { Component } from "react";
import styled from "styled-components";
import { breakpoint } from "../utils/styled";

class TextMediaGrid extends Component {
  render() {
    const Root = styled.div`
      column-count: ${this.props.columns ? this.props.columns : "2"};
      column-gap: 0;
      column-gap: ${this.props.columns === "3" ? "60px" : "80px"};
      margin: ${this.props.flush ? "4% 0 4%" : "16.1% 0 0"};
      & > div {
        break-inside: avoid;
        padding-bottom: 18%;
        ${breakpoint.down`padding-bottom: 30%!important;`};
      }
      ${breakpoint.down`${
        this.props.flush ? "margin: 8% 0 8%;" : "margin: 16.1% 0 0%;"
      } column-gap: 0; column-count: 1`};
    `;
    return <Root>{this.props.children}</Root>;
  }
}

export default TextMediaGrid;
