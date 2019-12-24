import React from "react";
import styled from "styled-components";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import SignOff from "../components/SignOff";

const TripleMediaGrid = styled(TextMediaGrid)`
  column-count: 4;
  background: red;
  * {
    background: red;
  }
`;

const Work = () => (
  <div>
    <h1>A curation of works spanning freelance and full-time.</h1>
    <TextMediaGrid>
      <TextMedia
        link="/officeworks"
        media="/images/officeworks/tile/ow-tile.png"
        width="800"
        height="900"
        flip
      >
        <h2>Officeworks</h2>
        <p>Modernising a national legacy brand website.</p>
      </TextMedia>

      <TextMedia
        link="/air-max-day"
        media="/images/airmaxday/tile/airmax-tile-2.jpg"
        width="1000"
        height="900"
      >
        <h2>Nike Air Max Day</h2>
        <p>
          A multi-layered digital experience for the most anticipated shoe drop
          of the year.
        </p>
      </TextMedia>

      <TextMedia
        link="/metcon-mack"
        media="/images/metcon-mack/Tile/metcon-2.png"
        width="1100"
        height="1100"
        flip
      >
        <h2>NikeWomen Metcon Mack</h2>
        <p>
          An elevated digital workout experience for a Mack truck turned
          crossfit gym.
        </p>
      </TextMedia>

      <TextMedia
        link="/ibl"
        media="/images/ibl/tile/tile@2x.png"
        width="600"
        height="600"
      >
        <h2>IBL</h2>
        <p>Creating a new chapter for a historic name in British lighting.</p>
      </TextMedia>

      <TextMedia
        link="/Hypervenom"
        media="/images/hypervenom/tile/hypervenom-tile-2.jpg"
        width="1000"
        height="900"
        flip
      >
        <h2>Nike Hypervenom</h2>
        <p>A page takeover for Nike’s most aggressive football boot.</p>
      </TextMedia>
    </TextMediaGrid>

    <h3>Projects coming soon</h3>

    <TripleMediaGrid>
      <TextMedia
        link="/officeworks"
        media="/images/officeworks/tile/ow-tile.png"
        width="800"
        height="900"
        flip
      >
        <h2>Officeworks</h2>
        <p>Modernising a national legacy brand website.</p>
      </TextMedia>

      <TextMedia
        link="/air-max-day"
        media="/images/airmaxday/tile/airmax-tile-2.jpg"
        width="1000"
        height="900"
      >
        <h2>Nike Air Max Day</h2>
        <p>
          A multi-layered digital experience for the most anticipated shoe drop
          of the year.
        </p>
      </TextMedia>

      <TextMedia
        link="/metcon-mack"
        media="/images/metcon-mack/Tile/metcon-2.png"
        width="1100"
        height="1100"
        flip
      >
        <h2>NikeWomen Metcon Mack</h2>
        <p>
          An elevated digital workout experience for a Mack truck turned
          crossfit gym.
        </p>
      </TextMedia>
    </TripleMediaGrid>

    <SignOff />
  </div>
);

export default Work;
