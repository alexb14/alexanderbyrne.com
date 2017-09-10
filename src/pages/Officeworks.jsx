import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const Officeworks = () => (
  <div>
    <h1>Officeworks</h1>
    <FullWidthMedia media="/images/officeworks/hero/ow-hero@2x.png" width="1800" height="1040" />
    <Copy>Officeworks wanted a complete overhaul of their digital style.</Copy>
    
    <FullWidthMedia media="/images/officeworks/other/ow-colour@2x.png" width="1800" height="1500" />
  

    <Copy>A component based approach informed every decision, resulting in a full UI Kit</Copy>
    <FullWidthMedia media="/images/officeworks/desktop/components@2x.png" width="1800" height="1416" />

    <Copy>Clear categorisation</Copy>
    <FullWidthMedia type="desktop" media="/images/officeworks/desktop/desktop-cat@2x.png" width="1440" height="2000" />


    <Copy>A simplified product experience</Copy>
    <FullWidthMedia type="desktop" media="/images/officeworks/desktop/Desktop-product@2x.png" width="1440" height="2680" />

    <Copy>A responsive redesign needs to be responsive, right?</Copy>
    <MediaGrid
      type="mobile"
      items={[
        { media: '/images/officeworks/mobile/homepage@2x.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/Search.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/PDP-1@2x.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/Filters.png', width: 375, height: 667 },
      ]}
    />
    
    
    <Copy>An intuitive menu that works with for the user </Copy>
    <FullWidthMedia media="/images/officeworks/mobile/Menu@2x.png" width="1800" height="1200" />
    
    
    <MyRole
      roles={[
        'Lead Designer',
      ]}
    />

<TextMedia link="/air-max-day" media="/images/airmaxday/tile/airmax-tile-2.jpg" width="1100" height="900">
      <h2>Air Max Day</h2>
      <p>A four tiered experience for one of the most anticaped shoe drop of the year.</p>
    </TextMedia>

    <TextMedia link="/metcon-mack" media="/images/metcon-mack/Tile/metcon-2.png" width="1100" height="1100" flip>
    <h2>Metcon Mack</h2>
    <p>A digital workout experience for a Macktrck turned crossfit gym </p>
  </TextMedia>

  </div>
);

export default Officeworks;
