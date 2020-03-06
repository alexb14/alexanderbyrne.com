import React from "react";
import styled from "styled-components";
import { fontSize } from "../utils/styled";

const Root = styled.div`
  ${fontSize(22, 36)}
  font-weight: normal;
  font-family: "FFTisaWebLight", serif;
  line-height: 1.6;
  color: #202123;
  margin: 18% auto 0;
  max-width: 834px;
  text-align: center;
  letter-spacing: -0.7;
`;

const Avatar = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

const Cite = styled.cite`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  font-style: normal;
`;

const BlockQuote = styled.blockquote`
  margin: 0;
  margin-bottom: 64px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 46px;
  text-align: left;
`;

const Quote = ({ children, ...props }) => (
  <Root>
    <BlockQuote>{children}</BlockQuote>

    <Cite>
      <Avatar src={props.avatar}></Avatar>
      {props.citation}
    </Cite>
  </Root>
);

export default Quote;
