import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import IntroText from "../components/IntroText";
import BodyText from "../components/BodyText";
import MyRole from "../components/MyRole";
import ProjectMeta from "../components/ProjectMeta";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import Devices from "../components/Devices";

const Myer = () => (
  <div>
    <IntroText heading="Myer">
      A brightened e-commerce experience for Australia’s largest home and
      fashion retailer. From content to checkout, all is new in the world of
      Myer.
    </IntroText>
    <div>
      <ProjectMeta
        details={[
          {
            label: "Role",
            value: "Design Lead",
          },
          {
            label: "When",
            value: "May, 2018 — December, 2018",
          },
          {
            label: "Heavy rotation",
            value: "Nervous Energy by Glades",
          },
        ]}
      />
      <FullWidthMedia
        type="hero"
        media="/images/myer/hero.jpg"
        width="2000"
        height="1225"
      />

      <BodyText heading="Getting the basics right">
        Myer undertook a mammoth task by launching a new site from build to
        design. Each part of the website underwent a transformation from their
        Services to the Checkout experience to the typefaces and everything
        in-between.
      </BodyText>
      <Devices
        items={[
          {
            media: "/images/myer/myer-1-test.png",
            width: 375,
            height: 1014,
            border: "#E6EFF2",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/myer/myer-2-test.png",
            width: 375,
            height: 1014,
            border: "#F2E6E6",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/myer/myer-3-test.png",
            width: 375,
            height: 1014,
            border: "#F2EFE6",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "mobile",
            radius: 30,
          },
        ]}
      />
      <Devices
        items={[
          {
            media: "/images/myer/myer-full-test.png",
            width: 1620,
            height: 934,
            border: "#E6EFF2",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "full",
            radius: 30,
          },
        ]}
      />
      <Devices
        items={[
          {
            media: "/images/myer/nab-vertical-test.png",
            width: 375,
            height: 812,
            border: "#E6EFF2",
            caption: "Large Text enabled",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/myer/nab-horizontal-test.png",
            width: 812,
            height: 375,
            border: "#F2E6E6",
            caption:
              "Improving the range of the app’s accessiblility with orientation support",
            type: "mobile",
            radius: 30,
          },
        ]}
      />
      <Devices
        items={[
          {
            media: "/images/myer/myer-full-test.png",
            width: 1620,
            height: 934,
            border: "#E6EFF2",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "full",
            radius: 30,
          },
        ]}
      />
      <Devices
        items={[
          {
            media: "/images/myer/myer-tall-test-1.png",
            width: 780,
            height: 1975,
            border: "#E6EFF2",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "split",
            radius: 30,
          },
          {
            media: "/images/myer/myer-desktop-split.jpg",
            width: 780,
            height: 1328,
            border: "#E6EFF2",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "split",
            radius: 30,
          },
        ]}
      />
      <Devices
        items={[
          {
            media: "/images/myer/myer-tall-test-1.png",
            width: 780,
            height: 1975,
            border: "#E6EFF2",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "desktop",
            radius: 30,
          },
          {
            media: "/images/myer/myer-2-test.png",
            width: 375,
            height: 1014,
            border: "#F2E6E6",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

      <MyRole roles={["Lead Designer"]} />

      <TextMediaGrid>
        <TextMedia
          link="/air-max-day"
          media="/images/airmaxday/tile/airmax-tile-2.jpg"
          width="1000"
          height="900"
        >
          <h2>Nike Air Max Day</h2>
          <p>
            A multi-layered digital experience for the most anticipated shoe
            drop of the year.
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
    </div>
  </div>
);

export default Myer;
