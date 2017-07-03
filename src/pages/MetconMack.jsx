import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';

const MetconMack = () => (
  <div>
    <h1>Metcon Mack</h1>
    <FullWidthMedia media="/images/metcon-mack/Event.jpg" width="3600" height="2400" />

     <Copy>A Mack truck turned cross-fit gym needed a digital workout experience.</Copy>

     <FullWidthMedia media="/images/metcon-mack/iPhone-1.jpg" width="3600" height="2400" />

      <Copy>The product used three devices to deliver a tailored experience to each particpant.</Copy>

      <FullWidthMedia media="/images/metcon-mack/Athletes@2x.png" width="2048" height="1536" />

      <Copy>A tablet was mounted on the wall for participants to choose their desired opponent.</Copy>

      <FullWidthMedia media="/images/metcon-mack/iPad-3.jpg" width="3600" height="2400" />

      <Copy>The Nike trainer would be notified on their smartphone of the upcoming workout.</Copy>

      <MediaGrid
      type="mobile"
      items={[
        { media: '/images/metcon-mack/mobile/metcon-mobile-animation', width: 375, height: 667, video: true },
      ]}
    />
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
      <Copy>The crowd looked on from a TV mounted to the truck</Copy>

      <FullWidthMedia media="/images/metcon-mack/Workout@2x.png" width="1920" height="1080" />
 
    <MyRole
      roles={[
        'Lead Designer',
        'Art Direction',
      ]}
    />

    
  </div>
);

export default MetconMack;
