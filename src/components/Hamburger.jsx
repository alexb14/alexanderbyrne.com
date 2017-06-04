import React from 'react';
import styled from 'styled-components';

const HamburgerIcon = `
  display: inline-block;
  width: 24px;
  height: 2px;
  font-size: 0;
  margin-bottom: 4px;
  transition: transform .2s ease-in-out;
  background: #46474b;
`;

const Root = styled.button`
  font-size: 0;
  width: 64px;
  height: 64px;
  cursor: pointer;
  transition: transform .2s ease-in-out;
  border-radius: 100%;
  padding: 20px;
  border: 1px solid #e1e1e1;
  background: #ffffff;
  ${props => props.toggle && 'border: 0;'}
  
  &:focus {
    outline: 0;
  }
  
  &::before,
  &::after {
    content: '';
    ${HamburgerIcon}
  }
  
  &::before {
    ${props => props.toggle && 'transform: translateY(6px) rotate(135deg);'}
  }
  
  &::after {
    margin-bottom: 0;
    ${props => props.toggle && 'transform: translateY(-6px) rotate(-135deg);'}
  }
`;

const Icon = styled.div`
  ${HamburgerIcon}
  ${props => props.toggle && 'transform: scale(0);'}
`;

const Hamburger = ({ toggle, onClick }) => (
  <Root toggle={toggle} onClick={onClick}>
    <Icon toggle={toggle} />
  </Root>
);

export default Hamburger;
