import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../utils/styled';

const Root = styled.div`
  ${fontSize(16, 24)}
  font-weight: normal;
  font-family: 'FFTisaWebLight', serif;
  line-height: 1.4;
  color: #9d9ea6;
  margin: 8vh auto 0;
  max-width: 850px;
  text-align: center;
`;

const Copy = ({ children }) => (
  <Root>
    {children}
  </Root>
);

export default Copy;
