import React from "react";
import styled from "styled-components";
import { fontSize, breakpoint } from "../utils/styled";

const Root = styled.h2`
  ${fontSize(30, 76)}
  line-height: 1.2;
  ${breakpoint.up`line-height: 1.1;`}
  letter-spacing: -1.1px;
  font-weight: normal;
  color: #323235;
  text-align: left;
  margin: 13.25% 0 1.5%;
  font-family: "FFTisaWebLight", serif;
  max-width: 1200px;
`;

const Heading = ({ children }) => <Root>{children}</Root>;

export default Heading;
