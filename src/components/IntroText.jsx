import React from "react";
import styled from "styled-components";
import { fontSize, breakpoint } from "../utils/styled";

const Root = styled.div`
  max-width: 834px;
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

const IntroText = ({ heading, children }) => (
  <Root>
    <Text>{children}</Text>
  </Root>
);

export default IntroText;
