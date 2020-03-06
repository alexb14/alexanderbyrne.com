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

  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-size: 17px;
    line-height: 1.3;
    color: #323235;
  }
  
  html {
    overflow-y: scroll;
    background-color: #fff;
  }
  @keyframes contentFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: contentFadeIn 1100ms 400ms ease both;

  .content {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    div:first-of-type > div:first-of-type {
      animation: contentFadeIn 1000ms 200ms ease both;
    }
  }

  @keyframes headingFadeIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    ${fontSize(30, 76)}
    animation: headingFadeIn 500ms 480ms ease both;

    line-height: 1.2;
    ${breakpoint.up`line-height: 1.1;`}
    letter-spacing: -1.1px;
    font-weight: normal;
    color: #323235;
    text-align: left;
    margin: 13.25% 0 5%;
    font-family: 'FFTisaWebLight', serif;
    max-width: 1200px;
  }

  h2 {
    ${fontSize(26, 40)}
    font-weight: normal;
    font-family: 'FFTisaWebLight', serif;
    margin: 0;
  }

  h3 {
    ${fontSize(22, 36)}
    font-weight: normal;
    font-family: 'FFTisaWebLight', serif;
    margin: 0;
    text-align: left;
  }

  p {
    text-align: left;
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
  max-width: 1680px;
  padding: 0 11.5%;
  margin: 0 auto 6%;
  text-align: center;

  ${breakpoint.down`padding-right: 8vw;`}
  ${props => props.hideSidebar && breakpoint.up`padding-right: 8vw;`}
`;

const Layout = ({ children, location }) => (
  <ScrollToTop>
    <Root>
      <Sidebar location={location} />
      <div className="content">{children}</div>
      <SocialLinks />
    </Root>
  </ScrollToTop>
);

export default withRouter(Layout);
