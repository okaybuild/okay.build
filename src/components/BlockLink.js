// @flow
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import * as colors from '../utils/colors';
import { triad } from 'chromatism';

function getColors(highlight, size = 4) {
  let { fg, bg } = colors.random(colors.PRIMARY_COLOR_PAIRS);

  if (highlight) {
    return css`
      background: ${bg};
      color: ${colors.text(bg, fg, size)};
      &:hover {
        background: ${fg};
        color: ${colors.text(fg, bg, size)};
      }
    `;
  } else {
    return css`
      color: inherit;
      &:hover {
        background: ${bg};
        color: ${colors.text(bg, fg, size)};
      }
    `;
  }
}

export const BlockLink = styled(Link)`
  display: block;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  ${props => getColors(props.highlight, props.size)};
`;

export const BlockExternalLink = BlockLink.withComponent('a');
