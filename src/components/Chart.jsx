import React from "react";
import styled from "styled-components";
import { breakpoint } from "../utils/styled";

const Root = styled.div`
  position: relative;
  padding-bottom: 75%;
  margin-bottom: 18%;
  margin-top: 12%;
`;
const Graph = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;
const Legend = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  ${breakpoint.down`display: none;`};
`;
const Map = styled.img`
  @keyframes fadeInBlob {
    from {
      opacity: 0;
      transform: scale(0.7) rotate(3deg) skewX(9deg) skewY(-7deg);
      transform-origin: 70% 50%;
    }
    to {
      opacity: 1;
      transform: scale(1) rotate(0deg) skewX(0deg) skewY(0deg);
      transform-origin: 70% 50%;
    }
  }
  animation: fadeInBlob 2000ms ease;
  max-width: 100%;
  height: auto;
  position: absolute;
  top: 10%;
  left: 11%;
  z-index: 2;
  width: 60%;
  height: auto;
`;

const Chart = () => (
  <Root>
    <Graph src="/images/Graph.svg" />
    <Map src="/images/Map.svg" />
    <Legend src="/images/Legend.svg" />
  </Root>
);

export default Chart;
