import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';
import TextMedia from '../components/TextMedia';

const Officeworks = () => (
  <div>
    <h1>Officeworks</h1>
    <FullWidthMedia media="/images/officeworks/hero/ow-hero@2x.png" width="1800" height="900" />
    <Copy>Officeworks wanted a complete overhaul of their digital style.</Copy>
    
    <FullWidthMedia media="/images/officeworks/other/ow-colour@2x.png" width="1800" height="1500" />
    <FullWidthMedia media="/images/officeworks/other/ow-text@2x.png" width="1800" height="1500" />

    <Copy>A component based approach informed every decision, resulting in a full UI Kit</Copy>
    <FullWidthMedia media="/images/officeworks/desktop/components@2x.png" width="1800" height="1416" />

    <Copy>A responsive redesign needs to be responsive, right?</Copy>
    <MediaGrid
      type="mobile"
      items={[
        { media: '/images/officeworks/mobile/homepage@2x.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/Search.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/PDP-1@2x.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/Filters.png', width: 375, height: 667 },
      ]}
    />
    <MediaGrid
      type="desktop"
      items={[
        { media: '/images/officeworks/desktop/category-page.jpg', width: 1440, height: 1947 },
        { media: '/images/officeworks/desktop/product-page.jpg', width: 1440, height: 3321 },
      ]}
    />
    <MediaGrid
      type="responsive"
      items={[
        { media: '/images/officeworks/desktop/product-page.jpg', width: 1440, height: 3321 },
        { media: '/images/officeworks/mobile/product-page-mobile.jpg', width: 640, height: 10453 },
      ]}
    />
    <MediaGrid
      items={[
        { media: 'http://placehold.it/700x400', width: 700, height: 400 },
        { media: 'http://placehold.it/700x400', width: 700, height: 400 },
        { media: 'http://placehold.it/700x400', width: 700, height: 400 },
        { media: 'http://placehold.it/700x400', width: 700, height: 400 },
      ]}
    />
    <FullWidthMedia type="desktop" media="http://placehold.it/1400x800" width="1400" height="800" />
    <Copy>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin ligula vel convallis suscipit.</Copy>
    <FullWidthMedia type="desktop" media="http://techslides.com/demos/sample-videos/small" width="1400" height="800" video />
    <MyRole
      roles={[
        'Lead Designer',
      ]}
    />

<TextMedia link="/air-max-day" media="/images/airmaxday/tile/airmax-tile-2.jpg" width="1100" height="900">
      <h2>Air Max Day</h2>
      <p>A four tiered experience for one of the most anticaped shoe drop of the year.</p>
    </TextMedia>

    <TextMedia link="/metcon-mack" media="/images/metcon-mack/Tile/metcon-2.png" width="1100" height="1100" flip>
      <h2>Metcon Mack</h2>
      <p>An online tool for students and educators to teach, learn and grow.</p>
    </TextMedia>

  </div>
);

export default Officeworks;
