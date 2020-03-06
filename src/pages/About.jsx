import React from "react";
import Copy from "../components/Copy";
import Quote from "../components/Quote";
import FullWidthMedia from "../components/FullWidthMedia";

const About = () => (
  <div>
    <h1>I’m a designer of digital experiences and buttery interactions.</h1>
    <FullWidthMedia
      media="https://www.placecage.com/c/800/300"
      width="800"
      height="300"
    />
    <Quote
      avatar="https://www.placecage.com/c/96/96"
      citation="Tim Kotsiakos — Founder & Creative Director, M A S S"
    >
      “Alex has been brilliant to work with. He has a keen eye for detail, great
      taste and very good on the tools. He’s also great at working with other
      designers and working directly with clients. He’s been working in our
      studio on an off for a couple of years and has been great culturally. I
      would have him back in our studio in a heartbeat. We wish him all the best
      in whatever he does next.”
    </Quote>
    <Quote
      avatar="https://www.placecage.com/c/96/96"
      citation="Courtney Hunt — Design Manager, MYER"
    >
      “Alex is an exceptionally talented designer and all round good human
      being. At Myer, Australia’s largest department store, we were working on
      the new mobile first shopping site. I hired Alex to work with all
      designers across 4 product teams to implement a design system. He also
      designed all the content pages for the new website creating reusable and
      responsive modules. Both of these required a lot of team work and
      stakeholder management which comes naturally to Alex. He was also
      proactive in identifying design opportunities and able to autonomously
      manage his work. I would love any opportunity to work with Alex again.”
    </Quote>
    <Copy>
      Todo - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      sollicitudin ligula vel convallis suscipit
    </Copy>
  </div>
);

export default About;
