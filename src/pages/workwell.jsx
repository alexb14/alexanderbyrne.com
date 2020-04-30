import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const workwell = () => (
  <div>
    <h1>WorkWell</h1>

    <FullWidthMedia media="/images/workwell/hero/ww-hero.png" width="2000" height="1300" />

    <Copy>An online toolkit providing action and learning material for businesses to improve mental health and wellbeing in the workplace</Copy>

    <FullWidthMedia media="/images/workwell/content/testing.png" width="2000" height="1125" />

    

    <FullWidthMedia media="/images/workwell/content/done.png" width="1366" height="939" />

    

    <MediaGrid
      type="responsive"
      items={[
        { media: "/images/workwell/content/dashboard-desktop.png", width: 2161, height: 3828 },
        { media: "/images/workwell/content/dashboard-mobile.png", width: 750, height: 1624 },
      ]}
    />

    

    <FullWidthMedia media="/images/workwell/content/modal.png" width="1599" height="2584" />

    

    <MediaGrid
      type="responsive"
      items={[
        { media: "/images/workwell/content/homepage-desktop.png", width: 2161, height: 3169 },
        { media: "/images/workwell/content/homepage-mobile.png", width: 750, height: 4374 },
      ]}
    />
    
    
    <MyRole
      roles={[
        'Lead Designer',
      ]}
    />

   
<TextMedia link="/metcon-mack-new" media="/images/metcon-mack-2020/Tile/MM-Tile.png" width="1220" height="1320" flip>
      <h2>NikeWomen Metcon Mack</h2>
      <p>App + Event activation — An elevated digital workout experience for a Mack truck turned crossfit gym</p>
    </TextMedia>

    

    <TextMedia link="/unlockmelb" media="/images/UnlockMelb/tile/UnlockMelb-tile.png" width="610" height="520" >
      <h2>Unlock Melbourne</h2>
      <p>iOS + Android App — Giving international students a fun and informative way to enjoy their new city</p>
    </TextMedia>

    <TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900" flip>
      <h2>Officeworks</h2>
      <p>Responsive eCommerce — Modernising a national legacy brand website</p>
    </TextMedia>

    <TextMedia link="/Sidney" media="/images/sidney/tile/sidney-tile.png" width="610" height="647" >
      <h2>Sidney Sans & Elcon Serif</h2>
      <p>Typeface Design — Custom typefaces for Australias largest department store</p>
    </TextMedia>

  </div>
);

export default workwell;
