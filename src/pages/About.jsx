import React from 'react';
import Copy from '../components/Copy';
import FullWidthMedia from '../components/FullWidthMedia';

const About = () => (
  <div>
    <h1>About</h1>
    <Copy>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin ligula vel convallis suscipit.</Copy>
    <FullWidthMedia media="http://placehold.it/400x300" width="400" height="300" />
  </div>
);

export default About;
