import React from "react";
import Copy from "../components/Copy";
import FullWidthMedia from "../components/FullWidthMedia";

const Writing = () => (
  <div>
    <h1>Sharing my thoughts, advice, struggles and successes.</h1>
    <FullWidthMedia
      media="https://www.placecage.com/c/500/200"
      width="500"
      height="200"
    />
    <Copy>
      Todo - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      sollicitudin ligula vel convallis suscipit
    </Copy>
  </div>
);

export default Writing;
