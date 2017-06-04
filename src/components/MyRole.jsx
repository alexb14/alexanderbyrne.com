import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../utils/styled';

const Root = styled.div`
  margin: 8vh 0 0;
`;

const Title = styled.p`
  font-size: 18px;
  text-align: center;
  color: #9d9ea6;
`;

const Role = styled.span`
  ${fontSize(16, 24)}
  color: #2c2c2f;
  font-family: 'FFTisaWebLight', serif;
  display: inline-block;
  vertical-align: middle;
  
  & + &::before {
    content: '•';
    display: inline-block;
    vertical-align: middle;
    margin: 0 16px;
  }
`;

const MyRole = ({ roles }) => (
  <Root>
    <Title>My role in the project</Title>
    {roles.map(role => <Role key={role}>{role}</Role>)}
  </Root>
);

export default MyRole;
