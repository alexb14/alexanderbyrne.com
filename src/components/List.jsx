import React from "react";
import styled from "styled-components";
import { breakpoint, fontSize } from "../utils/styled";

const Root = styled.div`
  margin: 12% 0 0;
`;

const Grid = styled.div`
  display: flex;
  ${breakpoint.down`display: block;`}
`;

const Title = styled.h3`
  text-align: left;
  ${breakpoint.up`width: 33%;`}
`;

const Content = styled.div`
  text-align: left;
  ${breakpoint.up`width: 63%;
  padding-left: 3%;`}
`;

const Items = styled.ul`
  margin: 58px 0;
  list-style: disc outside none;
  padding-left: 20px;
  ${breakpoint.up`padding: 0;`}
`;

const Intro = styled.p`
  ${fontSize(15, 20)}
  margin: 16px 0 0 0;
  text-align: left;
`;

const Bullet = styled.li`
  ${fontSize(15, 20)}
  margin: 16px 0 0 0;
  text-align: left;
`;

const List = ({ bullets }) => (
  <Root>
    <Grid>
      <Title>Other things</Title>
      <Content>
        <Intro>
          In the past I’ve given my time to designers and smaller start ups,
          helping them:
        </Intro>
        <Items>
          {bullets.map(bullet => (
            <Bullet key={bullet}>{bullet}</Bullet>
          ))}
        </Items>
      </Content>
    </Grid>
  </Root>
);

export default List;
