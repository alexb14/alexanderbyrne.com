import React from 'react';
import TextMedia from '../components/TextMedia';

const Work = () => (
  <div>
    <h1>Work</h1>
    <TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900" flip>
    <h2>Officeworks</h2>
    <p>Bringing a dated national brand into the current.</p>
  </TextMedia>

  <TextMedia link="/air-max-day" media="/images/airmaxday/tile/airmax-tile-2.jpg" width="1000" height="900">
    <h2>Air Max Day</h2>
    <p>A four tiered experience for one of the most anticaped shoe drop of the year.</p>
  </TextMedia>
  
  <TextMedia link="/metcon-mack" media="/images/metcon-mack/Tile/metcon-2.png" width="1100" height="1100" flip>
    <h2>Metcon Mack</h2>
    <p>A digital workout experience for a Macktrck turned crossfit gym </p>
  </TextMedia>

  <TextMedia link="/ibl" media="/images/ibl/tile/tile@2x.png" width="600" height="600">
    <h2>IBL</h2>
    <p>A new chapter for a hostoric name in british lighting</p>
  </TextMedia>

  <TextMedia link="/Hypervenom" media="/images/hypervenom/tile/hypervenom-tile-3.jpg" width="1000" height="1389" flip>
    <h2>Hyper Venom 3</h2>
    <p>Nike's most agressive football boot</p>
  </TextMedia>
  </div>
);

export default Work;
