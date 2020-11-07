import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import IntroText from "../components/IntroText";
import BodyText from "../components/BodyText";
import ProjectMeta from "../components/ProjectMeta";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import Devices from "../components/Devices";
import SignOff from "../components/SignOff";


const nab = () => (
  <div>
    <IntroText heading="National Australia Bank">
    Bringing an accessible and aspirational experience to over 6 million mobile banking customers. 
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
            value: "Nervous Energy by Glades",
          },
        ]}
      />
      <FullWidthMedia
        type="hero"
        media="/images/nab/hero.png"
        width="2000"
        height="1250"
      />

      <BodyText heading="Understanding the landscape" eyebrow="The Problem" accent="#C70000">
      With over 100 in-house designers, NAB had comprehensive knowledge base containing successes and failures 
      on their digital products. I talked frequently with their app team (both Design and Development) to get 
      a greater understanding of the current build’s strengths, weaknesses and opportunities from customer research.<br></br>
      <br></br>
      These discussions and planning boiled down to redesigning key sections of the app as well as small experiences that currently needed improvement. 
      </BodyText>

      <BodyText heading="Accounts">
      One of the primary changes within the account screen was hierarchy. NAB’s primary content was small and condensed. 
      That paired with illegible typography and off balanced actions, resulted in a frustrating experience for customers. 
      <br></br>
      <br></br>
      We wanted to bring an improved hierarchy to these screens and also give users a more obvious interface. These changes not only improved 
      the immediate appearance of the app, they also strengthened the foundations of an accessible experience we were building.
      These discussions and planning boiled down to redesigning key sections of the app as well as small experiences that currently needed improvement. 
      </BodyText>

      < FullWidthMedia
        media="/images/nab/Mock-2.webm"
        width="1920"
        height="1080"
        video
        
      />
      
      <BodyText heading="Transaction details">
      When designing the Transaction Details screen we hand to juggle a lot of elements and configuration. We aimed to make a template that worked for over 
      10 Account types. All with thier own amount of information, actions and content.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/nab/TD-everyday.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Standard Transaction Account",
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

<BodyText heading="Improving the small moments" eyebrow="The solution" accent="#C70000">
        Micro-onoarding is a big part of banking. Whether it’s opening an account for the 1st or 100th time, 
        those small moments needed attention in the existing NAB experience. 
        <br></br>
        <br></br>
        We designed a New Account flow allowing customers to feel more guided, knowledgable and in control.
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

<BodyText heading="New management">
Replacing a disjointed experience we focused on better ways to manage the small things in your account.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/nab/manage-overview.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Improved content grouping",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/nab/menage-details.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Smarter actions and content around sharing",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/nab/manage-options.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Simple layouts for accessible secondary actions",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

        <BodyText heading="Building accessible foundations" eyebrow="The solution — Designing for everyone" accent="#C70000">
              We wanted to take a stronger approach to Accessibility with the app redesign. 
              Baked into every screen, layout and component was the ability for readers to increase the text size, initiate voice over and use it in landscape orientation.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/nab/accessible/large-text.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Improved content grouping",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/nab/accessible/landscape.png",
            width: 812,
            height: 375,
            border: "#EBEBEB",
            caption: "Smarter actions and content around sharing",
            type: "mobile",
            radius: 30,
          },
          
        ]}
      />      

      <BodyText heading="Cards">
      With an abundance of content, settings and features the Cards section of the app 
      was designed to be clear, organised and promote functions when you needed them.
      </BodyText>
      <FullWidthMedia
        type="hero"
        media="/images/nab/cards.png"
        width="2000"
        height="1825"
      />

      <BodyText heading="Live chat ">
      We designed a brand new chat interface making it easier for customers to get quick help from anywhere in the app. 
      A minimised state made it easier and more intuitive for user to get instructions from the chat assisstant and navigate the app. 
      All while never losing the chat session.
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
            caption: "Minimsed chat experience",
            type: "mobile",
            radius: 20,
          },
        ]}
      />

<BodyText heading="Approaching a 100+ Design team" eyebrow="Learnings & Outcomes" accent="#C70000">
With over 100 in-house designers, NAB had a comprehensive knowledge base containing successes and failures on their digital products. 
Before starting to design or create soltuions of my own I frequently talked and listened to their app and wider digital team (both Design and Development) 
to get a better understanding of what they have tried, tested and learnt before. 
<br></br><br></br>
NAB began a staged release of their new app in early 2020.
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
    </TextMediaGrid>

    <SignOff title="Let's make something great<br/> together." />
  



     
    </div>
  </div>
);

export default nab;
