// @flow
import styled from 'styled-components';
import * as colors from '../utils/colors';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  font-family: silom;
  margin-top: 1rem;
  color: ${() => colors.random(colors.PRIMARY_COLORS)};

  @media (min-width: 480px) {
    font-size: 4rem;
  }

  @media (min-width: 720px) {
    font-size: 5rem;
  }

  @media (min-width: 960px) {
    font-size: 6rem;
  }
`;

export default Title;
