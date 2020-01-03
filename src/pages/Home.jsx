import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import List from "../components/List";
import SignOff from "../components/SignOff";
import { breakpoint, fontSize } from "../utils/styled";

const Introduction = styled.div`
  color: #2c2c2f;
  text-align: left;
  max-width: 750px;
  margin: 30vh auto 0;
  font-family: "FFTisaWebLight", serif;

  > p {
    ${fontSize(22, 27)}
    line-height: 1.75;
  }

  p + p {
    color: #2c2c2f;
  }
`;

const SeeMoreLink = styled(NavLink)`
  ${fontSize(24, 32)}
  display: inline-block;
  color: #2c2c2c;
  background: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  padding: 13px 34px;
  text-decoration: none;
  margin-bottom: 20vh;

  &[disabled] {
    opacity: 0.3;
  }
`;

const Home = () => (
  <div>
    <h1>
      Experience and Interaction designer in <em>London</em>.
    </h1>
    <TextMediaGrid columns={2}>
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
        link="/Hypervenom"
        media="/images/hypervenom/tile/hypervenom-tile-2.jpg"
        width="1000"
        height="900"
        flip
      >
        <h2>Nike HyperVenom</h2>
        <p>A page takeover for Nike’s most aggressive football boot.</p>
      </TextMedia>
    </TextMediaGrid>

    <SeeMoreLink to="/work">See all projects</SeeMoreLink>

    <h3>Exercises</h3>
    <p>Small and simple pieces focusing on a single problem</p>

    <TextMediaGrid columns={3} flush={true}>
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
    </TextMediaGrid>

    <h3>Writing</h3>

    <TextMediaGrid columns={3} flush={true}>
      <TextMedia
        link="/officeworks"
        media="https://www.placecage.com/800/300"
        width="800"
        height="300"
        flip
      >
        <h2>Freelancing: Part 1</h2>
        <p>An exercise in improving the car share experience.</p>
      </TextMedia>

      <TextMedia
        link="/air-max-day"
        media="https://www.placecage.com/1000/1100"
        width="1000"
        height="1100"
      >
        <h2>Agency vs Client side</h2>
        <p>An exercise in improving the car share experience.</p>
      </TextMedia>

      <TextMedia
        link="/metcon-mack"
        media="https://www.placecage.com/800/450"
        width="800"
        height="450"
        flip
      >
        <h2>Tweaking my portfolio — a mature change</h2>
        <p>An exercise in improving the car share experience.</p>
      </TextMedia>
    </TextMediaGrid>

    <List
      bullets={[
        "Make the transition from Photoshop to Sketch.",
        "Create a design and development process built on communication and piggy-backed by Zeplin",
        "Understand the importance of animated interactions to help story-telling in products and clarity in build."
      ]}
    />

    <SignOff />
  </div>
);

export default Home;
