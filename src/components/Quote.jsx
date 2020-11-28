import React from "react";
import styled from "styled-components";
import { breakpoint, fontSize } from "../utils/styled";

const Root = styled.div`
  ${fontSize(22, 36)}
  font-weight: normal;
  font-family: "FFTisaWebLight", serif;
  line-height: 1.6;
  color: #202123;
  margin: 12% auto 8%;
  max-width: 834px;
  text-align: center;
  letter-spacing: -0.7;
`;

const Avatar = styled.img`
  margin-right: 16px;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  ${breakpoint.down`width: 44px; height: 44px;`};
`;

const Cite = styled.cite`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  ${fontSize(14, 20)}
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  text-align: left;
  margin: 0;
`;

const BlockQuote = styled.blockquote`
  ${fontSize(17, 28)}
  margin: 0;
  margin-bottom: 64px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.65;
  text-align: left;
  ${breakpoint.down`margin-bottom: 30px`};
`;

const Quote = ({ children, ...props }) => (
  <Root>
    <BlockQuote>{children}</BlockQuote>
    <Cite>
      <Avatar src={props.avatar}></Avatar>
      <Name>{props.citation}</Name>
    </Cite>
  </Root>
);

export default Quote;
