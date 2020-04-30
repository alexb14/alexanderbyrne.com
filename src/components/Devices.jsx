import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Video from "./Video";
import { breakpoint, fontSize } from "../utils/styled";

const Root = styled.div`
  margin: 16% 0 0;
`;

const Wrapper = styled.div`
  width: 100%;
  ${breakpoint.up`
  display: flex;
  justify-content: space-around;
  align-items: center;`}
  width: 116%;
  margin-left: -8%;
`;

const Caption = styled.p`
  ${fontSize(13, 15)}
  font-style: normal;
  font-weight: normal;
  line-height: 1.4;
  color: #74747b;
  margin: 0;
  margin-top: 20px;
  ${breakpoint.up`
  margin-top: 35px;`}
`;

const Item = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  ${breakpoint.up`margin-top: 35px;`}
`;

const Column = styled.div`
  display: table-cell;
  vertical-align: middle;
  img {
    border-style: solid;
  }
    ${(props) =>
      props.type === "mobile" &&
      `
    width: ${props.width}px;
    img {
      border-radius: 6px;
      border-color: ${props.border ? props.border : "transparent"};
      border-radius: ${props.radius ? props.radius : "0"}px;
      border-width: 8px;
    }
  `}
    ${(props) =>
      props.type === "desktop" &&
      `
    width: 75%;
    img {
      border-style: solid;
      border-color: ${props.border ? props.border : "transparent"};
      border-radius: ${props.radius ? props.radius : "0"}px;
      border-width: 20px;
    }
  `}
    ${(props) =>
      props.type === "full" &&
      `

    display: block;
    width: 100%;
    img {
      border-color: ${props.border ? props.border : "transparent"};
      border-radius: ${props.radius ? props.radius : "0"}px;
      border-width: 20px;
    }
  `}
    ${(props) =>
      props.type === "split" &&
      `
    width: 50%;
    img {
      border-color: ${props.border ? props.border : "transparent"};
      border-radius: ${props.radius ? props.radius : "0"}px;
      border-width: 20px;
    }
  `};
`;

const renderItem = (item, index) => (
  <Column
    type={item.type}
    width={item.width}
    border={item.border}
    radius={item.radius}
  >
    <Item key={index}>
      {item.video ? <Video {...item} /> : <Image {...item} />}
      {item.caption ? <Caption>{item.caption}</Caption> : ""}
    </Item>
  </Column>
);

const Devices = ({ items, type }) => (
  <Root type={type}>
    <Wrapper>{items.map(renderItem)}</Wrapper>
  </Root>
);

export default Devices;