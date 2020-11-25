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
    An overhauled buying and content experience which stayed true to the story of a heritage American audio company
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

      <BodyText heading="An eCommerce experiencing poor results" eyebrow="The problem" accent="#B4442F">
      In the beginning, we wanted to establish a firm understanding of Polk’s online performance. 
      We sifted through Google Analytics as well as up to date heat map data.
      </BodyText>

      <BodyText heading="Out with the old" eyebrow="Project goals" accent="#B4442F">
      • Redesign the existing Polk website implementing the updated brand.
      <br></br>
      • Create a design that tailors to the Polk product range.
      <br></br>
      • Design a faster journey to product experience.
      </BodyText>

      <BodyText heading="Analysing current performance" eyebrow="Approach — Research" accent="#B4442F">
      In the beginning, we wanted to establish a firm understanding of Polk’s online performance. 
      We sifted through Google Analytics as well as up to date heat map data.
      <br></br>
      <br></br>
      From this we dove into strategising how to improve the bigger problem areas as well as talking the client 
      through how the getting the small 1% correct could make a positive impact on conversion. 
      </BodyText>


      <FullWidthMedia
        type="hero"
        media="/images/polk/GA-data.png"
        width="2000"
        height="868"
      />
      
      <BodyText heading="A simpler foundation" eyebrow="The solution" accent="#B4442F">
      After our analysis and early customer research we overhauled Polk’s sitemap to create a simpler and more logical structure. 
      Not only did this strengthen the foundation of the new build it also enabled the development team to start bringing the new site to life.
      </BodyText>

      <FullWidthMedia
        type="desktop"
        media="/images/polk/sitemap.png"
        width="4202"
        height="3732"
      />

<BodyText heading="A homepage that got customers off the homepage" eyebrow="The solution" accent="#B4442F">
        Whether it be Product launches, Sale events, VIP listening session or everyday in between, 
        we designed an adaptable homepage hero to drive customers from the homepage into a purchase, research and browsing journey.
        </BodyText>

        <FullWidthMedia
        type="hero"
        media="/images/polk/desktop-homepage.jpg"
        width="2000"
        height="1600"
      />

      <BodyText heading="Pointed Category + Sub-Category links" eyebrow="The solution" accent="#B4442F">
        We design shortcuts in the form of a Product Ribbon component, placed right underneath the hero banner to allow customers another entry point into the site.
        Studio photography, category groupings and 'from' pricing were locked up together to provide the user with the right amount of information and expectation.
        </BodyText>

      <Devices
        items={[
          {
            media: "/images/polk/Product-Ribbon-2.webm",
            width: 1920,
            height: 1080,
            border: "#EBEBEB",
            caption: "Navigating from Homepage to Category through the Product Ribbon.",
            type: "desktop",
            radius: 20,
            video: true
          },
        ]}
      />


      <BodyText heading="Adaptive product listings" eyebrow="The solution" accent="#B4442F">
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
        “I am not going to lie, that was one of the most satisfying client reviews I have ever been a part of. 
        It felt incredibly well articulated from start to finish in terms of rationalizing design decisions, 
        opening up to the client for thoughtful discussion and also pushing them on a project planning perspective.”
      </Quote>


      <FullWidthMedia
        type="hero"
        media="/images/polk/hmc-mock.jpg"
        width="2000"
        height="1500"
      />

      <BodyText heading="Rethinking the product experience" eyebrow="The solution" accent="#B4442F">
      With so much information from features, specs, review, companion apps and more we knew we needed to approach these product pages in a non-traditional way.
      In our analysis we noticed users would return 5 or 6 times before entering the conversion funnel. This made us think about an intuitive experience when landing here for the 1st of 6th time. 
      <br></br>
      <br></br>
      Our final design resulted in a segmented product page. Each section clearly identified and fit for purpose. This allowed us to tell richer product stories around features and get to the point around specs and reviews.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/polk/PDP-Desktop-2.webm",
            width: 1920,
            height: 1080,
            border: "#EBEBEB",
            caption: " ",
            type: "desktop",
            radius: 20,
            video: true
          },
        ]}
      />

<BodyText heading="High end products, high end design" eyebrow="The solution" accent="#B4442F">
      We respected the quality, legacy and price difference in Polk's high end product range. We designed a worthy product hero section to showcase their high end speakers.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/polk/polk-legend.jpg",
            width: 1920,
            height: 2980,
            border: "#EBEBEB",
            caption: " ",
            type: "desktop",
            radius: 20,
          },
        ]}
      />
      

      <BodyText heading="Consistency between Desktop and Mobile" eyebrow="The solution" accent="#B4442F">
      We worked through multiple concepts and ideas to create a product experience that was consistent but also purposeful for the platform. 
      We utilised all areas of the screen to create a scrolling experience that never left the customer far from important actions.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/polk/mobile-pdp-2.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: " ",
            type: "mobile",
            radius: 30,
            
          },
          {
            media: "/images/polk/mobile-carousel.mp4",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: " ",
            type: "mobile",
            radius: 30,
            video: true
          },
          {
            media: "/images/polk/mobile-pdp-4.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

        

      <BodyText heading="Leading a redesign in a pandemic" eyebrow="Learnings & Outcomes" accent="#B4442F">
      Like many, this was my first pandemic project. Not only, was I distant from the team, 
      I also balanced a client and Chief Design Officer (CDO) in a different time zone. 
      
      I learnt how to improve my storytelling and presenting and adapted it for our tri-weekly zoom calls. 
      
      Given the time zone difference there were small windows to check-in with the CDO. 
      
      This pushed me to rethink my file structures and allowed the CDO to pop into the file and know exactly where the designs were at. 

      <br></br><br></br>

      Following the launch of the new website in October, Polk Audio saw a 500% increase in online sales on the first Tuesday post launch. A stat that the entire team was very proud of.


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
