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
  <p>Nike enlisted six of Australia’s best female athletes to motivate women on a 10-day road trip down the east coast. 
    Travelling in a Metcon-branded, double-trailer Mack truck fitted with a custom gym, Nike invited members of the 
    public to sweat it out at epic workouts, at every stop along the way.</p> 
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
          value: "December 2016",
        },
        {
          label: "Heavy rotation",
          value: "Gold by Kiiara",
        },
      ]}
    />
    <FullWidthMedia
      type="hero"
      media="/images/metcon-mack/hero.png"
      width="2000"
      height="1138"
    />

    <BodyText heading="" eyebrow="The problem" accent="#FA5400">
    Nike needed an elevated digital experience (inside a truck!) that could be used for the potential customers 
    to actively trial their new product. So we created a dedicated workout station with multiple touch points 
    where participants could compete to beat targets set by Nike’s elite athletes.
    <br></br><br></br>
    The whole experience had to be automated with no user input beyond turning a laptop on at each stop along the road trip. 
    Integrated into their training experience, we worked hard behind the scenes so all they had to do was sweat.
    </BodyText>

    <BodyText heading="" eyebrow="Key focus areas" accent="#FA5400">
    1. The experience needed to be heavily tech-first in approach, but invisible to the participants and staff running the show.
    <br></br><br></br>
    2. Designing for multiple device (TV, iPad, iPhone) & multiple audiences simultaneously.
    <br></br><br></br>
    3. Keep each touch point, experience and design highly premium and on brand.
    
    </BodyText>

    <Devices
        items={[
          {
            media: "/images/metcon-mack/ipad.webm",
            width: 2048,
            height: 1536,
            border: "#323235",
            type: "desktop",
            caption: "The protoyped opponent, challenge and shoe selection flow.",
            radius: 50,
            video: true
          },
        ]}
      />

<BodyText heading="Armed and ready" eyebrow="The solution" accent="#FA5400">
The Nike Master trainer was equipped with an app to track the challengers workout. 
Counting reps, comparing to the target and motivating each challenger to reach their best. 
With only 1 minute to complete the workout, it’s an intense time for challenger and trainer. 
<br/><br/>
</BodyText>

    <FullWidthMedia
        type="hero"
        media="/images/metcon-mack/iPhone-2.jpg"
        width="3000"
        height="2000"
      />
<BodyText heading="3... 2... 1... GO!" eyebrow="The solution" accent="#FA5400">
A highly contextual design, crafted to the situation the Trainers were in. This resulted in a fluid experience that was
so simple and intuitive, they could focus their attention on motivating each challenger.
 Once the workout began, we removed buttons allowing the majority of the screen to act as the rep counter.
    </BodyText>

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
            caption: "A finished workout. Not happy with your numbers? Go again.",
            type: "mobile",
            radius: 30,
          },
        ]}
      />



<BodyText heading="Crowd support" eyebrow="The solution" accent="#FA5400">
The experience was completed as the awaiting challengers and crowd watched reps get counted in real time on an external screen.
    </BodyText>

    <FullWidthMedia
        media="/images/metcon-mack/tv.jpg"
        width="1620"
        height="915"
      />  

<BodyText heading="Driving social engagement" eyebrow="The solution" accent="#FA5400">
To complete the activation experience we designed social content that the Nike Women could engage with and social assets they could share. 
From geo tagged filters, performance results posts to social landing pages about the event.
    </BodyText>

<Devices
        items={[
          {
            media: "/images/metcon-mack/snapchat.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Snapchat location filters",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/metcon-mack/instagram.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Shareable results",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/metcon-mack/facebook.png",
            width: 375,
            height: 812,
            border: "#EBEBEB",
            caption: "Social campaign pages",
            type: "mobile",
            radius: 30,
          },
        ]}
      />

<FullWidthMedia
        type="hero"
        media="/images/metcon-mack/event-3.jpg"
        width="1200"
        height="800"
      />

<BodyText heading="Simultaneous user experiences" eyebrow="Learnings & outcomes" accent="#FA5400">
Anyone who has designed for Nike knows it's not easy, but it's extremely rewarding. 
This project challenged me to think harder and more strategically about how to best design interfaces 
for 3 simultaneous touch-points, each on a different medium and being used by a separate audience. 
In an ideal world, I would have loved to have tested this in situ, before shipping, but given the venue was already 
on its way to drive down the coast of Australia that proved impossible.
<br></br><br></br>
By the end of the road trip, the experience saw the sweat of 3063 burpees and 4619 pushups across 225 workouts.

    </BodyText>

<h3>Browse more projects</h3>

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
</TextMediaGrid>

<SignOff title="Let's make something great<br/> together." />



    </div>
  </div>
);

export default MetconMack;
