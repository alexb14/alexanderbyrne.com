import React from "react";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";

const Writing = () => (
  <div>
    <h1>Sharing my thoughts, advice, struggles and successes.</h1>
    <TextMediaGrid columns={2}>
      <TextMedia
        link="/"
        media="/images/writing/writing-1.jpg"
        width="773"
        height="610"
        flip
      >
        <h2>Preparing for real life as a freelancer</h2>
        <p>8 secrets no one tells you.</p>
      </TextMedia>
      <TextMedia
        link="/"
        media="/images/writing/writing-3.jpg"
        width="610"
        height="520"
      >
        <h2>Agency vs Client side</h2>
        <p>
          An elevated digital workout experience for a Mack truck turned
          crossfit gym.
        </p>
      </TextMedia>
      <TextMedia
        link="/"
        media="/images/writing/writing-2.jpg"
        width="610"
        height="520"
      >
        <h2>Tweaking my portfolio — A mature change</h2>
        <p>Continuous improvement and recycling what worked.</p>
      </TextMedia>
    </TextMediaGrid>
  </div>
);

export default Writing;
