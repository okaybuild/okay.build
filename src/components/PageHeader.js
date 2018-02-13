// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { random } from '../utils/colors';
import { triad } from 'chromatism';
import Container from './Container';
import Title from './Title';

const PageHeaderContainer = styled.div`
  padding: 1rem 0;
  ${() => {
    let a = random();
    let b = triad(a).hex[2];
    return css`
      background: ${a};
      color: ${b};
    `;
  }};

  & ${Title} {
    color: inherit;
  }
`;

export default function PageHeader(props) {
  return (
    <PageHeaderContainer>
      <Container>{props.children}</Container>
    </PageHeaderContainer>
  );
}
