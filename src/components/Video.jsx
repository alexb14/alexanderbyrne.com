import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const Media = styled.video`
  max-width: 100%;
  height: auto;
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
    const ratio = Math.round((height / width) * 100);

    return (
      <Media ref={el => this.el = el} width={width} height={height} loop="true">
        <source src={`${media}`} type="video/mp4" />
      </Media>
    );
  }
}

export default Video;
