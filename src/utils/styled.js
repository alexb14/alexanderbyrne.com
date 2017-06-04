import { css } from 'styled-components';

const minWidth = 320;
const maxWidth = 960;

export const breakpoint = {
  down: (...args) => css`
    @media (max-width: ${maxWidth}px) {
      ${css(...args)}
    }
  `,
  up: (...args) => css`
    @media (min-width: ${maxWidth + 1}px) {
      ${css(...args)}
    }
  `,
};

export const fontSize = (min, max) => {
  const slope = (min - max) / (minWidth - maxWidth);
  const base = max - slope * maxWidth;

  return css`
    @media (max-width: ${minWidth}px) {
      font-size: ${min}px;
    }
    
    @media (min-width: ${minWidth}px) {
      font-size: calc(${base}px + 100vw * ${slope});
    }
    
    @media (min-width: ${maxWidth}px) {
      font-size: ${max}px;
    }
  `;
};
