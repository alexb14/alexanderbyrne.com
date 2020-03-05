import React from "react";
import Copy from "../components/Copy";
import FullWidthMedia from "../components/FullWidthMedia";

const About = () => (
  <div>
    <h1>I’m a designer of digital experiences and buttery interactions.</h1>
    <FullWidthMedia
      media="https://www.placecage.com/c/800/300"
      width="800"
      height="300"
    />
    <Copy>
      Todo - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      sollicitudin ligula vel convallis suscipit
    </Copy>
  </div>
);

export default About;
