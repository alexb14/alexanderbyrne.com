import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';

const AirMaxDay = () => (
  <div>
    <h1>Air Max Day</h1>
    <FullWidthMedia media="/images/airmaxday/hero/airmax-hero-4.jpg" width="1920" height="1080" />
    <Copy>A four tiered experience for one of the most anticaped shoe drops of the year.</Copy>
    <FullWidthMedia type="desktop" media="/images/airmaxday/desktop/Grid@2x.png" width="3600" height="2048" />
    <Copy>Each AirMax had its own individual experience.</Copy>
      <MediaGrid
      items={[
        { media: '/images/airmaxday/desktop/OG-1@2x.png', width: 3600, height: 2048 },
        { media: '/images/airmaxday/desktop/Master-1@2x.png', width: 3600, height: 2048 },
        { media: '/images/airmaxday/desktop/Atmos-1@2x.png', width: 3600, height: 2048 },
        { media: '/images/airmaxday/desktop/Vapor-1@2x.png', width: 3600, height: 2048 },
      ]}
    />
    <MediaGrid
      type="mobile"
      items={[
        { media: '/images/airmaxday/mobile/Mockup-OG@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/Mockup-Master@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/Mockup-Atmos@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/Mockup-VaporMax@2x.png', width: 375, height: 667 },
      ]}
    />

    <Copy>Take the AirMax experience.</Copy>

    <FullWidthMedia type="desktop" media="/images/airmaxday/desktop/Vapor-3@2x.png" width="3600" height="2048" />

      <MediaGrid
      type="mobile"
      items={[
        { media: '/images/airmaxday/mobile/mockup-OG-1@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/mockup-OG-5@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/mockup-OG-2@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/mockup-OG-6@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/mockup-OG-3@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/mockup-OG-7@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/mockup-OG-4@2x.png', width: 375, height: 667 },
        { media: '/images/airmaxday/mobile/mockup-OG-8@2x.png', width: 375, height: 667 },
      ]}
    />

    
    <MyRole
      roles={[
        'Lead Designer',
        'Art Direction',
      ]}
    />
  </div>
);

export default AirMaxDay;
