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
    line-height: 1.85;
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
    border-bottom: 1px solid #d3b98b;
    padding: 0 0 8px 0;
  }
`;

const Home = () => (
  <div>
    <Introduction>
      <p>Hi, I'm Alex.</p>
      <p>
        An Experience and Interaction Designer. I’ve been designing products and tailored
        experiences for some amazing brands over the past four years.
      </p>
      <Nav>
        <NavItem to="/work">See my work</NavItem>
        <NavItem to="/about">A bit about me</NavItem>
        <NavItem to="/contact">Get in touch</NavItem>
      </Nav>
    </Introduction>
    <TextMedia link="/air-max-day" media="/images/airmaxday/tile/airmax-tile.png" width="800" height="900" flip>
      <h2>Air Max Day</h2>
      <p>A four tiered experience for one of the most anticaped shoe drop of the year.</p>
    </TextMedia>
    <TextMedia link="/officeworks" media="/images/officeworks/tile/ow-tile.png" width="800" height="900">
      <h2>Officeworks</h2>
      <p>Bringing a dated national brand into the current.</p>
    </TextMedia>
    <TextMedia media="http://placehold.it/330x520" width="330" height="520" flip>
      <h2>Oxford University Press</h2>
      <p>An online tool for students and educators to teach, learn and grow.</p>
    </TextMedia>
    <TextMedia link="/metcon-mack" media="http://placehold.it/330x520" width="330" height="520">
      <h2>Metcon Mack</h2>
      <p>An online tool for students and educators to teach, learn and grow.</p>
    </TextMedia>
    <TextMedia link="/ibl" media="/images/ibl/tile/ibl-tile.jpg" width="628" height="877" flip>
      <h2>IBL</h2>
      <p>An online tool for students and educators to teach, learn and grow.</p>
    </TextMedia>
    <TextMedia link="/Hypervenom" media="/images/hypervenom/tile/hypervenom-tile.png" width="1000" height="900" flip>
      <h2>Hyper Venom 3</h2>
      <p>An online tool for students and educators to teach, learn and grow.</p>
    </TextMedia>
  </div>
);

export default Home;
