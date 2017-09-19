import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  margin-top: 12vw;
  margin-bottom: -60vw;
`;

const Media = styled.video`
  position: centre;
  top: 0;
  left: 0;
  bottom: 0;
  width: 562px;
  height: 1000px;
`;

class Video extends Component {
  componentDidMount() {
    if (this.el) {
      const video = findDOMNode(this.el);
      video.muted = 'muted';
      video.play();
    }
  }

  render() {
    const { media, width, height } = this.props;
    const ratio = (height / width) * 100;

    return (
      <Root style={{ paddingBottom: `${ratio}%` }}>
        <Media ref={el => this.el = el} loop="true">
          <source src={`${media}.mp4`} type="video/mp4" />
          <source src={`${media}.ogv`} type="video/ogg" />
          <source src={`${media}.webm`} type="video/webm" />
        </Media>
      </Root>
    );
  }
}

export default Video;
