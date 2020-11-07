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

      <BodyText heading="Make studying abroad easier" eyebrow="The goal and key focus areas" accent="#6650CB">
      I worked with Today and Study Melbourne to design an iOS and Android app to guide international 
      students through moving to, living and studying in Victoria. With this project we wanted to:<br></br><br></br>
      • Design a fun and informative experience for International students.<br></br>
      
      • Create a consistent mobile experience across platforms.<br></br>
      
      • Enable internationalisation to improve the experience for everyone.
      
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
<br></br><br></br>
Although the emoji's are different on each platform we shared the duplicate elements to create a consistent design between iOS and Android.  

      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/unlockmelb/ios-android.jpg"
        width="2000"
        height="1645"
      />

<BodyText heading="Easy and rewarding tasks" eyebrow="The solution" accent="#6650CB">
The tasks were designed to be easy, fun and friendly. Using big buttons and 
gesture based navigation we created an experience that could be done one handed on the way to class.
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/unlockmelb/tasks-2.jpg"
        width="2000"
        height="2275"
      />

      <BodyText heading="Done 👍 or Do later ✍️" eyebrow="The solution" accent="#6650CB">
        Students could read more about each of the tasks. From recipe cards, student testimonials, slang meanings, step-by-step tours and events.
      </BodyText>
      <Devices
        items={[
          {
            media: "/images/unlockmelb/recipe.png",
            width: 375,
            height: 812,
            border: "#D9D4ED",
            caption: "Fun recipe card task",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/language.png",
            width: 375,
            height: 812,
            border: "#D7E2EF",
            caption: "Aussie slang task",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/event.png",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: "Event task",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

      <BodyText heading="More than just tasks" eyebrow="Going above and beyond" accent="#6650CB">
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
            caption: "Providing important links and contacts",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/unlockmelb/complete-2.mp4",
            width: 375,
            height: 812,
            border: "#D5E3E3",
            caption: "Completing a task and unlocking the next",
            type: "mobile",
            radius: 30,
            video: true
          },
          {
            media: "/images/unlockmelb/about.jpg",
            width: 375,
            height: 812,
            border: "#D6D5E9",
            caption: "Confidence in their education",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

<BodyText heading="Emoji's can simplify an experience" eyebrow="Learnings & Outcomes" accent="#6650CB">
Throughout this project I learnt the true power of the emoji and how it can  help an interface tell a better story. 
Although I came onboard after the planning and strategy had been done, 
I did my best to talk to the project team to catch up on as much knowledge and direction as possible. 
This was one of the funnest projects I've ever worked on it's purpose left me with a feeling of making a positive impact.
<br></br><br></br>
Unlock Melbourne launched in early 2018 in time for the new university year and sits at a 4.7★ rating on the Google Play Store. 
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
