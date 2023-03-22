import React from "react";
import TextMediaExternal from "../components/TextMediaExternal";
import TextMediaGrid from "../components/TextMediaGrid";
import SignOff from "../components/SignOff";

const Plugins = () => (
  <div>
    <h1>Automating the design process <br></br>for all</h1>
    <TextMediaGrid columns={2}>
    <TextMediaExternal
        link="https://uxdesign.cc/the-evolving-design-of-the-coronavirus-e9c1392d4649"
        media="/images/tiles/lightning.png"
        width="1920"
        height="960"
        eyebrow="Featured by UX Collective ★" 
        accent="#00add8"
        flip
      >
        <h2>Lightning • Content populator</h2>
        <p>The podium placard has been the silent messenger of the daily Coronavirus briefings.</p>
      </TextMediaExternal>

      <TextMediaExternal
        link="https://uxdesign.cc/the-two-google-apps-that-dont-talk-to-each-other-but-should-30770184da4e"
        media="/images/tiles/dawn.png"
        width="1920"
        height="960"
        flip
      >
        <h2>Dawn • File starter</h2>
        <p>Removing the friction between two Google apps.</p>
      </TextMediaExternal>


    </TextMediaGrid>
    <SignOff title="Let's make something great<br/> together." />
  </div>
);

export default Plugins;
