import React from 'react';
import FullWidthMedia from '../components/FullWidthMedia';
import MediaGrid from '../components/MediaGrid';
import Copy from '../components/Copy';
import MyRole from '../components/MyRole';

const Officeworks = () => (
  <div>
    <h1>Officeworks</h1>
    <FullWidthMedia media="http://placehold.it/1400x400" width="1400" height="400" />
    <MediaGrid
      type="mobile"
      items={[
        { media: 'http://placehold.it/320x600', width: 320, height: 600 },
        { media: 'http://placehold.it/320x600', width: 320, height: 600 },
        { media: 'http://placehold.it/320x600', width: 320, height: 600 },
        { media: 'http://techslides.com/demos/sample-videos/small', width: 320, height: 600, video: true },
      ]}
    />
    <MediaGrid
      type="desktop"
      items={[
        { media: 'http://placehold.it/650x730', width: 650, height: 730 },
        { media: 'http://placehold.it/650x580', width: 650, height: 580 },
      ]}
    />
    <MediaGrid
      type="responsive"
      items={[
        { media: 'http://placehold.it/1000x900', width: 1000, height: 900 },
        { media: 'http://placehold.it/300x530', width: 300, height: 530 },
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
        'Art Direction',
      ]}
    />
  </div>
);

export default Officeworks;
