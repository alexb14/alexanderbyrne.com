import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { withRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import ScrollToTop from './ScrollToTop';
import { breakpoint, fontSize } from '../utils/styled';

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-size: 18px;
    font-family: 'NeutrifPro-Regular', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    overflow-y: scroll;
  }

  h1 {
    ${fontSize(30, 42)}
    font-weight: normal;
    color: #202123;
    margin: 16vh 0 0;
    font-family: 'FFTisaWebLight', serif;
  }

  h2 {
    ${fontSize(26, 36)}
    font-weight: normal;
    font-family: 'FFTisaWebLight', serif;
    margin: 0;
  }

  nav a {
    color: rgba(44, 44, 47, .5);
    text-decoration: none;
    font-family: 'FFTisaWebLight', serif;
  
    &.active,
    &:hover {
      color: rgba(44, 44, 47, 1);
    }
  }

  ::placeholder {
    color: #acadb7;
  }
`;

const Root = styled.div`
  max-width: 1400px;
  padding: 0 160px 0 4vw;
  margin: 0 auto 16vh;
  text-align: center;

  ${breakpoint.down`padding-right: 4vw;`}
  ${props => props.hideSidebar && breakpoint.up`padding-right: 4vw;`}
`;

const Layout = ({ children, location }) => (
  <ScrollToTop>
    <Root hideSidebar={location.pathname === '/'}>
      <Sidebar />
      {children}
    </Root>
  </ScrollToTop>
);

export default withRouter(Layout);
