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
    With more than 200,000 international students moving to Victoria each year, Unlock Melbourne is an app to guide them through 
    living and studying in their new home. At its heart, Unlock Melbourne is a way to discover more about a new city in just a tap. 
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
            value: "Do What You Want by The Presets",
          },
        ]}
      />
      <FullWidthMedia
        type="hero"
        media="/images/unlockmelb/hero.png"
        width="2000"
        height="1140"
      />

      <BodyText heading="" eyebrow="The problem" accent="#6650CB">
      Study Melbourne, a Government initiative, came to the agency wanting to co-design a positive impact on the wellbeing of these students. 
      <br></br><br></br>
      Through the process, they learnt that the ability for these students to orient themselves, within weeks of arrival, has an enormous effect on their time in the state.
      <br></br><br></br> 
      We landed on the need to create a fun, habit-forming app that felt great to use, for an audience with English as a second language.
      </BodyText>

      <BodyText heading="" eyebrow="Key focus areas" accent="#6650CB">
      1. Design an experience that guides through the most important tasks to complete in their first days in Melbourne—from learning how to say ‘hello’ to finding out how to seek help. 
      <br></br><br></br>
      2. Ensure the tasks feel approachable and easy through natural language and satisfying interactions. 
      <br></br><br></br>
      3. Create a consistent mobile experience across iOS and Android.
      </BodyText>

      <BodyText heading="Spark excitement before they arrived" eyebrow="The solution" accent="#6650CB">
      We needed to provide students with essential introductory details and to find out key information eg. 
      landing date so the app could know when to begin interacting with the student. We saw these requirements 
      as an opportunity to also spark excitement earlier in the user journey via a pre-arrival onboarding experience.
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
Although the emojis are different on each platform we shared all other design elements to create a consistent design between iOS and Android.
</BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/unlockmelb/ios-android.jpg"
        width="2000"
        height="1645"
      />

    <BodyText heading="Easy to use on the go" eyebrow="The solution" accent="#6650CB">
      The tasks were designed to be easy, fun and friendly. Using big buttons and gesture based navigation we created an 
      experience that could be done one handed on the way to class.
    </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/unlockmelb/tasks-2.jpg"
        width="2000"
        height="2275"
      />

      <BodyText heading="Detailed information at a swipe" eyebrow="The solution" accent="#6650CB">
      Students could read more about each of the tasks before deciding when to do them. From recipe cards, student testimonials, 
      slang meanings, step-by-step tours and events.
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

      <BodyText heading="Rewarding task completion" eyebrow="The solution" accent="#6650CB">
      We gamified with screen take-over animations to give the user a sense of joy and satisfaction for completing tasks with the 
      intention of creating habit forming behaviours.
      </BodyText>

      <Devices
        items={[
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
        ]}
        />

      <BodyText heading="More than just tasks" eyebrow="Going above and beyond" accent="#6650CB">
      While getting to know their new city was the primary function of the app, we also designed ways for 
      students to find out more about Study Melbourne and what services were available to them.
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

<BodyText heading="Emojis can simplify an experience" eyebrow="Learnings & Outcomes" accent="#6650CB">
Throughout this project I learnt the true power of a universal language and how it can help an interface tell a better story, 
especially with a user base this broad (hailing from over 170 different countries). 
This was one of the most enjoyable projects I've ever worked on as I was able to further my skills around interaction design and animation. 
It also felt great to hear of the positive impact it had on students going through what can be a tough transition.
<br></br><br></br>
Unlock Melbourne launched in time for the new university year in 2018 and currently sits at a 4.7★ rating on the Google Play Store.
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
    </TextMediaGrid>

    <SignOff title="Let's make something great<br/> together." />
  



     
    </div>
  </div>
);

export default UnlockMelbourne;
