import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../utils/styled';

const Root = styled.div`
  ${fontSize(20, 36)}
  font-weight: normal;
  font-family: 'FFTisaWebLight', serif;
  line-height: 1.6;
  color: #9d9ea6;
  margin: 16vh auto 0;
  max-width: 1000px;
  text-align: center;
  letter-spacing: -0.7;
`;

const Copy = ({ children }) => (
  <Root>
    {children}
  </Root>
);

export default Copy;
