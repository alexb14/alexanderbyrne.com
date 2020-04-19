import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const unlockmelb = () => (
  <div>
    <h1>Unlock Melbourne</h1>

    <FullWidthMedia media="/images/UnlockMelb/hero/UM-hero.png" width="3000" height="1710" />

    <Copy>With more than 200,000 international students studying in Victoria each year, Unlock Melbourne is a new way for them to discover more about their new home. </Copy>

    <FullWidthMedia media="/images/UnlockMelb/content/mobile3-onboarding.png" width="2430" height="1218" />

    <Copy>We designed the Unlock Melbourne app around the universal language of emojis 😎. Allowing us to reach students in a familiar and friendly way.</Copy>

    <FullWidthMedia media="/images/UnlockMelb/content/ios-android.png" width="2430" height="1868" />

    <Copy>Easy and rewarding tasks</Copy>

    <FullWidthMedia media="/images/UnlockMelb/content/cards.png" width="4000" height="4372" />

    <Copy>From recipe cards, student testimonials, slang meanings, step-by-step tours and events.</Copy>

    <FullWidthMedia media="/images/UnlockMelb/content/content.png" width="3240" height="1624" />

    <Copy>Access to services and Study Melbourne</Copy>

    <FullWidthMedia media="/images/UnlockMelb/content/services-mock.png" width="3240" height="2026" />

    <FullWidthMedia media="/images/UnlockMelb/content/services-about.png" width="3240" height="1624" />

    <Copy> Unlock Melbourne launched on both iOS and Android at the start of 2018.</Copy>
    
    
    <MyRole
      roles={[
        'Lead Product Designer',
      ]}
    />

   
    <TextMedia link="/nab" media="/images/nab/tile/nab-tile.png" width="610" height="649" flip>
      <h2>National Australia Bank</h2>
      <p>iOS + Android App — A re-imagining of the core mobile banking experience for today and into the future</p>
    </TextMedia>

    <TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900" >
      <h2>Officeworks</h2>
      <p>Responsive eCommerce — Modernising a national legacy brand website</p>
    </TextMedia>

    <TextMedia link="/workwell" media="/images/workwell/Tile/ww-tile.png" width="610" height="680" flip>
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

export default unlockmelb;
