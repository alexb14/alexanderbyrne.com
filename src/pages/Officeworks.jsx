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
    <Copy>Officeworks needed to refresh the functioning of their website. With that, came an overhaul of their digital style</Copy>
    
    <FullWidthMedia media="/images/officeworks/other/ow-colour@2x.png" width="1800" height="1500" />

    <Copy>Clear categorisation that could handle the depth of 152 links</Copy>
    <FullWidthMedia type="desktop" media="/images/officeworks/desktop/desktop-cat@2x.png" width="1440" height="2000" />


    <Copy>A sleek and simplified product experience</Copy>
    <FullWidthMedia type="desktop" media="/images/officeworks/desktop/Desktop-product@2x.png" width="1440" height="2680" />

    <Copy>Responsive consistency whether you’re on mobile or desktop</Copy>
    <MediaGrid
      type="mobile"
      items={[
        { media: '/images/officeworks/mobile/homepage@2x.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/Search.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/PDP-1@2x.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/Filters.png', width: 375, height: 667 },
      ]}
    />
    
    <Copy>A component-based approach informed every decision, resulting in a full, future-proofed UI kit</Copy>
    <FullWidthMedia media="/images/officeworks/desktop/components@2x.png" width="1800" height="1416" />
    
    <Copy>An intuitive menu designed for the user</Copy>
    <FullWidthMedia media="/images/officeworks/mobile/Menu@2x.png" width="1800" height="1200" />
    
    
    <MyRole
      roles={[
        'Lead Designer',
      ]}
    />

    <TextMedia link="/air-max-day" media="/images/airmaxday/tile/airmax-tile-2.jpg" width="1000" height="900">
      <h2>Nike Air Max Day</h2>
      <p>A multi-layered digital experience for the most anticipated shoe drop of the year.</p>
    </TextMedia>

    <TextMedia link="/ibl" media="/images/ibl/tile/tile@2x.png" width="600" height="600" flip>
    <h2>IBL</h2>
    <p>Creating a new chapter for a historic name in British lighting.</p>
  </TextMedia>

  </div>
);

export default Officeworks;
