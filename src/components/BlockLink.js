// @flow
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { random } from '../utils/colors';
import { triad } from 'chromatism';

function getColors(highlight) {
  let a = random();
  let b = triad(a).hex[2];

  if (highlight) {
    return css`
      background: ${a};
      color: ${b};
      &:hover {
        background: ${b};
        color: ${a};
      }
    `;
  } else {
    return css`
      color: inherit;
      &:hover {
        background: ${a};
        color: ${b};
      }
    `;
  }
}

export const BlockLink = styled(Link)`
  display: block;
  text-decoration: none;
  ${props => getColors(props.highlight)};
`;

export const BlockExternalLink = BlockLink.withComponent('a');
