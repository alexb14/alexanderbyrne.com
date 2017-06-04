import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 0;
`;

const Media = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Image = ({ media, width, height }) => {
  const ratio = (height / width) * 100;

  return (
    <Root style={{ paddingBottom: `${ratio}%` }}>
      <Media src={media} />
    </Root>
  );
};

export default Image;
