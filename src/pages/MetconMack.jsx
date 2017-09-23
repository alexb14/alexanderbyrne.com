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
    <FullWidthMedia media="/images/metcon-mack/hero/iPhone-2.jpg" width="2000" height="1333" />

     <Copy>An elevated digital workout experience for a Mack truck turned crossfit gym, to launch Nike’s latest training shoe. </Copy>
     <FullWidthMedia media="/images/metcon-mack/Event.jpg" width="3600" height="2400" />

     

      <Copy>A custom-designed app that used three interfaces and three separate pieces of hardware to deliver one tailored experience</Copy>

    <FullWidthMedia media="/images/metcon-mack/iPad-3.jpg" width="3600" height="2400" />

      <Copy>The tablet was mounted onto the Mack’s wall inviting participants to choose their desired opponent</Copy>
         <MediaGrid
      items={[
        { media: '/images/metcon-mack/tablet/iPad-Home@2x.png', width: 2048, height: 1536 },
        { media: '/images/metcon-mack/tablet/Summary@2x.png', width: 2048, height: 1536 },
        { media: '/images/metcon-mack/tablet/Athletes@2x.png', width: 2048, height: 1536 },
        { media: '/images/metcon-mack/tablet/Shoe-2@2x.png', width: 2048, height: 1536 },
        
      ]}
    />
      
    
    <Copy>The Nike trainer then received a smartphone notification that someone was ready for a challenge</Copy>

    <FullWidthMedia media="/images/metcon-mack/mobile/mobile-animation" width="1800" height="900" video/>

  
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


      <Copy>The challenge was completed as the crowd watched reps get counted in real-time on an external screen</Copy>

      <FullWidthMedia media="/images/metcon-mack/tv-dark@2x.png" width="1800" height="1150" />
 
    <MyRole
      roles={[
        'Lead Designer',
        'Art Direction',
      ]}
    />

   
    <TextMedia link="/air-max-day" media="/images/airmaxday/tile/airmax-tile-2.jpg" width="1000" height="900">
      <h2>Nike Air Max Day</h2>
      <p>A multi-layered digital experience for the most anticipated shoe drop of the year.</p>
    </TextMedia>

    <TextMedia link="/Hypervenom" media="/images/hypervenom/tile/hypervenom-tile-2.jpg" width="1000" height="900" flip>
      <h2>Nike HyperVenom</h2>
      <p>A page takeover for Nike’s most aggressive football boot.</p>
    </TextMedia>
    
  </div>
   
);

export default MetconMack;
