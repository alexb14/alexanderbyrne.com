import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoint, fontSize } from "../utils/styled";

const Root = styled.div`
  color: #2c2c2f;
  text-align: left;
  max-width: 750px;
  margin: 16% 0 0;
  font-family: "FFTisaWebLight", serif;

  > p {
    ${fontSize(26, 76)}
    line-height: 1.1;
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

const NavItem = styled(NavLink)`
  ${fontSize(14, 20)}
  margin-right: 15%;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #2c2c2f;
    padding: 0 0 8px 0;
  }
`;

const NavItemBottom = styled(NavLink)`
  ${fontSize(18, 24)}
  margin-right: 0%;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;

  &:hover {
    border-bottom: 1px solid #2c2c2f;
    padding: 0 0 8px 0;
  }
`;

const SignOff = ({ title }) => (
  <Root>
    {title && <p>{title}</p>}
    {!title && (
      <p>
        I’m on the hunt for exciting ideas being made possible by{" "}
        <em>amazing</em> people.
      </p>
    )}

    <Nav>
      <NavItemBottom to="/contact">Get in touch ⟶</NavItemBottom>
    </Nav>
  </Root>
);

export default SignOff;
