import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';
import Video from '../components/Video';

const MetconMack = () => (
  <div>
    <h1>Metcon Mack</h1>
    <FullWidthMedia media="/images/metcon-mack/hero/metcon-hero.jpg" width="2000" height="1333" />

     <Copy>A Mack truck turned cross-fit gym needed a digital workout experience for the launch of Nike's new Metcon trainer.</Copy>
     <FullWidthMedia media="/images/metcon-mack/Event.jpg" width="3600" height="2400" />

     

      <Copy>The product used three devices to deliver a tailored experience to each particpant.</Copy>

    <FullWidthMedia media="/images/metcon-mack/iPad-3.jpg" width="3600" height="2400" />

      <Copy>A tablet was mounted on the wall for participants to choose their desired opponent.</Copy>
         <MediaGrid
      items={[
        { media: '/images/metcon-mack/tablet/iPad-Home@2x.png', width: 2048, height: 1536 },
        { media: '/images/metcon-mack/tablet/Summary@2x.png', width: 2048, height: 1536 },
        { media: '/images/metcon-mack/tablet/Athletes@2x.png', width: 2048, height: 1536 },
        { media: '/images/metcon-mack/tablet/Shoe-2@2x.png', width: 2048, height: 1536 },
        
      ]}
    />
      
    
    <Copy>The Nike trainer would be notified on their smartphone of the upcoming workout.</Copy>

    <Video media="/images/metcon-mack/mobile/metcon-mobile-animation" width="375" height="667"/>

  
      <Copy>Push-ups or Burpees?</Copy>

      <MediaGrid
      type="mobile"
      items={[
        { media: '/images/metcon-mack/Workout-Start@2x.png', width: 375, height: 667 },
        { media: '/images/metcon-mack/Workout-End@2x.png', width: 375, height: 667 },
        { media: '/images/metcon-mack/Workout-Live@2x.png', width: 375, height: 667 },
        { media: '/images/metcon-mack/Workout-Finish@2x 2.png', width: 375, height: 667 },
      ]}
    />

    <FullWidthMedia media="/images/metcon-mack/iPhone-1.jpg" width="3600" height="2400" />


      <Copy>The crowd looked on from a TV mounted to the truck</Copy>

      <FullWidthMedia media="/images/metcon-mack/tv-dark@2x.png" width="1800" height="1150" />
 
    <MyRole
      roles={[
        'Lead Designer',
        'Art Direction',
      ]}
    />

   
<TextMedia link="/air-max-day" media="/images/airmaxday/tile/airmax-tile.png" width="800" height="900">
      <h2>Air Max Day</h2>
      <p>A four tiered experience for one of the most anticaped shoe drop of the year.</p>
    </TextMedia>

    <TextMedia link="/ibl" media="/images/ibl/tile/tile@2x.png" width="600" height="600">
    <h2>IBL</h2>
    <p>A new chapter for a hostoric name in british lighting</p>
  </TextMedia>
    
  </div>
   
);

export default MetconMack;
