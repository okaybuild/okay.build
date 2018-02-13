// @flow
import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const FooterWrapper = styled.div`
  background: white;
  padding-top: 2em;
  padding-bottom: 4em;
  margin-top: 4em;
  text-align: center;
  color: slategray;
  line-height: 2;
`;

const START = '2018';
const END = '' + new Date().getFullYear();
const DATE_RANGE = START === END ? START : `${START} - ${END}`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        Copyright &copy; {DATE_RANGE}
        <br />
        okay.build &amp; contributors
      </Container>
    </FooterWrapper>
  );
}
