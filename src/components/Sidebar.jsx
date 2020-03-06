import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { breakpoint, fontSize } from "../utils/styled";

const Root = styled.div`
  text-align: center;
  ${props => props.hide && breakpoint.up`display:none;`}
`;

const Wrapper = styled.div`
  padding: 46px 0;
  align-items: center;
  justify-content: space-between;

  ${breakpoint.up`display: flex !important;`}

  ${breakpoint.down`
    border: 0;
    width: 100%;
    left: 0;
    text-align: left;
    padding: 0 8vw;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 98;
    align-items: center;
  `};
`;

const Nav = styled.nav`
  text-align: left;

  ${breakpoint.down`
    transform: none;
    width: 100%;
    text-align: right;
  `}
`;

const NavItem = styled(NavLink)`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  font-weight: normal;
  margin-right: 63px;
  color: #74747b;
  ${breakpoint.down`display: block; margin: 12px 0; ${fontSize(22, 32)}`};

  position: relative;

  ${breakpoint.up`&:after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #323235;
    opacity: 0;
    transition: opacity 220ms ease;
  }

  &.active {
    &:after {
      opacity: 1;
    }
  }`};
`;

const Logo = styled(Link)`
  display: inline-block;
  font-size: 15px;
  color: #000;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  ${breakpoint.down`font-size: 14px; position: fixed; top: 8vw; left: 8vw; padding-right: 4vw; &:after {color: #74747B; content: '  —  Experience and Interaction designer in London.'}`};
`;

const Toggle = styled.div`
  display: none;
  position: fixed;
  bottom: 4vw;
  right: 4vw;
  z-index: 99;

  ${breakpoint.down`display: block;`}
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      visible: false
    };

    this.unlisten = this.props.history.listen(() => {
      this.setState({
        visible: false
      });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleToggle() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { visible } = this.state;
    const { location } = this.props;

    return (
      <Root>
        <Toggle>
          <Hamburger toggle={visible} onClick={this.handleToggle} />
        </Toggle>
        <Wrapper style={{ display: visible ? "flex" : "none" }}>
          <Nav>
            <NavItem to="/work" activeClassName="active">
              Projects
            </NavItem>
            <NavItem to="/about" activeClassName="active">
              About
            </NavItem>
            <NavItem to="/writing" activeClassName="active">
              Writing
            </NavItem>
            <NavItem to="/contact" activeClassName="active">
              Contact
            </NavItem>
          </Nav>
          <Logo to="/">Alexander Byrne</Logo>
        </Wrapper>
      </Root>
    );
  }
}

export default withRouter(Sidebar);
