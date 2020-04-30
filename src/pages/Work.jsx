import React from 'react';
import TextMedia from '../components/TextMedia';

const Work = () => (
  <div>
    
   

    <TextMedia link="/unlockmelb" media="/images/UnlockMelb/tile/UnlockMelb-tile.png" width="610" height="520" >
      <h2>Unlock Melbourne</h2>
      <p>iOS + Android App — Giving international students a fun and informative way to enjoy their new city</p>
    </TextMedia>

    <TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900" flip>
      <h2>Officeworks</h2>
      <p>Responsive eCommerce — Modernising a national legacy brand website</p>
    </TextMedia>

    <TextMedia link="/workwell" media="/images/workwell/Tile/ww-tile.png" width="610" height="680" >
      <h2>WorkWell</h2>
      <p>Web Toolkit — Helping businesses take the first steps towards a mentally health workplace</p>
    </TextMedia>

    <TextMedia link="/Sidney" media="/images/sidney/tile/sidney-tile.png" width="610" height="647" flip>
      <h2>Sidney Sans & Elcon Serif</h2>
      <p>Typeface Design — Custom typefaces for Australias largest department store</p>
    </TextMedia>
    
    <TextMedia link="/metcon-mack-new" media="/images/metcon-mack-2020/Tile/MM-Tile.png" width="1220" height="1320" >
      <h2>NikeWomen Metcon Mack</h2>
      <p>App + Event activation — An elevated digital workout experience for a Mack truck turned crossfit gym</p>
    </TextMedia>
    
    <TextMedia link="/" media="/images/myer/tile/myer-tile.png" width="610" height="736" flip>
      <h2>Myer ~ Coming soon</h2>
      <p>Design System + Responsive eCommerce — A brightened shopping experience for Australia’s largest home and fashion retailer</p>
    </TextMedia>
  </div>
);

export default Work;
