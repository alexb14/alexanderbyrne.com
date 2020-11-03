import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import ProjectMeta from "../components/ProjectMeta";
import IntroText from "../components/IntroText";
import BodyText from "../components/BodyText";
import Devices from "../components/Devices";
import SignOff from "../components/SignOff";

const MetconMack = () => (
  <div>
  <IntroText heading="Nike Metcon Mack">
  <p>Who else turns a Mack Truck into a travelling cross-fit gym to cover the 
    east coast of Australia? Nike needed an elevated digital experience with 
    multiple touch points for the launch of their new trainer and to empower women everywhere.</p> 
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
          value: "Sometime in 2016",
        },
        {
          label: "Heavy rotation",
          value: "Nervous Energy by Glades",
        },
      ]}
    />
    <FullWidthMedia
      type="hero"
      media="/images/metcon-mack/hero.png"
      width="2000"
      height="1138"
    />

    <BodyText heading="A workout all over">
    Nike partnered with Australia’s and New Zealand’s best female athletes 
    to set workout targets for everyone to try and reach. In turn, they needed 
    a way to inspire, track and engage their NTC Women throughout the experience.
    <br/><br/>The challengers chose their workout and opponent from a mounted iPad onboard 
    the truck. They could explore all targets, enter their details and select 
    the shoe they were given to perform the workout in.
    </BodyText>

      <FullWidthMedia
        media="/images/metcon-mack/iPad-3.jpg"
        width="3000"
        height="1958"
      />

      <BodyText heading="Burpees or push-ups?">
      We wanted to design familiar cues into the opponent selection part of the app. 
      Making it feel slightly arcade but balanced with the premium feel or Nike.
    </BodyText>

    <Devices
        items={[
          {
            media: "/images/metcon-mack/Athletes-Grid.png",
            width: 2048,
            height: 1536,
            border: "#323235",
            type: "full",
            radius: 50,
          },
        ]}
      />

<Devices
        items={[
          {
            media: "/images/metcon-mack/Athlete - Moana.png",
            width: 2048,
            height: 1536,
            border: "#323235",
            type: "full",
            radius: 50,
          },
        ]}
      />

<Devices
        items={[
          {
            media: "/images/metcon-mack/Shoe Selected.png",
            width: 2048,
            height: 1536,
            border: "#323235",
            type: "full",
            radius: 50,
          },
        ]}
      />

<BodyText heading="Armed and ready">
The Nike Master trainer was equipted with an app to track the challengers workout. 
Counting reps, comparing to the target and motivating each challenger to reach their 
best. With only 1 minute to complete the workout, it’s an intense time for challenger and trainer. 
<br/><br/>
We designed to app to be a fluid experience with a lot of margin for the trainers. 
Once the workout begun, we removed buttons for counting reps, instead, allowing 
majority of the screen to act as the rep counter.
    </BodyText>

    <FullWidthMedia
        type="hero"
        media="/images/metcon-mack/iPhone-2.jpg"
        width="3000"
        height="2000"
      />

<Devices
        items={[
          {
            media: "/images/metcon-mack/challenger.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "The Nike Trainers received a notification when the next challenger was ready.",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/metcon-mack/active.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Timings, challenger, reps and target were all displayed on screen.",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/metcon-mack/finish.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "A finsihed workout. Not happy with your numbers? Go again.",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

<BodyText heading="Crowd support">
The experience was completed as the awaiting challengers and crowd watched reps get counted in real time on an external screen.
    </BodyText>

    <FullWidthMedia
        
        media="/images/metcon-mack/tv.png"
        width="2430"
        height="1500"
      />  

<h3>Browse more projects</h3>

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

export default MetconMack;
