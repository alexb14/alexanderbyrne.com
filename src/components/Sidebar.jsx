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
  `};
`;

const Nav = styled.nav`
  text-align: left;

  ${breakpoint.down`
    transform: none;
  `}
`;

const NavItem = styled(NavLink)`
  display: inline-block;
  font-size: 15px;
  font-weight: normal;
  margin-right: 63px;
  color: #74747b;
  font-family: "NeutrifPro-Regular", sans-serif;
  ${breakpoint.down`${fontSize(24, 32)}`};
`;

const Logo = styled(Link)`
  display: inline-block;
  font-size: 15px;
  color: #000;
  text-decoration: none;
`;

const Toggle = styled.div`
  display: none;
  position: fixed;
  bottom: 4vw;
  right: 4vw;
  z-index: 2;

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
        <Wrapper style={{ display: visible ? "block" : "none" }}>
          <Nav>
            <NavItem to="/work" activeClassName="active">
              Work
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
