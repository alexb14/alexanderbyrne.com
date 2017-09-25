import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const Hypervenom = () => (
  <div>
    <h1>Nike HyperVenom</h1>
    <FullWidthMedia media="/images/hypervenom/other/hyper-hero.png" width="2400" height="1500" />

     <Copy>As part of the release of their new Hyper Venom 3, Nike gave rebel customer’s a bold, powerful experience</Copy>

     <FullWidthMedia media="/images/hypervenom/desktop/hypervenom-scroll-3" width="1600" height="1000" video/>

      <Copy>Reimagined vivid colours and striking lines</Copy>

      <MediaGrid
      type="responsive"
      items={[
        { media: "/images/hypervenom/desktop/Rebel-HyperVenom@2x.jpg", width: 3000, height: 9100 },
        { media: "/images/hypervenom/mobile/Rebel-HyperVenom.png", width: 750, height: 7598 },
      ]}
    />
    
    <FullWidthMedia media="/images/hypervenom/other/player.jpg" width="3142" height="2095" />

    <Copy>Powerful execution as clean as the fit of the shoe </Copy>

      <MediaGrid
      type="mobile"
      items={[
        { media: '/images/hypervenom/mobile/Modal-1@2x.png', width: 375, height: 667 },
        { media: '/images/hypervenom/mobile/Modal-3@2x.png', width: 375, height: 667 },
        { media: '/images/hypervenom/mobile/Modal-2@2x.png', width: 375, height: 667 },
        { media: '/images/hypervenom/mobile/Modal-4@2x.png', width: 375, height: 667 },
      ]}
    />
    
    <FullWidthMedia media="/images/hypervenom/other/venom-shoe.jpg" width="2000" height="1333" />
 
    <MyRole
      roles={[
        'Lead Interaction Designer',
      ]}
    />

    
    <TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900" flip>
    <h2>Officeworks</h2>
    <p>Modernising a national legacy brand website.</p>
  </TextMedia>

  <TextMedia link="/air-max-day" media="/images/airmaxday/tile/airmax-tile-2.jpg" width="1000" height="900">
    <h2>Nike Air Max Day</h2>
    <p>A multi-layered digital experience for the most anticipated shoe drop of the year.</p>
  </TextMedia>
  
  <TextMedia link="/metcon-mack" media="/images/metcon-mack/Tile/metcon-2.png" width="1100" height="1100" flip>
    <h2>NikeWomen Metcon Mack</h2>
    <p>An elevated digital workout experience for a Mack truck turned crossfit gym.</p>
  </TextMedia>

  <TextMedia link="/ibl" media="/images/ibl/tile/tile@2x.png" width="600" height="600">
    <h2>IBL</h2>
    <p>Creating a new chapter for a historic name in British lighting.</p>
  </TextMedia>

  

  </div>
);

export default Hypervenom;
