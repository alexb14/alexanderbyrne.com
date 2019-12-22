import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import Image from "./Image";
import Video from "./Video";
import { fontSize, breakpoint } from "../utils/styled";

const Media = styled.div`
  display: block;
  vertical-align: middle;
  width: 100%;
  position: relative;
  margin-bottom: 30px;

  > *::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  ${breakpoint.down`
    display: block;
    width: auto;
  `}
`;

const Text = styled.div`
  position: relative;
  direction: ltr;
  text-align: left;

  h2 {
    ${fontSize(18, 20)}
    font-family: 'NeutrifPro-Regular', sans-serif;
    color: #000;
  }

  p {
    ${fontSize(14, 17)}
    line-height: 1.5;
    color: #323235;
    margin-top: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${breakpoint.down`
    display: block;
    width: auto;
    margin-top: 32px;
    padding: 0;
  `}
`;

const RootStyle = css`
  margin: 31vh auto 0;
  max-width: 900px;
  text-decoration: none;
  color: #2c2c2f;
`;

const RootWrapper = styled.div`
  ${RootStyle}
`;

const NavWrapper = styled(NavLink)`
  ${RootStyle}
  
  &:hover > ${Media} > *::after {
    opacity: 1;
  }
`;

const Root = styled(({ className, ...props }) =>
  props.to ? <NavWrapper {...props} /> : <RootWrapper {...props} />
)``;

const TextMedia = ({ link, flip, video, children, ...props }) => (
  <div>
    <Root to={link} style={{ direction: flip && "rtl" }}>
      <Media>{video ? <Video {...props} /> : <Image {...props} />}</Media>
      <Text flip={flip}>{children}</Text>
    </Root>
  </div>
);

export default TextMedia;
