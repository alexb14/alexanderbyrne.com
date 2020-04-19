import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const Sidney = () => (
  <div>
    <h1>Sidney Sans & Elcon Serif</h1>

    <FullWidthMedia media="/images/sidney/hero/sidney-hero.png" width="2000" height="1138" />

    <Copy>Sidney Sans — a geometric sans serif typeface boasting simplified characters purposefully designed to increase legibility and acccessibility</Copy>

    <FullWidthMedia media="/images/sidney/content/sidney-alphabet.png" width="1620" height="810" />

    <FullWidthMedia media="/images/sidney/content/sidney-mock.png" width="1634" height="828" />

    <FullWidthMedia media="/images/sidney/content/sidney-highlights.png" width="1620" height="600" />

    <Copy>Elcon Serif — for all things fashion, elegance, beauty and rewards</Copy>

    <FullWidthMedia media="/images/sidney/content/Elcon-Alphabet.png" width="2000" height="1125" />

    <FullWidthMedia media="/images/sidney/content/Elcon-Weights.png" width="2000" height="1125" />

    <FullWidthMedia media="/images/sidney/content/elcon-mock.png" width="1620" height="960" />

    <Copy>Both typefaces were workshopped, designed and created with the help from the team at The Designers Foundry.</Copy>
    
    <MyRole
      roles={[
        'Art & Creative Direction',
      ]}
    />

   
<TextMedia link="/metcon-mack-new" media="/images/metcon-mack-2020/Tile/MM-Tile.png" width="1220" height="1320" flip>
      <h2>NikeWomen Metcon Mack</h2>
      <p>App + Event activation — An elevated digital workout experience for a Mack truck turned crossfit gym</p>
    </TextMedia>
    
    <TextMedia link="/nab" media="/images/nab/tile/nab-tile.png" width="610" height="649" >
      <h2>National Australia Bank</h2>
      <p>iOS + Android App — A re-imagining of the core mobile banking experience for today and into the future</p>
    </TextMedia>

    <TextMedia link="/unlockmelb" media="/images/UnlockMelb/tile/UnlockMelb-tile.png" width="610" height="520" flip>
      <h2>Unlock Melbourne</h2>
      <p>iOS + Android App — Giving international students a fun and informative way to enjoy their new city</p>
    </TextMedia>

    <TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900" >
      <h2>Officeworks</h2>
      <p>Responsive eCommerce — Modernising a national legacy brand website</p>
    </TextMedia>

    <TextMedia link="/workwell" media="/images/workwell/Tile/ww-tile.png" width="610" height="680" flip>
      <h2>WorkWell</h2>
      <p>Web Toolkit — Helping businesses take the first steps towards a mentally health workplace</p>
    </TextMedia>

  </div>
);

export default Sidney;
