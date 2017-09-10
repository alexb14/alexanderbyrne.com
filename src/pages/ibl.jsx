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
    <Copy>A historic name in british lighting wanted a new aesthetic.</Copy> 

    <FullWidthMedia media="/images/ibl/desktop/Homepage@2x.png" width="1440" height="1432" />

    <FullWidthMedia media="/images/ibl/desktop/ibl-brand@2x.png" width="1800" height="1040" />

    <MediaGrid
      type="desktop"
      items={[
        { media: '/images/ibl/desktop/about-us@2x.png', width: 1440, height: 3623 },
        { media: '/images/ibl/desktop/distributors@2x.png', width: 1440, height: 2702 },
      ]}
    />
    <FullWidthMedia media="/images/ibl/desktop/ibl-colour@2x.png" width="1800" height="1000" />
    
    <FullWidthMedia type="desktop" media="/images/ibl/desktop/projects@2x.png" width="1440" height="2796" />

    <FullWidthMedia type="desktop" media="/images/ibl/desktop/project-page@2x.png" width="1440" height="4010" />

    <MediaGrid
      type="desktop"
      items={[
        { media: '/images/ibl/desktop/search@2x.png', width: 1440, height: 1024 },
        { media: '/images/ibl/desktop/no results@2x.png', width: 1440, height: 1024 },
      ]}
    />
    
    <FullWidthMedia type="desktop" media="/images/ibl/desktop/category@2x.png" width="1440" height="2438" />

    <FullWidthMedia type="desktop" media="/images/ibl/desktop/Product-Page@2x.png" width="1440" height="3304" />

    <FullWidthMedia type="desktop" media="/images/ibl/desktop/Menu@2x.png" width="1440" height="768" />

    <FullWidthMedia media="/images/ibl/mobile/mock@2x.png" width="1800" height="1040" />
    


    
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
      <p>An online tool for students and educators to teach, learn and grow.</p>
    </TextMedia>

  </div>
);

export default ibl;
