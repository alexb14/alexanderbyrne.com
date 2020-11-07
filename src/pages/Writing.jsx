import React from "react";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import SignOff from "../components/SignOff";

const Writing = () => (
  <div>
    <h1>Sharing my thoughts, advice, struggles and successes.</h1>
    <TextMediaGrid columns={2}>
      <TextMedia
        link="https://uxdesign.cc/the-evolving-design-of-the-coronavirus-e9c1392d4649"
        media="/images/writing/covid19.png"
        width="610"
        height="452"
        flip
      >
        <h2>The evolving design of the Coronavirus</h2>
        <p>The podium placard has been the silent messenger of the daily Coronavirus briefings. • Featured in UXDesign CC</p>
      </TextMedia>

      <TextMedia
        link="https://uxdesign.cc/the-two-google-apps-that-dont-talk-to-each-other-but-should-30770184da4e"
        media="/images/writing/article-google.jpg"
        width="610"
        height="400"
        eyebrow="Featured by UX Collective ★" 
        accent="#00add8"
        flip
      >
        <h2>Rapid prototyping calendar Events into Google Maps</h2>
        <p>Removing the friction between two Google apps.</p>
      </TextMedia>


    </TextMediaGrid>
    <SignOff title="Let's make something great<br/> together." />
  </div>
);

export default Writing;
