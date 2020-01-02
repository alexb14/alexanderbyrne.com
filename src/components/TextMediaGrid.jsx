import React from "react";
import styled from "styled-components";
import { breakpoint } from "../utils/styled";

const Root = styled.div`
  column-count: 2;
  column-gap: 0;
  column-gap: 80px;
  margin: 18vh 0 0;
  & > div {
    break-inside: avoid;
    margin-bottom: 88px;
  }
  ${breakpoint.down`column-gap: 8vw;`};
`;

const TextMediaGrid = ({ children }) => <Root>{children}</Root>;

export default TextMediaGrid;
