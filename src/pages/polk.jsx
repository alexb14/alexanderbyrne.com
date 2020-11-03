import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import IntroText from "../components/IntroText";
import BodyText from "../components/BodyText";
import ProjectMeta from "../components/ProjectMeta";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import Devices from "../components/Devices";
import Quote from "../components/Quote";
import SignOff from "../components/SignOff";


const polk = () => (
  <div>
    <IntroText heading="Polk Audio">
    Bringing an accessible and aspirational experience to over 6 million mobile banking customers today and into the future.  
    </IntroText>
    <div>
      <ProjectMeta
        details={[
          {
            label: "Design Lead",
            value: "Analysis, Research, UX, Prototyping, UI and Mentorship",
          },
          {
            label: "When",
            value: "May — August, 2020",
          },
          {
            label: "Heavy rotation",
            value: "Crystaline by The Midnight",
          },
        ]}
      />
      <FullWidthMedia
        type="hero"
        media="/images/polk/assets/hero-1.jpg"
        width="2000"
        height="1200"
      />

      <BodyText heading="First things first — Analysis">
      In the beginning, we wanted to establish a firm understanding of Polk’s online performance. 
      We sifted through Google Analytics as well as up to date heat map data.
      <br></br>
      <br></br>
      From this we dove into strategising how to improve the bigger problem areas as well as the talking the client 
      through how the getting the small 1% correct could make a big impact on conversion. 
      </BodyText>


      <FullWidthMedia
        type="hero"
        media="/images/polk/GA-data.png"
        width="2000"
        height="868"
      />
      
      <BodyText heading="A simpler foundation">
      After our analysis and early customer research we overhauled Polk’s sitemap to create a simpler and more logical structure. 
      Not only did this strengthen the foundation of the new build it also enabled the devlopment team to start bringing the new site to life.
      </BodyText>

      <FullWidthMedia
        type="desktop"
        media="/images/polk/sitemap.png"
        width="4202"
        height="3732"
      />


      <BodyText heading="Adaptive product listsings">
      We designed product listing components that adapted to Polk’s diverse product range; compact home theatre systems, beautifully wide sound bars and skyscraper-like speakers.
      This enabled us to showcase their products in the best light whilst maintaining a structured grid to ease development.
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/polk/plp.jpg"
        width="2000"
        height="1600"
      />


      <Devices
        items={[
          {
            media: "/images/polk/plp-mobile-1.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "",
            type: "mobile",
            radius: 0,
          },
          {
            media: "/images/polk/plp-mobile-2.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "",
            type: "mobile",
            radius: 0,
          },
          {
            media: "/images/polk/plp-mobile-3.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "",
            type: "mobile",
            radius: 0,
          },
        ]}
      />

        <Quote
        avatar="/images/polk/ben.jpg"
        citation="Ben Aldred — Chief Design Officer, This Place "
      >
        ““I am not going to lie, that was one of the most satisfying client reviews I have ever been a part of. 
        It felt incredibly well articulated from start to finish in terms of rationalizing design decisions, 
        opening up to the client for thoughtful discussion and also pushing them on a project planning perspective.””
      </Quote>


      <FullWidthMedia
        type="hero"
        media="/images/polk/hmc-mock.jpg"
        width="2000"
        height="1500"
      />

      <BodyText heading="Rethiniking the product experience">
      With so much information from features, specs, review, companion apps and more we knew we needed to apporach these product pages in a non-traditional way.
      In our analysis we noticed users would return 5 or 6 times before enter the conversion funnel. This made us think about an intuitve experience when landing here for the 1st of 6th time. 
      <br></br>
      <br></br>
      Our final design resulted in a segmented product page. Each section clearly identified and fit for purpose. This allowed us to tell richer product stories around features and get to the point around specs and reviews.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/polk/desktop-pdp-1.png",
            width: 1920,
            height: 1400,
            border: "#EBEBEB",
            caption: " ",
            type: "desktop",
            radius: 0,
          },
          {
            media: "/images/polk/desktop-pdp-specs.png",
            width: 1920,
            height: 1400,
            border: "#EBEBEB",
            caption: " ",
            type: "desktop",
            radius: 0,
          },
          
        ]}
      />
      <Devices
        items={[
          {
            media: "/images/polk/desktop-pdp-reviews.png",
            width: 1920,
            height: 1400,
            border: "#EBEBEB",
            caption: " ",
            type: "desktop",
            radius: 0,
          },
          {
            media: "/images/polk/desktop-pdp-compare.png",
            width: 1920,
            height: 1400,
            border: "#EBEBEB",
            caption: " ",
            type: "desktop",
            radius: 0,
          },
          
        ]}
      />

      <BodyText heading="Consistency between Desktop and Mobile">
      We worked through multiple concepts and ideas to create a product experience that was consistent but also purposeful for the platform. 
      We utilised al areas of the screen to create a scrolliing experience that never left the cutomer far from important actions.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/polk/mobile-pdp-1.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: " ",
            type: "mobile",
            radius: 0,
          },
          {
            media: "/images/polk/mobile-pdp-2.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: " ",
            type: "mobile",
            radius: 0,
          },
          {
            media: "/images/polk/mobile-pdp-4.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: " ",
            type: "mobile",
            radius: 0,
          },
        ]}
      />

        <BodyText heading="A homepage that got customers off the homepage">
        Micro-onoarding is a big part of banking. Whether it’s opening an account for the 1st or 100th time, 
        those small moments needed attention in the existing NAB experience. 
        <br></br>
        <br></br>
        We designed a New Account flow allowing customers to feel more guided, knowledgable and in control.
        </BodyText>

        <FullWidthMedia
        type="hero"
        media="/images/polk/desktop-homepage.jpg"
        width="2000"
        height="1600"
      />

      <BodyText heading="In the end">
      In the 8 weeks we had to completely overhaul the Polk website we managed to create a fresh and 
      considered experience. One that was tailored to Polk's brand story and portfolio of over 75 products.
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

export default polk;
