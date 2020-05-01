import React from "react";
import styled from "styled-components";
import { fontSize, breakpoint } from "../utils/styled";

const Root = styled.div`
  max-width: 830px;
  margin: 13.25% 0 42%;
  ${breakpoint.up`margin: 13.25% 0 5%`}
`;

const Heading = styled.h1`
  ${fontSize(30, 76)}
  animation: headingFadeIn 500ms 480ms ease both;
  margin: 0;
  margin-bottom: 18px;
  line-height: 1.2;
  letter-spacing: -1.1px;
  font-weight: normal;
  color: #323235;
  text-align: left;
  font-family: "FFTisaWebLight", serif;
  max-width: 1200px;
  ${breakpoint.up`line-height: 1.1; margin-bottom: 26px;`}
`;

const Text = styled.p`
  ${fontSize(18, 20)}
  font-family: "Inter", sans-serif;
  line-height: 1.7;
  font-style: normal;
  font-weight: 400;
  color: #000;
  margin: 0;
`;

const IntroText = ({ heading, children }) => (
  <Root>
    <Heading>{heading}</Heading>
    <Text>{children}</Text>
  </Root>
);

export default IntroText;
