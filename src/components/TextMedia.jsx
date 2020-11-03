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

const Eyebrow = styled.h4`
  ${fontSize(9, 14)};
  margin-top: 12px;
  text-align: left;
  font-weight: 400;
  ${(props) => `color: ${props.accent};`}
`;

const Text = styled.div`
  position: relative;
  direction: ltr;
  text-align: left;

  h2 {
    ${fontSize(18, 20)}
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #000;

    ${(props) =>
      props.locked &&
      `
      padding-right: 100px;
      &:after {
        font-size: 17px!important;
        ${breakpoint.down`font-size: 13px!important;`}
        content: 'Private';
        line-height: 1;
        display: inline-block;
        color: #74747B;
        position: absolute;
        right: 0;
        top: 1px;
        background-repeat: no-repeat;
        background-position: top left;
        background-size: 10px 15px;
        padding-left: 20px;
        background-image: url("data:image/svg+xml,%3Csvg width='11' height='15' viewBox='0 0 11 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5625 14.7031H8.63281C9.60156 14.7031 10.0781 14.2266 10.0781 13.1719V7.71094C10.0781 6.76562 9.6875 6.28125 8.88281 6.20312V4.35156C8.88281 1.5625 7.03906 0.210938 5.10156 0.210938C3.15625 0.210938 1.3125 1.5625 1.3125 4.35156V6.23438C0.570312 6.35156 0.117188 6.82812 0.117188 7.71094V13.1719C0.117188 14.2266 0.59375 14.7031 1.5625 14.7031ZM2.57812 4.20312C2.57812 2.39062 3.73438 1.42188 5.10156 1.42188C6.46094 1.42188 7.61719 2.39062 7.61719 4.20312V6.1875L2.57812 6.20312V4.20312Z' fill='%2374747B'/%3E%3C/svg%3E%0A");
      }
    `}
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
  margin: 0 auto 0;
  max-width: 900px;
  text-decoration: none;
  color: #2c2c2f;
  display: block;
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

const TextMedia = ({
  link,
  disabled,
  flip,
  video,
  locked,
  accent,
  eyebrow,
  children,
  ...props
}) => (
  <div>
    <Root
      to={link}
      style={{
        direction: flip && "rtl",
        "pointer-events": disabled && "none",
      }}
    >
      <Media
        style={{
          opacity: disabled && "0.25",
        }}
      >
        {video ? <Video {...props} /> : <Image {...props} />}
      </Media>
      <Text flip={flip} locked={locked}>
        {children}
      </Text>
      {eyebrow && <Eyebrow accent={accent}>{eyebrow}</Eyebrow>}
    </Root>
  </div>
);

export default TextMedia;
