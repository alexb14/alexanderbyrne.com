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

const Myer = () => (
  <div>
    <IntroText heading="Myer">
    A full redesign of the e-commerce experience for Australia’s largest home and fashion retailer. 
    From content to checkout, all is new in the world of Myer.
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
      Myer's eCommerce infrastructure and design weren't providing customers with an aspirational or easy to use experience. 
      I was brought in to hero the role of design in this initiative and led in a hands on way a team of 3 designers to undertake 
      a complete overhaul of myer.com.au. 
      </BodyText>

      <BodyText heading="" eyebrow="Key focus areas" accent="#9A6A00">
      1. Design a robust eCommerce experience helping drive the entire online business. 
      <br></br><br></br>
      2. Close the gap in relationships between Design and Marketing, Loyalty, Merchandising and development teams to set a seamless working foundation to take Myer into the future.
      <br></br><br></br>
      3. An awe-inspiring, and accessible, experience that matches the joy and wonder of shopping in the retail Department Stores.
      </BodyText>

      <BodyText heading="Getting the basics right" eyebrow="The solution" accent="#9A6A00">
      Before jumping into buttons, interactions, page layouts and more, we focused on getting the smaller details right to 
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

      <BodyText heading="A welcoming Homepage experience on mobile" eyebrow="The solution" accent="#9A6A00">
      With mobile traffic vastly overtaking desktop we knew that creating a welcoming experience for these customers was crucial. 
      We wanted to provide shoppers  with a Homepage experience that allowed them to quickly and easily dive into relevant categories, 
      shop sales, imagine themselves in an entire look and effortlessly see what Myer had from their favourite brands.
      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/myer/home-mobile.jpg"
        width="2000"
        height="1405"
      />

      <BodyText heading="...and Desktop too" eyebrow="The solution" accent="#9A6A00">
      A large part of Myer's business strategy relies on themed sale events. Whilst their in store and marketing collateral were always 
      consistent, and relevant to the event, the online experience traditionally stayed neutral all year round. This was a key area they 
      wanted to invest in to create a consistent omni-channel experience. 
      <br></br><br></br>
      In order to assist in creating a consistent omni-channel experience, we designed a robust Homepage structure that enabled 
      themes, events and relevant media to shine through. All while keeping the user experience at the forefront.

      </BodyText>

      <FullWidthMedia
        type="hero"
        media="/images/myer/home-desktop.jpg"
        width="2000"
        height="1405"
      />

      <BodyText heading="An immersive experience wherever you land" eyebrow="The solution" accent="#9A6A00">
      I was well aware from analysis of the data that not all users simply landed on the Homepage and started navigating the site. 
      Large percentages of users were landing at Category level pages and were met with an underwhelming first impression. 
      We imagined an experience that could balance the need to immerse the user in their desired category with a structured, 
      componentised approach that the Development Team could implement. 
      <br></br><br></br>
      This resulted in a design that made the user feel like they had arrived at a site that deeply cared about the category they were interested in.
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
      The final piece of the puzzle was the purchasing journey. In our research we found that all too often checkouts experience 
      the same friction points and didn’t feel like they were developed for the nuances of the customers. 
      For the Myer checkout, we had multiple user expectations to juggle:
      <br></br><br></br>
      • Delivery or Click & Collect,<br></br>
      • Picking up in Person or sending a verified person,<br></br>
      • Paying with credit card, instalments or multiple gift cards.
      <br></br><br></br>
      We tested early, and often, which resulted in a thoroughly considered checkout experience specifically designed to serve the Myer shopper.
      </BodyText>


      <Devices
        items={[
          {
            media: "/images/myer/Desktop_Checkout.webm",
            width: 1680,
            height: 968,
            border: "#efefef",
            caption: "The above prototype was the evolution of frequent user testing. This was the execution that customers felt met their needs and created an easy and secure checkout experience.",
            type: "full",
            radius: 40,
            video: true
          },
        ]}
      />

      <BodyText heading="Rounding out the purchasing experience" eyebrow="The solution" accent="#9A6A00">
      A currently overlooked element were the post-purchase EDMs; an integral part of reducing customers’ 
      purchase related anxiety and keeping them informed. Reimagining what the EDM experience could be for Myer, 
      we championed the importance of relevance by organising photoshoots of Myer's delivery packaging. 
      The outcome helped Myer to bridge the gap between the real world experience to online.
      </BodyText>
          
      <FullWidthMedia
        type="hero"
        media="/images/myer/edms.jpg"
        width="2000"
        height="1405"
      />  

      <Quote
        avatar="/images/myer/zd-net.jpg"
        citation="Aimee Chanthadavong, ZDNet "
      >
        “The enhancements that Myer continues to make to its online store is paying off with the Australian 
        chain reporting that digital sales were up almost 22% to AU$292 million during the 2019 financial year.”
      </Quote>
      
      <BodyText heading="Test and learn cycles" eyebrow="Learnings & Outcomes" accent="#9A6A00">
      Having access to an in-house accessibility team, who worked closely with the Design and Development departments, 
      was a great way to learn a lot more about the core elements of accessible design. Building this relationship with 
      the team throughout my time at Myer was crucial to the success of the project and also my personal development as a Designer. 
      <br></br><br></br>
      Having more frequent front-line experience with Myer’s end users also really strengthened my understanding of User Testing 
      and pushed me to evolve and finesse my immediate designs to better suit the user's needs. I was really able to see the benefits 
      of getting concepts and ideas in front of users much earlier in the process. 
      <br></br><br></br>
      Post launch of Myers new website, their online sales saw significant growth which was reported on in press throughout 2019. 
      eCommerce fast became their largest store representing 9.8% of total sales.
      </BodyText>

      

      <h3>Here's a few more projects</h3>

    <TextMediaGrid columns={2} flush={true}>



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

    </TextMediaGrid>

    <SignOff title="Let's make something great<br/> together." />
    </div>
  </div>
);

export default Myer;
