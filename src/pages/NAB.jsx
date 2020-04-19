import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const nab = () => (
  <div>
    <h1>National Australia Bank</h1>
    <FullWidthMedia media="/images/nab/hero/nab-hero.png" width="2000" height="1250" />
    <Copy>With over 6 million daily users, NAB's new app undertook a complete UI overhaul</Copy> 

    <FullWidthMedia media="/images/nab/content/accounts.png" width="1620" height="1000" />

    <Copy>We created flexible templates that worked for all account types</Copy> 

    <FullWidthMedia media="/images/nab/content/account-details.png" width="1634" height="878" />

    
    <Copy>A new way to manage all of your account details </Copy> 

    <FullWidthMedia media="/images/nab/content/manage.png" width="1634" height="878" />

    <Copy>We built this redesign on an accessible base to reach more customers.</Copy> 

    <FullWidthMedia media="/images/nab/content/accessibility.png" width="2000" height="1172" />

    <Copy>More powerful Card features and management</Copy> 

    <FullWidthMedia media="/images/nab/content/cards.png" width="3812" height="3914" />

    <Copy>Getting answers faster and when you need them </Copy> 

    <FullWidthMedia media="/images/nab/content/live-chat.png" width="1620" height="756" />

    <Copy>Considering the smaller moments — Opening a new account</Copy> 

    <FullWidthMedia media="/images/nab/content/new-account.png" width="3268" height="1656" />

    <Copy>New ways to track of spending, making it easier at tax time</Copy> 

    <FullWidthMedia media="/images/nab/content/receipts.png" width="1620" height="1000" />

    
    


    
    <MyRole
      roles={[
        'UX Design Lead'
        
      ]}
    />

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

export default nab;
