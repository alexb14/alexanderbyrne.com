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
    An overhauled buying and content experience for an international eCommerce website, 
    whilst staying true to the brand story of a heritage American audio company.
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
        media="/images/polk/hmc-mock.jpg"
        width="2000"
        height="1500"
      />

      <BodyText heading="An eCommerce website experiencing poor conversion" eyebrow="The problem" accent="#B4442F">
      Polk Audio’s eCommerce website was operating at a 0.15% conversion rate, well below the industry average of 2.5%. 
      The current website’s content and navigation was also structured around traditional site entry points and journeys. 
      This caused friction for potential customers resulting in high user bounce rates. These data insights, along with an 
      incoming full brand refresh, caused Polk to shift focus to their digital offerings and define a new approach. 
      </BodyText>

      <BodyText heading="" eyebrow="Key focus areas" accent="#B4442F">
      1. A componentised approach was required to future-proof potential roll out across other sibling websites on the same platform (Polk Audio is one of 11 sites on a shared development platform).
      <br></br>
      <br></br>
      2. Consider the impact of a full brand refresh within the new website redesign.
      <br></br>
      <br></br>
      3. Ensure the design could be tailored to showcase the Polk product range in the best light.

      </BodyText>

      <BodyText heading="Analysing current performance" eyebrow="Approach — Research" accent="#B4442F">
      In the beginning, we wanted to establish a firm understanding of Polk’s online performance. 
      We sifted through Google Analytics as well as current heat map data. 
      <br></br>
      <br></br>
      From this we were able to identify and report on the bigger problem areas as well as small 
      opportunities with the potential for big impacts for conversion. 
      </BodyText>


      <FullWidthMedia
        type="hero"
        media="/images/polk/GA-data.png"
        width="2000"
        height="868"
      />
      
      <BodyText heading="A simpler foundation" eyebrow="The solution" accent="#B4442F">
      After our analysis and early customer research we overhauled Polk’s sitemap to create a simpler and more logical structure. 
      This strengthened the new site's foundation and fixed the existing confusing navigation.
      </BodyText>

      <FullWidthMedia
        type="desktop"
        media="/images/polk/sitemap.png"
        width="4202"
        height="3732"
      />

<BodyText heading="Pointed Category + Sub-Category links" eyebrow="The solution" accent="#B4442F">
      Shortcuts in the form of a Product Ribbon component, were placed right underneath the hero banner, 
      to provide customers another way to discover products quickly. Studio photography, category groupings 
      and 'from' pricing were locked up together to provide the user with just the right amount of information to set expectations.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/polk/Product-Ribbon-2.webm",
            width: 1920,
            height: 1080,
            border: "#EBEBEB",
            caption: "Prototype navigating from Homepage to Category through the Product Ribbon.",
            type: "desktop",
            radius: 20,
            video: true
          },
        ]}
      />

<BodyText heading="A homepage that helps customers get to where they want to go" eyebrow="The solution" accent="#B4442F">
Whether it be Product launches, Sale events, VIP listening sessions or any day in between, 
we designed an adaptable Homepage hero to drive customers from the Homepage into a purchase, 
research or browsing journey as defined by evolving business needs.
        </BodyText>

        <FullWidthMedia
        type="hero"
        media="/images/polk/desktop-homepage.jpg"
        width="2000"
        height="1600"
      />

      

      <BodyText heading="Rethinking the product experience" eyebrow="The solution" accent="#B4442F">
      With so much information from features, specs, review, companion apps and more, we knew we needed to approach 
      these Product Pages in a non-traditional way. In our analysis, we noticed users would return 5 or 6 times before 
      entering the conversion funnel. This made us think about how to make this a useful experience whether landing here for the 1st or the 6th time. 
      <br></br>
      <br></br>
      Our final design resulted in a Product Page with its own mini navigation. Each section clearly identified and fit for purpose. 
      This allowed us to tell richer product stories around features and get to the point in providing Specs and Reviews.

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
      
      <BodyText heading="Consistency between Desktop and Mobile" eyebrow="The solution" accent="#B4442F">
      Multiple concepts and ideas were worked through to craft a product experience that was consistent, but also purposeful, for the platform. 
      We utilised all areas of the screen to create a scrolling experience that never left the customer far from the important actions.
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

      <Quote
        avatar="/images/polk/ben.jpg"
        citation="Ben Aldred — Chief Design Officer, This Place "
      >
        “I am not going to lie, that was one of the most satisfying client reviews I have ever been a part of. 
        It felt incredibly well articulated from start to finish in terms of rationalizing design decisions, 
        opening up to the client for thoughtful discussion and also pushing them on a project planning perspective.”
      </Quote>
        

      <BodyText heading="Leading a redesign in a pandemic" eyebrow="Learnings & Outcomes" accent="#B4442F">
      Like many, this was my first pandemic project. Not only was I physically distant from the team, I needed to also balance a client and 
      Chief Design Officer (CDO) in a different time zone. I learnt how to improve my communication style and how to adapt the content for 
      our tri-weekly showcases via Zoom. 
      <br></br>
      <br></br>
      Given there were small windows to check-in with the CDO, I also pushed myself to rethink my file structures to ensure that they 
      could pop into the file at any given time and know exactly what stage the design work was at. 
      <br></br>
      <br></br>
      Following the launch of the new website in October 2020, Polk Audio saw a 500% increase in online sales in it’s first week post-launch. 
      A stat that exceeded the expectations of the entire team and is very proud of.
      </BodyText>


      <h3>Here's a few more projects</h3>

    <TextMediaGrid columns={2} flush={true}>

    <TextMedia
        link="/unlockmelbourne"
        media="/images/tiles/um-3.jpg"
        width="610"
        height="520"
        eyebrow="iOS + Android app ◦ Interaction design"
        accent="#74747B"
        flip
      >
        <h2>Unlock Melbourne — App</h2>
        <p>Giving international students a fun and informative way to enjoy their new city.</p>
      </TextMedia>

    <TextMedia
        link="/myer"
        media="/images/tiles/myer-2.jpg"
        width="610"
        height="736"
        eyebrow="eCommerce redesign ◦ Design system ◦ User Testing ◦ Interaction design"
        accent="#74747B"
        
      >
        <h2>Myer — eCommerce website</h2>
        <p>
        A brightened e-commerce experience for Australia’s largest home and fashion retailer.
        </p>
        </TextMedia>

   

      <TextMedia
        link="/sidneyelcon"
        media="/images/tiles/sidney-elcon.jpg"
        width="610"
        height="647"
        eyebrow="Typography design ◦ Accessibility"
        accent="#74747B"
        
      >
        <h2>Sidney & Elcon — Typeface design</h2>
        <p>Two custom typefaces for Australia's largest department store.</p>
      </TextMedia>

      
     
      

      <TextMedia
        link="/metcon-mack"
        media="/images/projects/metconmack-tile2.png"
        width="610"
        height="736"
        eyebrow="Mulitchannel experience ◦ Interaction design ◦ Tablet + Mobile App"
        accent="#74747B"
        flip
      >
        <h2>Nike Women Metcon Mack — App + Digital Activation</h2>
        <p>An elevated digital workout experience for a Mack truck turned crossfit gym.</p>
      </TextMedia>

      <TextMedia
        link="/nab"
        media="/images/tiles/nab-1.png"
        width="610"
        height="649"
        eyebrow="iOS + Android app ◦ Accessibility"
        accent="#74747B"
        
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
