import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import IntroText from "../components/IntroText";
import BodyText from "../components/BodyText";
import ProjectMeta from "../components/ProjectMeta";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import Devices from "../components/Devices";
import SignOff from "../components/SignOff";
import Quote from "../components/Quote";


const nab = () => (
  <div>
    <IntroText heading="National Australia Bank">
    Bringing an accessible and aspirational mobile experience to over 6 million banking customers every day.
    </IntroText>
    <div>
      <ProjectMeta
        details={[
          {
            label: "Role",
            value: "UX Design Lead",
          },
          {
            label: "When",
            value: "March, 2019 — September, 2019",
          },
          {
            label: "Heavy rotation",
            value: "Outta My Head by Khalid",
          },
        ]}
      />

< FullWidthMedia
        type="hero"
        media="/images/nab/screen-and-video.webm"
        width="1920"
        height="1080"
        video
      />

      

      <BodyText heading="An outdated experience compounded by unsatisfied customers" eyebrow="The problem" accent="#C70000">
      NAB hadn't updated the core banking features of their mobile app for a number of years. Following declining reviews and Net Promoter Scores, 
      they identified a need to redesign their app to both better service their loyal customers and stay competitive with other emerging digital 
      banking offerings.. With a heavy focus on accessibility, a simplified UI and better content hierarchy I led the design of their new app which 
      is releasing in stages throughout 2020.
      </BodyText>

      <BodyText heading="" eyebrow="Key focus areas" accent="#C70000">
      1. Create a foundation that will allow the app to be built upon into the future.<br></br><br></br>
      
      2. Champion accessibility in all design decisions.<br></br><br></br>
      
      3. Design a 'guiding light' for the other digital products throughout the business.
      </BodyText>

      <BodyText heading="Accounts clarity" eyebrow="The solution" accent="#C70000">
      One of the primary changes implemented within the account screen was an improved hierarchy. 
      We brought in a brand new screen structure along with changes to typography, the formalisation of 
      account groupings and the introduction of iconography. 
      <br></br><br></br>
      These changes not only improved the immediate appearance of the app, they also strengthened the foundations of an accessible experience.
      </BodyText>

      
      < FullWidthMedia
        type="hero"
        media="/images/nab/accounts-both.jpg"
        width="2000"
        height="1132"
      />
     
      
      <BodyText heading="Transaction Details for all use-cases" eyebrow="The solution" accent="#C70000">
      The overhaul of the Transaction Details screen was the most challenging of the project. 
      We pushed ourselves to create a template that could look visually consistent across over 10 account types; 
      all with their own unique configuration of information, actions and details.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/nab/TD-everyday.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Transaction Account",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/nab/TD-cc.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Credit Card Account",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/nab/TD-homeloan.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Home Loan Account",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

<BodyText heading="Cards" eyebrow="The solution" accent="#C70000">
      With an abundance of content, settings and features the Cards section of the app was designed to be clear, organised and promote functions when you needed them.
      We restructured card controls, implemented card status’ and heroes the most important actions the user might need day to day. 

      </BodyText>
      <FullWidthMedia
        type="hero"
        media="/images/nab/cards.png"
        width="2000"
        height="1825"
      />

      <BodyText heading="Micro-onboarding" eyebrow="The solution" accent="#C70000">
        Whether it’s opening an account for the 1st or 100th time, we gave those small moments the attention that it needed within the existing NAB experience.
        <br></br><br></br>
        We designed a New Account flow to help customers feel more guided, knowledgeable and in control. 
        This, in turn, enabled the business to gain a greater understanding of personalisation and the secondary features customers use the most.
      </BodyText>

        <Devices
        items={[
          {
            media: "/images/nab/New-Account.mp4",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: " ",
            type: "mobile",
            radius: 30,
            video: true
          },
        ]}
      />

      <BodyText heading="Building accessible foundations" eyebrow="The solution — Designing for everyone" accent="#C70000">
          WWe wanted to take a stronger and more accountable approach to Accessibility with the app redesign. 
          Baked into every screen, layout and component was the ability for readers to increase the text size, 
          initiate voice over and to use the app in landscape orientation.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/nab/A11Y Dark Account.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Designed for Large Text sizes",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/nab/A11Y Dark TD.png",
            width: 812,
            height: 375,
            border: "#EBEBEB",
            caption: "Responsive layout for landscape orientation",
            type: "mobile",
            radius: 30,
          },
          
        ]}
      />      

      

      <BodyText heading="Live chat" eyebrow="The solution" accent="#C70000">
      To support customers even further we designed a brand new chat interface to make it easier to get quick help from anywhere within the app.
      <br></br><br></br>
      A minimised state made it quicker and more intuitive for users to get instructions from the chat assistant and navigate the app at the same time; all whilst never losing the active session.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/nab/chat03.png",
            width: 375,
            height: 771,
            border: "#EBEBEB",
            caption: "Continuing brand and app aesthetic into chat",
            type: "mobile",
            radius: 20,
          },
          {
            media: "/images/nab/chat02.png",
            width: 375,
            height: 771,
            border: "#EBEBEB",
            caption: "High contrast between Assistant and customer",
            type: "mobile",
            radius: 20,
          },
          {
            media: "/images/nab/chat01.png",
            width: 375,
            height: 771,
            border: "#EBEBEB",
            caption: "Minimised chat experience",
            type: "mobile",
            radius: 20,
          },
        ]}
      />



      <Quote
        avatar="/images/nab/app-store.jpg"
        citation="App Store review - Simplistic and Elegant • ★★★★★ "
      >
        “I welcome the refreshed and new layout. Everything works very quickly and has all the necessary functions needed on a consumer banking app. 
        Best UI out of the big 4 Aus bank.”
      </Quote>

<BodyText heading="Tapping into the experience of a 100+ Design team" eyebrow="Learnings & Outcomes" accent="#C70000">
With over 100 in-house designers, NAB had a comprehensive knowledge base containing successes and failures on their digital products. 
Before starting to design, or create any solutions of my own, I found it essential to engage and actively listen to the mobile and wider 
digital teams (Key stakeholders, Design and Development). This enabled me to gain a better understanding of what they have tried, tested and 
learnt before.
<br></br><br></br>
As we reached key milestones in the project, a challenging part of my role was to consistently present and showcase the future direction of the 
new mobile app to Key Stakeholders and the wider NAB Digital teams. I learnt how to evolve my approach to storytelling to make sure all audiences 
left feeling heard, informed, inspired and, importantly, confident about the new app.
<br></br><br></br>
NAB began a staged release of their new app in early 2020.

      </BodyText>

      
      
      <h3>Here's a few more projects</h3>

    <TextMediaGrid columns={2} flush={true}>
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
        link="/polk"
        media="/images/tiles/polk-2.jpg"
        width="610"
        height="590"
        eyebrow="eCommerce redesign ◦ Research ◦ Interaction design"
        accent="#74747B"
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
        eyebrow="iOS + Android app ◦ Interaction design"
        accent="#74747B"
        flip
      >
        <h2>Unlock Melbourne — App</h2>
        <p>Giving international students a fun and informative way to enjoy their new city.</p>
      </TextMedia>
    </TextMediaGrid>

    <SignOff title="Let's make something great<br/> together." />
  



     
    </div>
  </div>
);

export default nab;
