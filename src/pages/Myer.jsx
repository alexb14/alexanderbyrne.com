import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import IntroText from "../components/IntroText";
import BodyText from "../components/BodyText";
import ProjectMeta from "../components/ProjectMeta";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import Devices from "../components/Devices";
import SignOff from "../components/SignOff";

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

      <BodyText heading="Australia's largest eCommerce retailer was falling behind" eyebrow="The problem" accent="#9A6A00">
      Myer's eCommerce infrastructure and design weren't providing customers with a inspiring and easy to use experience. 
      I was brought in to hero the design and lead a team of 3 designers to undertake a complete overhaul of myer.com.au. 
      </BodyText>

      <BodyText heading="Project Goals">
        1. Updated colour palette to improve accessibility<br></br><br></br>
        2. Structured colour usage ration to mantain a clean and consistent experience<br></br><br></br>
        3. Meticulously designed iconography<br></br><br></br>
        4. Updated typography and styles
      </BodyText>

      <BodyText heading="Getting the basics right" eyebrow="The solution" accent="#9A6A00">
        • Updated colour palette to improve accessibility<br></br>
        • Structured colour usage ration to mantain a clean and consistent experience<br></br>
        • Meticulously designed iconography<br></br>
        • Updated typography and styles
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/myer/base.jpg"
        width="2000"
        height="1320"
      />

      <BodyText heading="Homepage - Mobile">
        Text
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/myer/home-mobile.jpg"
        width="2000"
        height="1405"
      />

      <BodyText heading="Homepage - desktop" eyebrow="The solution" accent="#9A6A00">
        We also created a robust sturcture allowing the marketing team...
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/myer/home-desktop.jpg"
        width="2000"
        height="1405"
      />

      <BodyText heading="Category pages" eyebrow="The solution" accent="#9A6A00">
        Immersive feeling
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/myer/Mobile-CLP Women.png",
            width: 375,
            height: 1014,
            border: "#E6EFF2",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/myer/Mobile-CLP Toys.png",
            width: 375,
            height: 1014,
            border: "#F2E6E6",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/myer/Mobile-CLP Beauty.png",
            width: 375,
            height: 1014,
            border: "#F2EFE6",
            caption: "Caption. Inter Regular — 15/22 — #74747B",
            type: "mobile",
            radius: 30,
          },
        ]}
      />
      
      <BodyText heading="A brand new Checkout experience" eyebrow="The solution" accent="#9A6A00">
        Text
      
      </BodyText>
      <Devices
        items={[
          {
            media: "/images/myer/Desktop_Checkout.webm",
            width: 1680,
            height: 968,
            border: "#efefef",
            caption: "We created a full checkout prototype for customers to test",
            type: "full",
            radius: 40,
            video: true
            
          
          },
        ]}
      />

      <BodyText heading="Rounding out the purchasing experience" eyebrow="The solution" accent="#9A6A00">
        EDMs
      </BodyText>
          
      <FullWidthMedia
        type="hero"
        media="/images/myer/edms.jpg"
        width="2000"
        height="1405"
      />  
      
      <BodyText heading="Leading for the first time" eyebrow="Learnings & Outcomes" accent="#9A6A00">
      MMyer's new eCommerce experience was met with great excitement from customers and key stakeholders upon release in mid 2019. 
      Throughout my time as Design Lead I began to learn how to continue to upskill the design team and
       to push them to not settle on the easy idea. I loved the ongoing challenges of consistently presenting and 
       showcasing the future direction of the website to key stakeholders and wider product and marketing teams.<br></br><br></br>
       Understanding how bigger companies work with many moving parts and balancing teams needs was a great experience and one I thoroughly enjoyed.
      </BodyText>

      

      <h3>Here's a few more projects</h3>

    <TextMediaGrid columns={2} flush={true}>
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
        link="/sidneyelcon"
        media="/images/tiles/sidney-2.jpg"
        width="610"
        height="647"
        
      >
        <h2>Sidney & Elcon — Typeface design</h2>
        <p>Two custom typefaces for Australia's largest department store.</p>
      </TextMedia>

    </TextMediaGrid>

    <SignOff title="Let's make something great<br/> together." />
    </div>
  </div>
);

export default Myer;
