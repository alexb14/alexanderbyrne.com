import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { fontSize, breakpoint } from "../utils/styled";

const Root = styled.div`
  margin: 12% 0 22%;
  ${breakpoint.up`display: flex; margin: 12% 0 0;
  justify-content: space-between; align-items: flex-end;`}
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

const Back = styled(NavLink)`
  font-size: 17px;
  text-align: left;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0;
  color: #74747b;
  text-decoration: none;
  border: 0;
  ${breakpoint.down`display: none;`}
`;

const Role = styled.div`
  ${fontSize(16, 17)}
  color: #323235;
  text-align: left;
  padding: 16px 0 0 0;
  ${breakpoint.down`margin-bottom: 20px;`}
`;

const ProjectMeta = ({ details }) => (
  <Root>
    {details.map((detail) => (
      <Role key={detail.label}>
        <Label>{detail.label}</Label>
        <Value>{detail.value}</Value>
      </Role>
    ))}

    <Back to="/projects">⟵ Back to Projects</Back>
  </Root>
);

export default ProjectMeta;
