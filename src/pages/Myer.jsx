import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const myer = () => (
  <div>
    <h1>Myer</h1>
    <FullWidthMedia media="/images/myer/hero/myer-hero.png" width="2000" height="1225" />
    <Copy>A historic name in British lighting needed a complete brand refresh and an aesthetic that matched their reputation</Copy> 

    <FullWidthMedia media="/images/ibl/desktop/Homepage@2x.png" width="1440" height="1432" />
 
    <MyRole
      roles={[
        'Lead Designer',
        'Art Direction',
      ]}
    />

    <TextMedia link="/Hypervenom" media="/images/hypervenom/tile/hypervenom-tile-2.jpg" width="1000" height="900">
    <h2>Nike Hypervenom</h2>
    <p>A page takeover for Nike’s most aggressive football boot.</p>
  </TextMedia>
  
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


  
  

  </div>
);

export default myer;
