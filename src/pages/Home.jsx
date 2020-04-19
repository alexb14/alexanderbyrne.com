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
    ${fontSize(34, 34)}
    line-height: 1.75;
  }
    
  p + p {
    color: #2c2c2f;
  }
`;

const Signoff = styled.div`
  color: #2c2c2f;
  text-align: center;
  max-width: 750px;
  margin: 30vh auto 0;
  font-family: 'FFTisaWebLight', serif;
  
  > p {
    ${fontSize(27, 40)}
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

const NavItemBottom = styled(NavLink)`
  ${fontSize(14, 20)}
  margin-right: 0%;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #2c2c2f;
    padding: 0 0 8px 0;
  }
`;

const Home = () => (
  <div>
    <Introduction>
      <p>Hi, I'm Alexander. An Experience and Interaction designer in London.</p>
      
      <Nav>
        <NavItem to="/work">See my work</NavItem>
        
        <NavItem to="/contact">Get in touch</NavItem>
      </Nav>
    </Introduction>

    <TextMedia link="/nab" media="/images/nab/tile/nab-tile.png" width="610" height="650" >
      <h2>National Australia Bank</h2>
      <p>iOS + Android App — A re-imagining of the core mobile banking experience for today and into the future</p>
    </TextMedia>

    <TextMedia link="/unlockmelb" media="/images/UnlockMelb/tile/UnlockMelb-tile.png" width="610" height="520" flip>
      <h2>Unlock Melbourne</h2>
      <p>iOS + Android App — Giving international students a fun and informative way to enjoy their new city</p>
    </TextMedia>

    <TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900" >
      <h2>Officeworks</h2>
      <p>Responsive eCommerce — Modernising a national legacy brand website</p>
    </TextMedia>

    <TextMedia link="/workwell" media="/images/workwell/Tile/ww-tile.png" width="610" height="680" flip>
      <h2>WorkWell</h2>
      <p>Web Toolkit — Helping businesses take the first steps towards a mentally health workplace</p>
    </TextMedia>

    <TextMedia link="/Sidney" media="/images/sidney/tile/sidney-tile.png" width="610" height="647" >
      <h2>Sidney Sans & Elcon Serif</h2>
      <p>Typeface Design — Custom typefaces for Australias largest department store</p>
    </TextMedia>
    
    <TextMedia link="/metcon-mack-new" media="/images/metcon-mack-2020/Tile/MM-Tile.png" width="1220" height="1320" flip>
      <h2>NikeWomen Metcon Mack</h2>
      <p>App + Event activation — An elevated digital workout experience for a Mack truck turned crossfit gym</p>
    </TextMedia>
    
    <TextMedia link="/" media="/images/myer/tile/myer-tile.png" width="610" height="736">
      <h2>Myer ~ Coming soon</h2>
      <p>Design System + Responsive eCommerce — A brightened shopping experience for Australia’s largest home and fashion retailer</p>
    </TextMedia>

    
    <Signoff>
      <p>Let's make something great together</p>
      
      <Nav>
        <NavItemBottom to="/contact">Get in touch</NavItemBottom>
      </Nav>
    </Signoff>
  </div>
);

export default Home;
