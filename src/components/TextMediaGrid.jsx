import React, { Component } from "react";
import styled from "styled-components";
import { breakpoint } from "../utils/styled";

class TextMediaGrid extends Component {
  render() {
    const Root = styled.div`
      column-count: ${this.props.columns ? this.props.columns : "2"};
      column-gap: 0;
      column-gap: ${this.props.columns == "3" ? "70px" : "80px"};
      margin: 18vh 0 16vh;
      & > div {
        break-inside: avoid;
        padding-bottom: 88px;
        ${breakpoint.down`padding-bottom: 44px;`};
      }
      ${breakpoint.down`margin: 10vw 0 8vw; column-gap: 6vw; column-count: 2`};
    `;
    return <Root>{this.props.children}</Root>;
  }
}

export default TextMediaGrid;
