// @flow
import styled from 'styled-components';
import * as colors from '../utils/colors';

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  font-family: silom;
  margin-top: 2rem;
  color: ${() => colors.random(colors.PRIMARY_COLORS)};
`;

export default Title;
