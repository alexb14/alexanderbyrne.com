import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import IntroText from "../components/IntroText";
import BodyText from "../components/BodyText";
import MyRole from "../components/MyRole";
import ProjectMeta from "../components/ProjectMeta";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import Devices from "../components/Devices";
import Quote from "../components/Quote";
import SignOff from "../components/SignOff";
import Video from "../components/Video";

const sidneyelcon = () => (
  <div>
    <IntroText heading="Sidney Sans & Elcon Serif">
    Two custom typeafces designed in partnership for Australia’s largest fashion retailer. 
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

      <BodyText>
      During my time as Design Lead at Myer, we undertook a project to create two new typefaces for the brand. 
      We aimed to embody the feeling of approachable design and high-end fashion in each typeface. 
      
      </BodyText>

      <BodyText heading="Sidney Sans">
      Named after the founder on Myer, Sidney is a geometric sans serif typeface boasting simplified characters 
      that have been designed to increase legibility and acccessibility. Sidney Sans has been designed to work in 
      both Regular and Bold. Notice the speicialised to keep the typeface simple yet uniquely Myer.
      </BodyText>


      <FullWidthMedia
        type="hero"
        media="/images/sidney/sidney-alpha.jpg"
        width="2000"
        height="900"
      />

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

      <FullWidthMedia
        type="hero"
        media="/images/sidney/characters.jpg"
        width="2000"
        height="600"
      />
      
      <BodyText heading="Elcon Serif">
      Partnering Sidney Sans as Myer’s primary typefaces, this type was designed to be used for all things fashion, 
      elegance, beauty and rewards. While Myer has to appeal to a large market we wanted a typeface we could reserve 
      for the luxury and premier aspects of the brand.
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/sidney/eclon-alpha.jpg"
        width="2000"
        height="940"
      />

      <FullWidthMedia
        type="hero"
        media="/images/sidney/eclon-weights.jpg"
        width="2000"
        height="940"
      />

      

      <BodyText>
      Both typefaces were workshopped, designed and created with the help from the team at The Designers Foundry. 
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
