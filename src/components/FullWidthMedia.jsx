import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Video from "./Video";

const DesktopStyle = `
  border-radius: 6px;
`;

const HeroStyle = `
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const Root = styled.div`
  margin: 6% 0 0;
  ${(props) => props.type === "desktop" && DesktopStyle}
  ${(props) => props.type === "hero" && HeroStyle}
`;

const FullWidthMedia = ({ video, type, ...props }) => (
  <Root type={type}>{video ? <Video {...props} /> : <Image {...props} />}</Root>
);

export default FullWidthMedia;
