import React from "react";
import styled from "styled-components";
import { fontSize, breakpoint } from "../utils/styled";

const Root = styled.div`
  max-width: 830px;
  margin: 16.1% auto;
  ${breakpoint.down`margin: 25% auto`};
`;

const Eyebrow = styled.h4`
  ${fontSize(14, 20)};
  margin-top: 0;
  margin-bottom: 12px;
  text-align: left;
  font-weight: 400;
  ${(props) => `color: ${props.accent};`}
`;

const Heading = styled.h3`
  ${fontSize(24, 28)}
  line-height: 1.14;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #323235;
  margin: 0;
  margin-bottom: 34px;
`;

const Text = styled.p`
  ${fontSize(18, 20)}
  font-family: "Inter", sans-serif;
  line-height: 1.7;
  font-style: normal;
  font-weight: 400;
  color: #323235;
  margin: 0;
`;

const Body = ({ heading, eyebrow, accent, children }) => (
  <Root>
    {eyebrow && <Eyebrow accent={accent}>{eyebrow}</Eyebrow>}
    <Heading>{heading}</Heading>
    <Text>{children}</Text>
  </Root>
);

export default Body;
