import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const Hypervenom = () => (
  <div>
    <h1>Hyper Venom 3</h1>
    <FullWidthMedia media="/images/hypervenom/other/hyper-hero.png" width="2400" height="1500" />

     <Copy>Nike needed a landing page for the new Hyper Venom 3</Copy>

     <FullWidthMedia media="/images/hypervenom/desktop/hypervenom-scroll-3" width="1600" height="1000" video/>

      <Copy>A bold and aggressive experience reimagining vivid colours and striking lines.</Copy>

      <MediaGrid
      type="responsive"
      items={[
        { media: "/images/hypervenom/desktop/Rebel-HyperVenom@2x.jpg", width: 3000, height: 9100 },
        { media: "/images/hypervenom/mobile/Rebel-HyperVenom.png", width: 750, height: 7598 },
      ]}
    />
    
    <FullWidthMedia media="/images/hypervenom/other/player.jpg" width="3142" height="2095" />
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

    
<TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900">
      <h2>Officeworks</h2>
      <p>Bringing a dated national brand into the current.</p>
    </TextMedia>

    <TextMedia link="/ibl" media="/images/ibl/tile/tile@2x.png" width="600" height="600">
    <h2>IBL</h2>
    <p>A new chapter for a hostoric name in british lighting</p>
  </TextMedia>

  </div>
);

export default Hypervenom;
