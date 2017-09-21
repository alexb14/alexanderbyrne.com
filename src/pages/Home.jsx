import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TextMedia from '../components/TextMedia';
import { breakpoint, fontSize } from '../utils/styled';

const Introduction = styled.div`
  color: #2c2c2f;
  text-align: left;
  max-width: 750px;
  margin: 30vh auto 0;
  font-family: 'FFTisaWebLight', serif;
  
  > p {
    ${fontSize(22, 27)}
    line-height: 1.75;
  }
    
  p + p {
    color: #2c2c2f;
  }
`;

const Nav = styled.nav`
  margin-top: 6vh;
  ${breakpoint.down`display:none;`}
`;

const NavItem = styled(NavLink)`
  ${fontSize(14, 20)}
  margin-right: 15%;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #2c2c2f;
    padding: 0 0 8px 0;
  }
`;

const Home = () => (
  <div>
    <Introduction>
      <p>Hi, I'm Alex.</p>
      <p>
      I’m an Experience and Interaction designer based in Melbourne. Over the past four years, I’ve designed products and helped tailor experiences for some amazing brands.
      </p>
      <Nav>
        <NavItem to="/work">See my work</NavItem>
        
        <NavItem to="/contact">Get in touch</NavItem>
      </Nav>
    </Introduction>
    <TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900" flip>
      <h2>Officeworks</h2>
      <p>Modernising a national legacy brand website.</p>
    </TextMedia>

    <TextMedia link="/air-max-day" media="/images/airmaxday/tile/airmax-tile-2.jpg" width="1000" height="900">
      <h2>Nike Air Max Day</h2>
      <p>A multi-layered digital experience for the most anticipated shoe drop of the year.</p>
    </TextMedia>
    
    <TextMedia link="/metcon-mack" media="/images/metcon-mack/Tile/metcon-2.png" width="1100" height="1100" flip>
      <h2>NikeWomen Metcon Mack</h2>
      <p>An elevated digital workout experience for a Mack truck turned crossfit gym.</p>
    </TextMedia>

    <TextMedia link="/ibl" media="/images/ibl/tile/tile@2x.png" width="600" height="600">
      <h2>IBL</h2>
      <p>Creating a new chapter for a historic name in British lighting.</p>
    </TextMedia>

    <TextMedia link="/Hypervenom" media="/images/hypervenom/tile/hypervenom-tile-2.jpg" width="1000" height="900" flip>
      <h2>Hyper Venom 3</h2>
      <p>A page takeover for Nike’s most aggressive football boot.</p>
    </TextMedia>
  </div>
);

export default Home;
