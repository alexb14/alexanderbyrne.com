import React from "react";
import styled from "styled-components";

const Root = styled.button`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid rgba(116, 116, 123, 0.5);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);

  ${props => props.toggle && "border-color: transparent; box-shadow: none;"}

  &:focus {
    outline: 0;
  }
`;

const Text = styled.span`
  display: block;
  font-size: 14px;
  line-height: 26px;
`;

const Hamburger = ({ toggle, onClick }) => (
  <Root toggle={toggle} onClick={onClick}>
    <Text>{toggle ? "× Close" : "→ Menu"}</Text>
  </Root>
);

export default Hamburger;
