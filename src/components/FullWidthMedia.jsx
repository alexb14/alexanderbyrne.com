import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Video from "./Video";
import { breakpoint } from "../utils/styled";

const DesktopStyle = `
  border-top: 16px solid #e8e8e8;
  border-radius: 6px 6px 0 0;
`;

const Root = styled.div`
  margin: 18% 0 0;
  ${breakpoint.down`margin: 14% 0 0;`}
  ${props => props.type === "desktop" && DesktopStyle}
`;

const FullWidthMedia = ({ video, type, ...props }) => (
  <Root type={type}>{video ? <Video {...props} /> : <Image {...props} />}</Root>
);

export default FullWidthMedia;
