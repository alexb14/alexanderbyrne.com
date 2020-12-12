import React from "react";
import styled from "styled-components";
import { breakpoint, fontSize } from "../utils/styled";

const Root = styled.div`
  ${fontSize(18, 24)}
  font-weight: normal;
  line-height: 1.6;
  color: #202123;
  letter-spacing: -0.7;
  margin-top: 16%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin: 8px 0;
  text-align: left;
`;

const Link = styled.a`
  color: #323235;
  text-decoration: none;
  padding: 0 0 8px 0;
  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    transition: transform 200ms ease;
    transform: translateX(10px) translateY(-2px);
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.08523 13.6193L11.9716 3.71591L11.9545 11.3523H13.8125V0.545454H3.02273L3.00568 2.38636H10.642L0.755682 12.2898L2.08523 13.6193Z' fill='%23323235'/%3E%3C/svg%3E%0A");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 12px 12px;
    width: 12px;
    height: 12px;
  }
  ${breakpoint.up`
  &:after {
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
  }
  &:hover {
    border-bottom: 0;
    &:after {
      transform: translateX(20px) translateY(-10px);
    }
  }`}
`;

const SocialLinks = () => (
  <Root>
    <List>
      <Item>
        <Link href="https://dribbble.com/AlexByrne" target="_blank">
          Dribbble
        </Link>
      </Item>
      <Item>
        <Link href="https://medium.com/@AlexByrne14" target="_blank">
          Medium
        </Link>
      </Item>
      <Item>
        <Link href="https://www.linkedin.com/in/byrnealex" target="_blank">
          LinkedIn
        </Link>
      </Item>
      <Item>
        <Link href="https://www.dropbox.com/s/1az1wx9f6y6i5qx/AlexanderByrne_Designer_CV.pdf?dl=0" target="_blank">
          CV
        </Link>
      </Item>
    </List>
  </Root>
);

export default SocialLinks;
