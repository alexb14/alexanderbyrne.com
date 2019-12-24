import React from "react";
import styled from "styled-components";
import { fontSize } from "../utils/styled";

const Root = styled.div`
  margin: 12vh 0 0;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.p`
  font-size: 17px;
  text-align: left;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
`;

const Value = styled.p`
  font-weight: normal;
  margin: 0;
`;

const Role = styled.span`
  ${fontSize(16, 17)}
  color: #323235;
  text-align: left;
  display: inline-block;
  vertical-align: top;
  padding: 16px 0 0 0;
`;

const ProjectMeta = ({ details }) => (
  <Root>
    {details.map(detail => (
      <Role key={detail.label}>
        <Label>{detail.label}</Label>
        <Value>{detail.value}</Value>
      </Role>
    ))}
  </Root>
);

export default ProjectMeta;
