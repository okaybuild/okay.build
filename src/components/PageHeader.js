// @flow
import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import * as colors from '../utils/colors';
import Container from './Container';
import Title from './Title';

const PageHeaderContainer = styled.div`
  padding: 1rem 0;
  ${() => {
    let { fg, bg } = colors.random(colors.PRIMARY_COLOR_PAIRS);
    return css`
      background: ${bg};
      color: ${colors.text(bg, fg)};
    `;
  }};

  & ${Title} {
    color: inherit;
  }
`;

export default function PageHeader(props: { children: Node }) {
  return (
    <PageHeaderContainer>
      <Container>{props.children}</Container>
    </PageHeaderContainer>
  );
}
