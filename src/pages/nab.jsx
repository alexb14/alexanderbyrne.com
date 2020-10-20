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

const nab = () => (
  <div>
    <IntroText heading="National Australia Bank">
    Bringing an accessible and aspirational experience to over 6 million mobile banking customers today and into the future.  
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

      <BodyText heading="Making studying abroad easier">
      We worked with Study Melbourne to create a set of tasks to guide international 
      students through studying in Victoria. These tasks included everything from 
      how to say “hello 👋”, where to find accommodation 🏡, how to catch a tram 🚊 
      and even how to make ANZAC biscuits 🍪 (an Australian delicacy).
      </BodyText>
      <Devices
        items={[
          {
            media: "/images/unlockmelb/splash.jpg",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/arrival.jpg",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/notifications.jpg",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

<BodyText heading="Language 🗣 and design 🎨">
We designed the Unlock Melbourne app around the universal language of emojis 😎. 
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
        Students could read more about each of the tasks. From recipe cards, s
        tudent testimonials, slang meanings, step-by-step tours and events.
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
        type="desktop"
        media="/images/unlockmelb/services-mock.jpg"
        width="2637"
        height="1649"
      />

<Quote
        avatar="/images/unlockmelb/dhani.jpg"
        citation="Dhani — Google Play Store review - ★★★★★ "
      >
        “Awesome app which explores all important things in Melb, helpful for foreigners. 
        I never gave review to any application, this is first time I’m giving review. Love the app. Good work 😍”
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

export default nab;
