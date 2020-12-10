import React from "react";
import Chart from "../components/Chart";
import Heading from "../components/Heading";
import Quote from "../components/Quote";
import SignOff from "../components/SignOff";

const About = () => (
  <div>
    <h1>I’m a designer of digital experiences and buttery interactions.</h1>
    <div>
      <Chart />
      <Heading>
      I’ve worked for product companies and digital agencies globally
      to help shift the dial through experience design.
      </Heading>
      <Quote
        avatar="images/quotes/andy.jpg"
        citation="Andy Summerton — Head of UX, National Australia Bank"
      >
        “I've worked with Alex both at Tundra Interactive and National Australia Bank. 
        Alex is a deep thinker and strategic designer that's obsessed with customer outcomes. 
        A rare breed that can translate product, CX/UX and strategy need into elegant, aesthetically beautiful, highly functional experiences. 
His process is a well oiled machine, he 'goes wide' and tackles problems from all angles – highly motivated and engaged along the way. 
His work, which speaks for itself, is detail focussed, but doesn't lose sight of the big picture. 
I'd recommend Alex to those who want to make an impact.”
      </Quote>
      <Heading>
      I'm passionate about providing users with frictionless and accessible experiences. 
      </Heading>
      <Quote
        avatar="images/quotes/tim.jpeg"
        citation="Tim Kotsiakos — Founder, M A S S"
      >
        “Alex has been brilliant to work with. He has a keen eye for detail,
        great taste and very good on the tools. He’s also great at working with
        other designers and working directly with clients. He’s been working in
        our studio on an off for a couple of years and has been great
        culturally. I would have him back in our studio in a heartbeat. We wish
        him all the best in whatever he does next.”
      </Quote>
      <Heading>
      Recently, I’ve been working with diverse minds and solving exciting and
        unique problems.
      </Heading>
      <Quote
        avatar="images/quotes/courtney.jpeg"
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
  </div>
);

export default About;
