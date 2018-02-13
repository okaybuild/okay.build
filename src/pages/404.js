// @flow
import React from 'react';
import Title from '../components/Title';
import styled from 'styled-components';
import Container from '../components/Container';

const Wrapper = styled.div`
  padding: 20vmin 0 10vmin;
  text-align: center;
`;

const Lead = styled.p`
  font-size: 1.8rem;
  font-family: silom;
`;

export default function NotFoundPage() {
  return (
    <Container>
      <Wrapper>
        <Title>Couldn&#39;t find that!</Title>
        <Lead>You just hit a route that doesn&#39;t exist. Soz</Lead>
      </Wrapper>
    </Container>
  );
}
