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

const UnlockMelbourne = () => (
  <div>
    <IntroText heading="Unlock Melbourne">
    At its heart, Unlock Melbourne is a way to discover more about a new city in just a tap. 
    With more than 200,000 international students studying in Victoria each year, 
    Unlock Melbourne is the best way for them to discover more about their new home. 
    </IntroText>
    <div>
      <ProjectMeta
        details={[
          {
            label: "Role",
            value: "Senior Designer",
          },
          {
            label: "When",
            value: "October, 2017 — December, 2017",
          },
          {
            label: "Heavy rotation",
            value: "Nervous Energy by Glades",
          },
        ]}
      />
      <FullWidthMedia
        type="hero"
        media="/images/unlockmelb/hero.png"
        width="2000"
        height="1140"
      />

      <BodyText heading="Make studying abroad easier" eyebrow="The goal" accent="#6650CB">
      I worked with Today and Study Melbourne to design an iOS and Android app to guide international 
      students through moving to, living and studying in Victoria.
      
      The app needed to help them fit into their new home and have tasks to teach them a variaty of things from: <br></br><br></br>

      <span role="img" aria-label="waving hand">👋</span> How to say “Hello” <br></br>
      <span role="img" aria-label="home">🏡</span> Where to find accommodation <br></br>
      <span role="img" aria-label="Tram">🚊</span> How to catch a tram  <br></br>
      <span role="img" aria-label="cookie">🍪</span> Even how to make ANZAC biscuits (an Australian delicacy).
      </BodyText>
      <Devices
        items={[
          {
            media: "/images/unlockmelb/splash.jpg",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: "Providing new students with context of Unlock Melbourne",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/arrival.jpg",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: "Capturing their arrival date to personalise the experience",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/notifications.jpg",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: "Allowing users to set their notifications to decide when to tackle their next task",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

<BodyText heading="Language 🗣 and design 🎨" eyebrow="The solution" accent="#6650CB">
We designed the Unlock Melbourne app around the universal language of emojis <span role="img" aria-label="sunglasses on a smiley face">😎</span>. 
This allowed us to reach all students in an accessible, familiar and friendly way.

      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/unlockmelb/ios-android.png"
        width="2000"
        height="1245"
      />

<BodyText heading="Easy and rewarding tasks">
The tasks were designed to be easy, fun and friendly. Using big buttons and 
gesture based navigation we created an experience that could be done one handed on the way to class.
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/unlockmelb/card-grid.png"
        width="2000"
        height="2186"
      />

      <BodyText heading="Done 👍 or Do later ✍️">
        Students could read more about each of the tasks. From recipe cards, student testimonials, slang meanings, step-by-step tours and events.
      </BodyText>
      <Devices
        items={[
          {
            media: "/images/unlockmelb/recipe.png",
            width: 375,
            height: 812,
            border: "#D9D4ED",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/language.png",
            width: 375,
            height: 812,
            border: "#D7E2EF",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/event.png",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

      <BodyText heading="More than just tasks">
      While getting to know their new city was the primary function of the app, 
      we also designed ways for students to find out more about Study Melbourne and what services were available to them. 
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/unlockmelb/services-mock.jpg"
        width="2000"
        height="1100"
      />

<Quote
        avatar="/images/unlockmelb/dhani.jpg"
        citation="Dhani — Google Play Store review - ★★★★★ "
      >
        “Awesome app which explores all important things in Melb, helpful for foreigners. 
        I never gave review to any application, this is first time I’m giving review. Love the app. Good work <span role="img" aria-label="Love heart eyes"></span>😍”
      </Quote>

      <Devices
        items={[
          {
            media: "/images/unlockmelb/services.jpg",
            width: 375,
            height: 812,
            border: "#F1DDCE",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/home-end.jpg",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/about.jpg",
            width: 375,
            height: 812,
            border: "#D6D5E9",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

<BodyText>
Unlock Melbourne launched on both iOS and Android at the start of 2018 just in time to help the new cohort of university students.
      </BodyText>

      <h3>Here's a few more projects</h3>

    <TextMediaGrid columns={2} flush={true}>
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

      <TextMedia
        link="/myer"
        media="/images/projects/sidney-tile2.png"
        width="610"
        height="647"
        
      >
        <h2>Sidney & Elcon — Typeface design</h2>
        <p>Two custom typefaces for Australias largest department store.</p>
      </TextMedia>
    </TextMediaGrid>

    <SignOff title="Let's make something great<br/> together." />
  



     
    </div>
  </div>
);

export default UnlockMelbourne;
