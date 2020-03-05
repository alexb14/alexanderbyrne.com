import React from "react";
import styled from "styled-components";
import { fontSize } from "../utils/styled";

const Root = styled.div`
  margin: 14% 0 0;
`;

const Title = styled.p`
  text-align: center;
  color: #9d9ea6;
`;

const Role = styled.span`
  ${fontSize(22, 40)}
  color: #2c2c2f;
  font-family: "FFTisaWebLight", serif;
  display: inline-block;
  vertical-align: middle;
  padding: 16px 0 0 0;

  & + &::before {
    content: "•";
    display: inline-block;
    vertical-align: middle;
    margin: 0 16px;
  }
`;

const MyRole = ({ roles }) => (
  <Root>
    <Title>My role in the project</Title>
    {roles.map(role => (
      <Role key={role}>{role}</Role>
    ))}
  </Root>
);

export default MyRole;
