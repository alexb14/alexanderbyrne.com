import React from "react";
import FullWidthMedia from "../components/FullWidthMedia";
import IntroText from "../components/IntroText";
import BodyText from "../components/BodyText";
import ProjectMeta from "../components/ProjectMeta";
import TextMedia from "../components/TextMedia";
import TextMediaGrid from "../components/TextMediaGrid";
import Devices from "../components/Devices";
import SignOff from "../components/SignOff";

const Myer = () => (
  <div>
    <IntroText heading="Myer">
      A brightened e-commerce experience for Australia’s largest home and
      fashion retailer. From content to checkout, all is new in the world of
      Myer.
    </IntroText>
    <div>
      <ProjectMeta
        details={[
          {
            label: "Role",
            value: "Design Lead",
          },
          {
            label: "When",
            value: "May, 2018 — December, 2018",
          },
          {
            label: "Heavy rotation",
            value: "Nervous Energy by Glades",
          },
        ]}
      />
      <FullWidthMedia
        type="hero"
        media="/images/myer/hero.jpg"
        width="2000"
        height="1225"
      />

      <BodyText heading="Australia's largest eCommerce retailer was falling behind" eyebrow="The problem" accent="#9A6A00">
      Myer's eCommerce infrastructure and design weren't providing customers with an inspiring and easy to use experience. 
      I was brought in to hero the design and lead a team of 3 designers to undertake a complete overhaul of myer.com.au. 
      </BodyText>

      <BodyText heading="What we wanted to achieve" eyebrow="Project goals" accent="#9A6A00">
        • A robust eCommerce experience helping drive the entire online business. <br></br><br></br>
        • Close relationships between Design and Marketing, Loyalty, Merchandising and development teams to set a positive working foundation to take Myer into the future.<br></br><br></br>
        • An accessible experience that enables the current and future customers to enjoy, navigate and be inspired by the Myer website. <br></br><br></br>
        • An awe-inspiring experience that matched the joy and wonder of in store.
      </BodyText>

      <BodyText heading="Getting the basics right" eyebrow="The solution" accent="#9A6A00">
      Before jumping into buttons, interactions, page layouts and more we focused on getting the smaller details right to 
      enable us to move at pace later in the project. We improved colour usage ratios, making them more accessible and premium. 
      We completely rethought iconography across the Myer website to create a custom icon suite which was more obvious and clean. 
      And finally, we obsessed over the typography across sizes, devices and hierarchy. 
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/myer/base.jpg"
        width="2000"
        height="1320"
      />

      <BodyText heading="A welcoming homepage experience on mobile" eyebrow="The solution" accent="#9A6A00">
      With mobile traffic vastly overtaking desktop we knew creating a welcoming experience for customers was crucial. 
      Instead of simply copying competitor approaches we dug deep and provided shoppers with a page that allowed them to 
      quickly and easily dive into relevant categories, shop sales, imagine themselves in an entire look and effortlessly see 
      what Myer had from their favourite brands.
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/myer/home-mobile.jpg"
        width="2000"
        height="1405"
      />

      <BodyText heading="...and Desktop too" eyebrow="The solution" accent="#9A6A00">
      A large part of Myer's business strategy was around themed sale events. 
      Their in store and marketing collateral were always consistent and relevant to the event. 
      However, the online experience traditionally stayed neutral all year round. This was a key area they 
      wanted to invest in to create a consistent omni-channel experience. <br></br><br></br>
      From this, I designed a robust Homepage structure which enabled themes, events and relevant media to shine through. 
      All while keeping the user experience at the forefront.
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/myer/home-desktop.jpg"
        width="2000"
        height="1405"
      />

      <BodyText heading="An immersive experience wherever you land" eyebrow="The solution" accent="#9A6A00">
      I was well aware from Analytics and Data that not all users simply landed on the homepage and started navigating the site. 
      Large percentages on users were landing at Category level pages and were met with an underwhelming first impression. 
      I imagined an experience that balanced immersing the user in their desired category with a structured, componentised 
      approach the development team could implement. This resulted in a design that made the user feel like they had arrived at a 
      site that deeply cared about the category they were interested in.
      </BodyText>

      <Devices
        items={[
          {
            media: "/images/myer/Mobile-CLP Women.png",
            width: 375,
            height: 1014,
            border: "#E6EFF2",
            caption: " ",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/myer/Mobile-CLP Toys.png",
            width: 375,
            height: 1014,
            border: "#F2E6E6",
            caption: "",
            type: "mobile",
            radius: 30,
          },
          {
            media: "/images/myer/Mobile-CLP Beauty.png",
            width: 375,
            height: 1014,
            border: "#F2EFE6",
            caption: "",
            type: "mobile",
            radius: 30,
          },
        ]}
      />
      
      <BodyText heading="A brand new Checkout experience" eyebrow="The solution" accent="#9A6A00">
      The final piece of the puzzle was the purchasing journey. All too often checkouts experience the same 
      friction points and don't feel like they are developed for the nuances of the customers. For the Myer 
      checkout I had multiple user expectations to juggle: <br></br><br></br>
      • Delivery or Click & Collect, <br></br>
      • Picking up in Person or sending a verified person, <br></br>
      • Paying with credit card, instalments or multiple gift cards. <br></br><br></br>
      
      We tested early and often which resulted in a considered checkout experience specifically designed to serve the Myer shopper.
      
      </BodyText>
      <Devices
        items={[
          {
            media: "/images/myer/Desktop_Checkout.webm",
            width: 1680,
            height: 968,
            border: "#efefef",
            caption: "We created a full checkout prototype for customers to test",
            type: "full",
            radius: 40,
            video: true
            
          
          },
        ]}
      />

      <BodyText heading="Rounding out the purchasing experience" eyebrow="The solution" accent="#9A6A00">
      A current overlooked element were the post-purchase EDMs. An integral part of reducing customers anxiety and keeping them informed. 
      I reimagined what the EDM experience could be for Myer. I realised the importance of relevance and organised photoshoots with Myer's 
      delivery packaging to create a connection from the real world to online. 
      </BodyText>
          
      <FullWidthMedia
        type="hero"
        media="/images/myer/edms.jpg"
        width="2000"
        height="1405"
      />  
      
      <BodyText heading="Leading for the first time" eyebrow="Learnings & Outcomes" accent="#9A6A00">
      MMyer's new eCommerce experience was met with great excitement from customers and key stakeholders upon release in mid 2019. 
      Throughout my time as Design Lead I began to learn how to continue to upskill the design team and
       to push them to not settle on the easy idea. I loved the ongoing challenges of consistently presenting and 
       showcasing the future direction of the website to key stakeholders and wider product and marketing teams.<br></br><br></br>
       Understanding how bigger companies work with many moving parts and balancing teams needs was a great experience and one I thoroughly enjoyed.
      </BodyText>

      

      <h3>Here's a few more projects</h3>

    <TextMediaGrid columns={2} flush={true}>
    <TextMedia
        link="/nab"
        media="/images/tiles/nab-2.jpg"
        width="610"
        height="649"
        
      >
        <h2>National Australia Bank — App</h2>
        <p>A re-imagining of the core mobile banking experience for today and into the future.</p>
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
        link="/polk"
        media="/images/tiles/polk-2.jpg"
        width="610"
        height="590"
        flip
      >
        <h2>Polk Audio — eCommerce website</h2>
        <p>
        A product-first redesign for a heritage American audio company.
        </p>
      </TextMedia>

      <TextMedia
        link="/metcon-mack"
        media="/images/tiles/nike-2.jpg"
        width="610"
        height="736"
        flip
      >
        <h2>Nike Women Metcon Mack — App + Digital Activation</h2>
        <p>An elevated digital workout experience for a Mack truck turned crossfit gym.</p>
      </TextMedia>

      

      <TextMedia
        link="/sidneyelcon"
        media="/images/tiles/sidney-2.jpg"
        width="610"
        height="647"
        
      >
        <h2>Sidney & Elcon — Typeface design</h2>
        <p>Two custom typefaces for Australia's largest department store.</p>
      </TextMedia>

    </TextMediaGrid>

    <SignOff title="Let's make something great<br/> together." />
    </div>
  </div>
);

export default Myer;
