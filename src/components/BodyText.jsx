import React from "react";
import styled from "styled-components";
import { fontSize, breakpoint } from "../utils/styled";

const Root = styled.div`
  max-width: 834px;
  margin: 16.1% auto;
  ${breakpoint.down`margin: 25% auto`};
`;

const Heading = styled.h3`
  ${fontSize(24, 28)}
  line-height: 1.3;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #000;
  margin: 0;
  margin-bottom: 34px;
`;

const Text = styled.p`
  ${fontSize(18, 20)}
  font-family: "Inter", sans-serif;
  line-height: 1.5;
  font-style: normal;
  font-weight: normal;
  color: #000;
  margin: 0;
`;

const Body = ({ heading, children }) => (
  <Root>
    <Heading>{heading}</Heading>
    <Text>{children}</Text>
  </Root>
);

export default Body;
