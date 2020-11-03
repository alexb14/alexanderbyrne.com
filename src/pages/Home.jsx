import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import List from "../components/List";
import SignOff from "../components/SignOff";
import { breakpoint, fontSize } from "../utils/styled";

const SeeMoreLink = styled(NavLink)`
  ${fontSize(24, 32)}
  display: inline-block;
  color: #2c2c2c;
  background: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 32px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  padding: 12px 40px;
  text-decoration: none;
  margin-bottom: 12%;
  transition: all 200ms ease;

  &:hover {
    color: #fff;
    background: #2c2c2c;
  }

  ${breakpoint.down`margin-bottom: 24%; background: #2c2c2c; color: #fff;`}

  &[disabled] {
    opacity: 0.3;
  }
`;

const Home = () => (
  <div>
    <h1>Product, App and eCommerce Design Lead in London.</h1>
    <TextMediaGrid columns={2}>
    <TextMedia
        link="/nab"
        media="/images/tiles/nab-1.png"
        width="610"
        height="649"
        
      >
        <h2>National Australia Bank — App</h2>
        <p>A re-imagining of the core mobile banking experience for today and into the future.</p>
      </TextMedia>

      <TextMedia
        link="/sidneyelcon"
        media="/images/tiles/sidney-2.jpg"
        width="610"
        height="647"
        
      >
        <h2>Sidney & Elcon — Typeface design</h2>
        <p>Two custom typefaces for Australia's largest department store.</p>
      </TextMedia>

      
      <TextMedia
        link="/myer"
        media="/images/tiles/myer-2.jpg"
        width="610"
        height="736"
        
      >
        <h2>Myer — eCommerce website</h2>
        <p>
        A brightened e-commerce experience for Australia’s largest home and fashion retailer.
        </p>
      </TextMedia>

      <TextMedia
        link="/polk"
        media="/images/tiles/polk-2.jpg"
        width="610"
        height="590"
        flip
      >
        <h2>Polk Audio — eCommerce website</h2>
        <p>
        A product-first redesign for a heritage American audio company.
        </p>
      </TextMedia>

      <TextMedia
        link="/unlockmelbourne"
        media="/images/tiles/um-3.jpg"
        width="610"
        height="520"
        flip
      >
        <h2>Unlock Melbourne — App</h2>
        <p>Giving international students a fun and informative way to enjoy their new city.</p>
      </TextMedia>

      <TextMedia
        link="/metcon-mack"
        media="/images/projects/metconmack-tile2.png"
        width="610"
        height="736"
        flip
      >
        <h2>Nike Women Metcon Mack — App + Digital Activation</h2>
        <p>An elevated digital workout experience for a Mack truck turned crossfit gym.</p>
      </TextMedia>

      
    </TextMediaGrid>

    <SeeMoreLink to="/projects">See all projects ⟶</SeeMoreLink>

    

    <h3>Writing</h3>

    <TextMediaGrid columns={2} flush={true}>
      <TextMedia
        link="https://uxdesign.cc/the-evolving-design-of-the-coronavirus-e9c1392d4649"
        media="/images/writing/covid19-small2.png"
        width="610"
        height="452"
        eyebrow="Example Text" 
        accent="#666666"
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
        flip
      >
        <h2>Little Features: Project management in Design Tools</h2>
        <p>What would it look like if the techniques and practices of Project/Product Management made their way into design tools.</p>
      </TextMedia>

    </TextMediaGrid>
    <SeeMoreLink to="/writing">See all writing ⟶</SeeMoreLink>

   

    <SignOff title="Let's make something great<br/> together." />
  </div>
);

export default Home;
