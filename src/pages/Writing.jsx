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
        link="https://uxdesign.cc/the-evolving-design-of-the-coronavirus-e9c1392d4649"
        media="/images/writing/pm-design.png"
        width="610"
        height="400"
    
      >
        <h2>Little Features: Project management in Design Tools</h2>
        <p>What would it look like if the techniques and practices of Project/Product Management made their way into design tools.</p>
      </TextMedia>

      <TextMedia
        link="https://uxdesign.cc/the-evolving-design-of-the-coronavirus-e9c1392d4649"
        media="/images/writing/maps.png"
        width="890"
        height="660"
    
      >
        <h2>Little Features: Project management in Design Tools</h2>
        <p>What would it look like if the techniques and practices of Project/Product Management made their way into design tools.</p>
      </TextMedia>

      

      

      
    </TextMediaGrid>
    <SignOff title="Let's make something great<br/> together." />
  </div>
);

export default Writing;
