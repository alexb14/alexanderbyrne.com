import React from "react";
import styled, { injectGlobal } from "styled-components";
import { withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import SocialLinks from "./SocialLinks";
import ScrollToTop from "./ScrollToTop";
import { breakpoint, fontSize } from "../utils/styled";

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
    color: #323235;
    font-family: 'NeutrifPro-Regular', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    overflow-y: scroll;
    background-color: #fff;
  }

  h1 {
    ${fontSize(30, 76)}
    line-height: 1.1;
    letter-spacing: -1px;
    font-weight: normal;
    color: #323235;
    text-align: left;
    margin: 18vh 0 0;
    font-family: 'FFTisaWebLight', serif;
  }

  h2 {
    ${fontSize(26, 40)}
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
  max-width: 1800px;
  padding: 0 160px 0 8vw;
  margin: 0 auto 16vh;
  text-align: center;

  ${breakpoint.down`padding-right: 8vw;`}
  ${props => props.hideSidebar && breakpoint.up`padding-right: 8vw;`}
`;

const Layout = ({ children, location }) => (
  <ScrollToTop>
    <Root>
      <Sidebar />
      {children}
      <SocialLinks />
    </Root>
  </ScrollToTop>
);

export default withRouter(Layout);
