import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const Media = styled.video`
  max-width: 102.9%;
  height: auto;
  margin-left: -1.45%;
  
  
`;

class Video extends Component {
  componentDidMount() {
    if (this.el) {
      const video = findDOMNode(this.el);
      video.muted = 'muted, autoPlay, PlaysInLine';
      video.play();
    }
  }

  render() {
    const { media, width, height } = this.props;
    

    return (
      <Media ref={el => this.el = el} width={width} height={height} loop="true">
        <source src={`${media}`} type="video/mp4" />
      </Media>
    );
  }
}

export default Video;
