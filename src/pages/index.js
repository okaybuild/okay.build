// @flow
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import * as constants from '../constants';
import Container from '../components/Container';

const Hero = styled.div`
  padding: 6rem 0;
  background: ${props => props.bgColor};
  color: ${props => props.color};
  text-transform: lowercase;
  -webkit-font-smoothing: antialiased;

  & *:last-child {
    margin-bottom: 0;
  }
`;

const HeroTitle = styled.h1`
  font-weight: 800;
  font-size: 1.6rem;
  text-align: center;
  white-space: pre;
  font-family: silom;
  color: white;

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 720px) {
    font-size: 3rem;
  }

  @media (min-width: 960px) {
    font-size: 4rem;
  }
`;

const HeroText = styled.h3`
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
  font-family: silom;

  @media (min-width: 720px) {
    font-size: 1.4rem;
  }

  @media (min-width: 960px) {
    font-size: 1.6rem;
  }
`;

const HeroEmoji = styled.h3`
  font-size: 4rem;
  text-align: center;
  color: white;
`;

export default function Home() {
  return (
    <div>
      <Hero bgColor="#e94af5" color="white">
        <Container>
          <HeroTitle>
            An open team creating <wbr />
            better developer tools
          </HeroTitle>
        </Container>
      </Hero>

      <Hero bgColor="#34fb6b" color="rgba(0, 0, 0, 0.5)">
        <Container>
          <HeroText>
            Our mission is to develop a modern front-end development toolchain
            which enables developers to be more productive and help product
            teams create better user experiences.
          </HeroText>
        </Container>
      </Hero>

      <Hero bgColor="#e6ff34" color="rgba(0, 0, 0, 0.53)">
        <Container>
          <HeroText>
            We create tools, libraries, frameworks, services, bots, workflows,
            interfaces, graphs, dashboards, clis, specs, and the glue to make
            them all work together.
          </HeroText>
        </Container>
      </Hero>

      <Hero bgColor="#fd8945" color="rgba(0, 0, 0, 0.52)">
        <Container>
          <HeroText>
            In order to achieve this goal, we believe we must collaborate with
            others and work in the open, sharing our ideas, our successes, and
            our failures.
          </HeroText>
        </Container>
      </Hero>

      <Hero bgColor="#7c56ff" color="rgba(0, 0, 0, 0.55)">
        <Container>
          <HeroText>
            Anything that we can be open with, we will be. Our plans, our
            processes, our documentation, our code, our meetings, our
            communication. Open.
          </HeroText>
        </Container>
      </Hero>

      <Hero bgColor="white">
        <Container>
          <HeroEmoji>👌</HeroEmoji>
        </Container>
      </Hero>
    </div>
  );
}
