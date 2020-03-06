import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import MediaGrid from "../components/MediaGrid";
import Copy from "../components/Copy";
import MyRole from "../components/MyRole";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";

const AirMaxDay = () => (
  <div>
    <h1>Air Max Day</h1>
    <div>
      <FullWidthMedia
        media="/images/airmaxday/hero/airmax-hero.gif"
        width="1920"
        height="1080"
      />
      <Copy>
        A multi-layered digital experience for one of the most anticipated shoe
        drops of the year
      </Copy>
      <FullWidthMedia
        type="desktop"
        media="/images/airmaxday/desktop/airmax-grid-timer@2x.png"
        width="3600"
        height="2048"
      />
      <Copy>
        Four Air Max silhouettes, four different release dates; four unique
        digital experiences
      </Copy>
      <MediaGrid
        items={[
          {
            media: "/images/airmaxday/desktop/OG-1.png",
            width: 1800,
            height: 1024
          },
          {
            media: "/images/airmaxday/desktop/Atmos-1.png",
            width: 1800,
            height: 1024
          },
          {
            media: "/images/airmaxday/desktop/Master-1.png",
            width: 1800,
            height: 1024
          },
          {
            media: "/images/airmaxday/desktop/Vapor-1.png",
            width: 1800,
            height: 1024
          }
        ]}
      />
      <MediaGrid
        type="mobile"
        items={[
          {
            media: "/images/airmaxday/mobile/Mockup-OG@2x.png",
            width: 375,
            height: 667
          },
          {
            media: "/images/airmaxday/mobile/Mockup-Master@2x.png",
            width: 375,
            height: 667
          },
          {
            media: "/images/airmaxday/mobile/Mockup-Atmos@2x.png",
            width: 375,
            height: 667
          },
          {
            media: "/images/airmaxday/mobile/Mockup-VaporMax@2x.png",
            width: 375,
            height: 667
          }
        ]}
      />
      <MediaGrid
        items={[
          {
            media: "/images/airmaxday/desktop/Vapor-1.png",
            width: 1800,
            height: 1024
          },
          {
            media: "/images/airmaxday/desktop/Vapor-2.png",
            width: 1800,
            height: 1024
          },
          {
            media: "/images/airmaxday/desktop/Vapor-3.png",
            width: 1800,
            height: 1024
          },
          {
            media: "/images/airmaxday/desktop/Vapor-4.png",
            width: 1800,
            height: 1024
          }
        ]}
      />

      <MediaGrid
        type="mobile"
        items={[
          {
            media: "/images/airmaxday/mobile/V-1@2x.png",
            width: 375,
            height: 667
          },
          {
            media: "/images/airmaxday/mobile/V-3@2x.png",
            width: 375,
            height: 667
          },
          {
            media: "/images/airmaxday/mobile/V-2@2x.png",
            width: 375,
            height: 667
          },
          {
            media: "/images/airmaxday/mobile/V-4@2x.png",
            width: 375,
            height: 667
          }
        ]}
      />

      <MyRole roles={["Lead Designer", "Art Direction"]} />

      <TextMediaGrid>
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

        <TextMedia
          link="/officeworks"
          media="/images/officeworks/tile/ow-tile.png"
          width="800"
          height="900"
        >
          <h2>Officeworks</h2>
          <p>Modernising a national legacy brand website.</p>
        </TextMedia>
      </TextMediaGrid>
    </div>
  </div>
);

export default AirMaxDay;
