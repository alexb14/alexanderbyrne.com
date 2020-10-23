import React from "react";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import SignOff from "../components/SignOff";

const Projects = () => (
  <div>
    <h1>A curation of works spanning freelance and full-time.</h1>
    <TextMediaGrid columns={2}>
    
    <TextMedia
        link="/myer"
        media="/images/tiles/myer-2.jpg"
        width="610"
        height="679"
        
      >
        <h2>Myer — eCommerce website</h2>
        <p>
        A brightened e-commerce experience for Australia’s largest home and fashion retailer.
        </p>
      </TextMedia>

    <TextMedia
        link="/nab"
        media="/images/tiles/nab-2.jpg"
        width="610"
        height="649"
        
      >
        <h2>National Australia Bank — App</h2>
        <p>A re-imagining of the core mobile banking experience for today and into the future.</p>
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
        link="/sidneyelcon"
        media="/images/tiles/sidney-2.jpg"
        width="610"
        height="647"
        
      >
        <h2>Sidney & Elcon — Typeface design</h2>
        <p>Two custom typefaces for Australia's largest department store.</p>
      </TextMedia>

      <TextMedia
        link="/metcon-mack"
        media="/images/tiles/nike-2.jpg"
        width="610"
        height="736"
        flip
      >
        <h2>Nike Women Metcon Mack — App + Digital Activation</h2>
        <p>An elevated digital workout experience for a Mack truck turned crossfit gym.</p>
      </TextMedia>

      <TextMedia
        link="/unlockmelbourne"
        media="/images/tiles/um-2.jpg"
        width="610"
        height="570"
        flip
      >
        <h2>Unlock Melbourne — App</h2>
        <p>Giving international students a fun and informative way to enjoy their new city.</p>
      </TextMedia>

      
    </TextMediaGrid>


    <SignOff title="Let's make something great<br/> together." />
  </div>
);

export default Projects;
