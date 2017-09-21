import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const ibl = () => (
  <div>
    <h1>IBL</h1>
    <FullWidthMedia media="/images/ibl/hero/hero@2x.png" width="1800" height="1040" />
    <Copy>A historic name in British lighting needed a complete brand refresh and an aesthetic that matched their reputation</Copy> 

    <FullWidthMedia media="/images/ibl/desktop/Homepage@2x.png" width="1440" height="1432" />

    <Copy>Establishing unity between brand and iconography </Copy> 

    <FullWidthMedia media="/images/ibl/desktop/ibl-brand@2x.png" width="1800" height="1040" />

    <MediaGrid
      type="desktop"
      items={[
        { media: '/images/ibl/desktop/about-us@2x.png', width: 1440, height: 3623 },
        { media: '/images/ibl/desktop/distributors@2x.png', width: 1440, height: 2702 },
      ]}
    />
    <Copy>A bold colour palette that spoke to their heritage</Copy> 

    <FullWidthMedia media="/images/ibl/desktop/ibl-colour@2x.png" width="1800" height="1000" />
    
    <FullWidthMedia type="desktop" media="/images/ibl/desktop/projects@2x.png" width="1440" height="2796" />

    <Copy>A design that highlighted their work in its very best light</Copy> 

    <FullWidthMedia type="desktop" media="/images/ibl/desktop/project-page@2x.png" width="1440" height="4010" />

    <MediaGrid
      type="desktop"
      items={[
        { media: '/images/ibl/desktop/search@2x.png', width: 1440, height: 1024 },
        { media: '/images/ibl/desktop/no results@2x.png', width: 1440, height: 1024 },
      ]}
    />
    
    <FullWidthMedia type="desktop" media="/images/ibl/desktop/category@2x.png" width="1440" height="2438" />

    <Copy>Simplicity and focus to allow for complex customisation</Copy> 

    <FullWidthMedia type="desktop" media="/images/ibl/desktop/Product-Page@2x.png" width="1440" height="3304" />

    <FullWidthMedia type="desktop" media="/images/ibl/desktop/Menu@2x.png" width="1440" height="768" />

    
    


    
    <MyRole
      roles={[
        'Lead Designer',
        'Art Direction',
      ]}
    />

<TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900">
      <h2>Officeworks</h2>
      <p>Bringing a dated national brand into the current.</p>
    </TextMedia>

    <TextMedia link="/Hypervenom" media="/images/hypervenom/tile/hypervenom-tile.png" width="1000" height="900" flip>
    <h2>Hyper Venom 3</h2>
    <p>Nike's most agressive football boot</p>
  </TextMedia>

  </div>
);

export default ibl;
