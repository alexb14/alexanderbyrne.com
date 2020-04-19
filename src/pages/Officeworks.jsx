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

   
<TextMedia link="/nab" media="/images/nab/tile/nab-tile.png" width="610" height="649" flip>
      <h2>National Australia Bank</h2>
      <p>iOS + Android App — A re-imagining of the core mobile banking experience for today and into the future</p>
    </TextMedia>

    <TextMedia link="/unlockmelb" media="/images/UnlockMelb/tile/UnlockMelb-tile.png" width="610" height="520" flip>
      <h2>Unlock Melbourne</h2>
      <p>iOS + Android App — Giving international students a fun and informative way to enjoy their new city</p>
    </TextMedia>

    <TextMedia link="/workwell" media="/images/workwell/Tile/ww-tile.png" width="610" height="680" >
      <h2>WorkWell</h2>
      <p>Web Toolkit — Helping businesses take the first steps towards a mentally health workplace</p>
    </TextMedia>

    <TextMedia link="/Sidney" media="/images/sidney/tile/sidney-tile.png" width="610" height="647" >
      <h2>Sidney Sans & Elcon Serif</h2>
      <p>Typeface Design — Custom typefaces for Australias largest department store</p>
    </TextMedia>

    <TextMedia link="/metcon-mack-new" media="/images/metcon-mack-2020/Tile/MM-Tile.png" width="1220" height="1320" flip>
      <h2>NikeWomen Metcon Mack</h2>
      <p>App + Event activation — An elevated digital workout experience for a Mack truck turned crossfit gym</p>
    </TextMedia>

  </div>
);

export default Officeworks;
