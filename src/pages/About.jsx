import React from "react";
import Chart from "../components/Chart";
import Copy from "../components/Copy";
import Heading from "../components/Heading";
import Quote from "../components/Quote";
import FullWidthMedia from "../components/FullWidthMedia";
import SignOff from "../components/SignOff";

const About = () => (
  <div>
    <h1>I’m a designer of digital experiences and buttery interactions.</h1>
    <Chart />
    <Heading>
      The above describes my career quicker than I could in words. I’ve helped
      brands tailor experiences and move their digital products forward.
    </Heading>
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
    <Heading>
      More recently I began freelancing to broaden my experience at different
      organisations, collaborating with diverse minds and solving exciting and
      unique problems.
    </Heading>
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
    <SignOff />
  </div>
);

export default About;
