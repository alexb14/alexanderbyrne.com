import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Image from './Image';
import Video from './Video';
import { fontSize, breakpoint } from '../utils/styled';

const Media = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 50%;
  position: relative;
  
  > *::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.12);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  ${breakpoint.down`
    display: block;
    width: auto;
  `}
`;

const Text = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 50%;
  position: relative;
  padding-left: 4vw;
  direction: ltr;
  text-align: left;

  ${props => props.flip && `
    padding-right: 4vw;
    padding-left: 0;
  `}

  p {
    ${fontSize(14, 18)}
    line-height: 1.7;
    color: #9E9EA6;
    
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
  margin: 40vh auto 0;
  display: table;
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

const Root = styled(({ className, ...props }) => props.to ? <NavWrapper {...props} /> : <RootWrapper {...props} />)``;

const TextMedia = ({ link, flip, video, children, ...props }) => (
  <Root to={link} style={{ direction: flip && 'rtl' }}>
    <Media>
      {video ? <Video {...props} /> : <Image {...props} />}
    </Media>
    <Text flip={flip}>
      {children}
    </Text>
  </Root>
);

export default TextMedia;
