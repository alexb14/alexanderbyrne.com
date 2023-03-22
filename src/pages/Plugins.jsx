import React from "react";
import TextMediaExternal from "../components/TextMediaExternal";
import TextMediaGrid from "../components/TextMediaGrid";
import SignOff from "../components/SignOff";

const Plugins = () => (
  <div>
    <h1>Automating the design process <br></br>for all</h1>
    <TextMediaGrid columns={2}>
    <TextMediaExternal
        link="https://www.figma.com/community/plugin/1170435953164718580"
        media="/images/tiles/lightning.png"
        width="1920"
        height="960"
        flip
      >
        <h2>Lightning • Content populator</h2>
        <p>Instantly input realistic dates, names, addresses, emails, currencies and more.</p>
      </TextMediaExternal>

      <TextMediaExternal
        link="https://www.figma.com/community/plugin/1170033469814190062"
        media="/images/tiles/dawn.png"
        width="1920"
        height="960"
        flip
      >
        <h2>Dawn • File starter</h2>
        <p>Instantly set up your page scaffold to speed up your workflow more than 100x.</p>
      </TextMediaExternal>


    </TextMediaGrid>
    <SignOff title="Let's make something great<br/> together." />
  </div>
);

export default Plugins;
