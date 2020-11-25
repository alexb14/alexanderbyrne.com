import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import IntroText from "../components/IntroText";
import BodyText from "../components/BodyText";
import ProjectMeta from "../components/ProjectMeta";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import Devices from "../components/Devices";
import SignOff from "../components/SignOff";

const sidneyelcon = () => (
  <div>
    <IntroText heading="Sidney Sans & Elcon Serif">
    Two custom typefaces designed in partnership for Australia’s largest fashion retailer. 
    Touching on style, respecting heritage and focusing on accessibility, these two types are the new face of Myer.
    </IntroText>
    <div>
      <ProjectMeta
        details={[
          {
            label: "Role",
            value: "Art & Creative Direction",
          },
          {
            label: "When",
            value: "May — December, 2018",
          },
          {
            label: "Heavy rotation",
            value: "Crystaline by The Midnight",
          },
        ]}
      />
      <FullWidthMedia
        type="hero"
        media="/images/sidney/hero.png"
        width="2000"
        height="1138"
      />

      <BodyText heading="Expensive, inaccessible typefaces" eyebrow="The Problem" accent="#643986">
      Myer faced growing costs to license typefaces for their digital products, 
      This, paired with striving to meet greater accessibility compliance, brought Myer 
      towards creating new custom typefaces that were built with elegance and accessibility in mind. 
      </BodyText>

      <BodyText heading="Research and partnering with experts" eyebrow="The approach" accent="#643986">
      As Design Lead, I lead the Art & Creative direction for the two custom typefaces for Myer. 
      We researched how to make typefaces more accessible and legible at small digital sizes and how to embody the feeling of an approachable yet high-end fashion design.
      Partnering with amazing team at The Design Foundry we began exploring a Serif and Sans Serif typeface for Australia's largest retailer. 
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/sidney/approach.png"
        width="2050"
        height="730"
      />

      <BodyText heading="Sidney Sans" eyebrow="The Sans Serif solution" accent="#643986">
      Named after the founder of Myer, Sidney is a geometric sans serif typeface boasting simplified characters 
      that have been designed to increase legibility and accessibility. Sidney Sans has been designed to work in 
      both Regular and Bold. Notice the specialised characters to keep the typeface simple yet uniquely Myer.
      </BodyText>


      <FullWidthMedia
        type="hero"
        media="/images/sidney/sidney-alpha.jpg"
        width="2000"
        height="810"
      />
      
      <BodyText heading="Our new primary digital typeface" eyebrow="The Sans Serif solution" accent="#643986">
      We went through multiple variations and versions of the typeface to find the perfect balance across our digital products. 
      Sidney needed to work perfectly at small and large sizes, within UI components and pair beautifully with typical design assets.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/sidney/home.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/sidney/category.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/sidney/product.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

      <BodyText heading="The smaller details" eyebrow="The Sans Serif solution" accent="#643986">
      We stressed over the finer details of this Sans Serif typeface, creating alt characters to use in powerful headings, increasing apertures and adding details to improve accessible and creating a unique & to bring further personality to the typeface.
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/sidney/characters.jpg"
        width="2000"
        height="400"
      />
      
      <BodyText heading="Elcon Serif" eyebrow="The Serif solution" accent="#643986">
      Partnering Sidney Sans as Myer’s primary typefaces, this type was designed to be used for all things fashion, 
      elegance, beauty and rewards. While Myer has to appeal to a large market we wanted a typeface we could reserve 
      for the luxury and premier aspects of the brand.
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/sidney/eclon-mocks.jpg"
        width="2000"
        height="1140"
      />

      <FullWidthMedia
        type="hero"
        media="/images/sidney/eclon-weights-2.jpg"
        width="2000"
        height="680"
      />

      <Devices
        items={[
          {
            media: "/images/sidney/Cards-Animation.webm",
            width: 1750,
            height: 1000,
            border: "#000",
            caption: " ",
            type: "full",
            radius: 40,
            video: true
          },
        ]}
      />  
      

      <BodyText heading="An even stronger appreciation" eyebrow="Learnings & Outcomes" accent="#643986">
      Typeface design is an entire other ball game. The consistency, fine-tuning and scale is an amazing challenge for a designer. 
      Collaborating closely and talking often with the team the TDF was crucial for the success of this project for the digital team and wider Myer brand.
      Both typefaces began rolling out to all digital projects in early 2019. 
      </BodyText>


      <h3>Here's a few more projects</h3>

    <TextMediaGrid columns={2} flush={true}>
    <TextMedia
        link="/myer"
        media="/images/projects/myer-tile2.png"
        width="610"
        height="736"
        flip
      >
        <h2>Myer — eCommerce website</h2>
        <p>
        A brightened e-commerce experience for Australia’s largest home and fashion retailer.
        </p>
      </TextMedia>

      <TextMedia
        link="/unlockmelbourne"
        media="/images/projects/unlockmelb-tile.png"
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

      <TextMedia
        link="/nab"
        media="/images/projects/nab-tile2.png"
        width="610"
        height="649"
        locked
      >
        <h2>National Australia Bank — App</h2>
        <p>A re-imagining of the core mobile banking experience for today and into the future.</p>
      </TextMedia>

    </TextMediaGrid>

    <SignOff title="Let's make something great<br/> together." />
  



     
    </div>
  </div>
);

export default sidneyelcon;
