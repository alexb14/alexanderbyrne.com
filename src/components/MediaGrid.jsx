import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Video from './Video';

const Root = styled.div`
  margin: 16vh 0 0;
  
  ${props => props.type === 'mobile' && `
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
  `}
`;

const Wrapper = styled.div`
  display: table;
  width: 100%;
`;

const Item = styled.div`
  margin-bottom: 8vh;
  margin-right: 4vh;
`;

const Column = styled.div`
  display: table-cell;
  vertical-align: top;
  
  &:last-child > * {
    margin-left: 4vh;
    margin-right: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${props => props.type === 'mobile' && `
    &:first-child {
      padding-top: 8vh;
    }
    
    &:last-child {
      padding-bottom: 8vh;
    }
  `}
  
  ${props => props.type === 'responsive' && `
    &:first-child {
      width: 75%;
      
      > * {
        border-top: 16px solid #e8e8e8;
        border-radius: 6px 6px 0 0;
      }
    }
    
    &:last-child > * {
      margin-top: 16px;
    }
  `}
`;

const renderItem = (item, index) => (
  <Item key={index}>
    {item.video ? <Video {...item} /> : <Image {...item} />}
  </Item>
  );

const MediaGrid = ({ items, type }) => (
  <Root type={type}>
    <Wrapper>
      <Column type={type}>
        {items.splice(0, Math.floor(items.length / 2)).map(renderItem)}
      </Column>
      <Column type={type}>
        {items.map(renderItem)}
      </Column>
    </Wrapper>
  </Root>
);

export default MediaGrid;
