import React from "react";
import TextMediaExternal from "../components/TextMediaExternal";
import TextMediaGrid from "../components/TextMediaGrid";
import SignOff from "../components/SignOff";

const Plugins = () => (
  <div>
    <h1>Automating the design process for all</h1>
    <TextMediaGrid columns={2}>
    <TextMediaExternal
        link="https://uxdesign.cc/the-evolving-design-of-the-coronavirus-e9c1392d4649"
        media="/images/writing/covid19-small2.png"
        width="960"
        height="700"
        eyebrow="Featured by UX Collective ★" 
        accent="#00add8"
        flip
      >
        <h2>The evolving design of the Coronavirus</h2>
        <p>The podium placard has been the silent messenger of the daily Coronavirus briefings.</p>
      </TextMediaExternal>

      <TextMediaExternal
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
      </TextMediaExternal>


    </TextMediaGrid>
    <SignOff title="Let's make something great<br/> together." />
  </div>
);

export default Writing;
