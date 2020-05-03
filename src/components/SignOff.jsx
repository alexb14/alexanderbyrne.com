import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoint, fontSize } from "../utils/styled";

const Root = styled.div`
  color: #2c2c2f;
  text-align: left;
  max-width: 1270px;
  margin: 16% 0 0;
  font-family: "FFTisaWebLight", serif;
  ${breakpoint.down`margin: 32% 0 0;`};
  > p {
    ${fontSize(26, 76)}
    line-height: 1.2;
    letter-spacing: -1px;
  }

  br {
    ${breakpoint.down`
    display: none;`}
  }

  p + p {
    color: #2c2c2f;
  }

  a {
    ${fontSize(18, 24)}
    color: #9a6a00;
  }
`;

const Nav = styled.nav`
  margin-top: 0;
`;

const NavItemBottom = styled(NavLink)`
  ${fontSize(18, 24)}
  margin-right: 0%;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  position: relative;

  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    height: 16px;
    margin-left: 10px;
    transition: transform 300ms ease;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='16' viewBox='0 0 60 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M52.045 16L59.682 8.36359L52.045 0.727264L50.733 2.02272L56.136 7.42613H0.688004V9.30109H56.136L50.733 14.6875L52.045 16Z' fill='%239A6A00'/%3E%3C/svg%3E%0A");
  }

  ${breakpoint.up`
  &:hover {
    color: #9a6a00;
    padding: 0 0 8px 0;
    &:after {
      transform: translateX(10px);
    }
  }`}

  ${breakpoint.down`
  display: inline-block;
  color: #2c2c2c;
  background: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 32px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  padding: 12px 40px;
  text-decoration: none;
  background: #2c2c2c;
  color: #fff!important;
  margin-bottom: 12%;

  &:after {
    width: 50px;
    height: 12px;
    margin-left: 10px;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='16' viewBox='0 0 60 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M52.045 16L59.682 8.36359L52.045 0.727264L50.733 2.02272L56.136 7.42613H0.688004V9.30109H56.136L50.733 14.6875L52.045 16Z' fill='%23ffffff'/%3E%3C/svg%3E%0A");
    background-size: 50px 12px;
  }
  
  `};
`;

const SignOff = ({ title }) => (
  <Root>
    {title && <p dangerouslySetInnerHTML={{ __html: title }}></p>}
    {!title && (
      <p>
        I’m on the hunt for <em>exciting</em> ideas being made possible by{" "}
        <em>amazing</em> people.
      </p>
    )}

    <Nav>
      <NavItemBottom to="/contact">Get in touch</NavItemBottom>
    </Nav>
  </Root>
);

export default SignOff;
