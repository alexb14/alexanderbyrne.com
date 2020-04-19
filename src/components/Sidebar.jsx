import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import { breakpoint, fontSize } from '../utils/styled';

const Root = styled.div`
  text-align: center;
  ${props => props.hide && breakpoint.up`display:none;`}
`;

const Wrapper = styled.div`
  border-left: 1px solid #dee2e6;
  background-color: #fafafa;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 140px;
  z-index: 1;
  
  ${breakpoint.up`display: block !important;`}
  
  ${breakpoint.down`
    border: 0;
    width: 100%;
    left: 0;
    text-align: left;
    padding: 0 8vw;
  `}
`;

const Nav = styled.nav`
  position: absolute;
  transform: translate(0, 50%);
  bottom: 50%;
  left: 30px;
  text-align: left;
  
  ${breakpoint.down`
    bottom: 16vw;
    left: 8vw;
    transform: none;
  `}
`;

const NavItem = styled(NavLink)`
  display: block;
  font-size: 18px;
  font-weight: normal;
  font-family: 'FFTisaWebLight', serif;
  margin: 32px auto;
  
  ${breakpoint.down`${fontSize(24, 32)}`}
`;

const Logo = styled(Link)`
  display: inline-block;
  font-size: 32px;
  margin: 30px 0;
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
      visible: false,
    };

    this.unlisten = this.props.history.listen(() => {
      this.setState({
        visible: false,
      });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleToggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const { visible } = this.state;
    const { location } = this.props;

    return (
      <Root hide={location.pathname === '/'}>
        <Toggle>
          <Hamburger toggle={visible} onClick={this.handleToggle} />
        </Toggle>
        <Wrapper style={{ display: visible ? 'block' : 'none' }}>
          <Logo to="/">
          <img 
            src="images/logo.svg" 
            alt="logo"
            height="22px"
            width="20px" />
          </Logo>
          <Nav>
            <NavItem to="/work" activeClassName="active">Work</NavItem>
            
            <NavItem to="/contact" activeClassName="active">Contact</NavItem>
          </Nav>
        </Wrapper>
      </Root>
    );
  }
}

export default withRouter(Sidebar);
