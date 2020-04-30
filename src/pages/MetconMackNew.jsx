import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';
import Video from '../components/Video';

const MetconMackNew  = () => (
  <div>
    <h1>Metcon Mack</h1>
    <FullWidthMedia media="/images/metcon-mack-2020/hero/MM-hero.png" width="3000" height="1707" />

     <Copy>An elevated digital workout experience for a Mack truck turned crossfit gym, to launch Nike’s latest training shoe. </Copy>
     <FullWidthMedia media="/images/metcon-mack/iPad-3.jpg" width="3600" height="2400" />

     <Copy>A tablet was mounted onto the Mack’s wall inviting participants to choose their desired opponent</Copy>
     <FullWidthMedia media="images/metcon-mack-2020/content/Grid.png" width="2430" height="1275" />
     <FullWidthMedia media="images/metcon-mack-2020/content/Athlete.png" width="2430" height="1275" />
     <FullWidthMedia media="images/metcon-mack-2020/content/Shoe.png" width="2430" height="1275" />
     
     <Copy>The Nike trainer then received a smartphone notification that someone was ready for a challenge</Copy>

    <FullWidthMedia media="/images/metcon-mack-2020/content/workout.png" width="2430" height="1684" />

  
      <Copy>Push-ups or Burpees?</Copy>

      <MediaGrid
      type="mobile"
      items={[
        { media: '/images/metcon-mack-2020/content/Metcon - Challenger.png', width: 375, height: 812 },
        { media: '/images/metcon-mack-2020/content/Metcon - Active-1.png', width: 375, height: 812 },
        { media: '/images/metcon-mack-2020/content/Metcon - Active.png', width: 375, height: 812 },
        { media: '/images/metcon-mack-2020/content/Metcon - Finish.png', width: 375, height: 812 },
        
      ]}
    />


      <Copy>The challenge was completed as the crowd watched reps get counted in real-time on an external screen</Copy>

      <FullWidthMedia media="/images/metcon-mack-2020/content/TV.png" width="2430" height="1500" />
 
    <MyRole
      roles={[
        'Lead Designer',
        'Art Direction',
      ]}
    />
  

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
    
  </div>
   
);

export default MetconMackNew;
