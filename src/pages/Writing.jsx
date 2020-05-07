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
        <h2>The evolcing design of the Coronavirus</h2>
        <p>8 secrets no one tells you.</p>
      </TextMedia>
      
    </TextMediaGrid>
    <SignOff title="Let's make something great<br/> together." />
  </div>
);

export default Writing;
