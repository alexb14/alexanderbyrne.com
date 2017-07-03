import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';

const Officeworks = () => (
  <div>
    <h1>Officeworks</h1>
    <FullWidthMedia media="/images/officeworks/hero/ow-hero.jpg" width="2400" height="1600" />
    <Copy>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin ligula vel convallis suscipit.</Copy>
    <FullWidthMedia media="/images/officeworks/desktop/header.png" width="1800" height="698" />
    <FullWidthMedia media="/images/officeworks/desktop/styles.png" width="1800" height="697" />
    <FullWidthMedia media="/images/officeworks/desktop/components-2.jpg" width="1800" height="1416" />
    <MediaGrid
      type="mobile"
      items={[
        { media: '/images/officeworks/mobile/Homepage.png', width: 375, height: 667 },
        { media: '/images/officeworks/mobile/Search.png', width: 375, height: 667 },
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
  </div>
);

export default Officeworks;
