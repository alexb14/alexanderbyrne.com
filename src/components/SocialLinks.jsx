import React from "react";
import styled from "styled-components";
import { fontSize } from "../utils/styled";

const Root = styled.div`
  ${fontSize(18, 24)}
  font-weight: normal;
  line-height: 1.6;
  color: #202123;
  letter-spacing: -0.7;
  margin-top: 194px;
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

  &:hover {
    border-bottom: 1px solid #2c2c2f;
  }
`;

const SocialLinks = () => (
  <Root>
    <List>
      <Item>
        <Link href="https://dribbble.com/AlexByrne" target="_blank">
          Dribbble ↗
        </Link>
      </Item>
      <Item>
        <Link href="https://medium.com" target="_blank">
          Medium ↗
        </Link>
      </Item>
      <Item>
        <Link href="https://www.linkedin.com/in/byrnealex" target="_blank">
          LinkedIn ↗
        </Link>
      </Item>
    </List>
  </Root>
);

export default SocialLinks;
