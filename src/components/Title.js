// @flow
import styled from 'styled-components';
import { random } from '../utils/colors';

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  font-family: silom;
  margin-top: 2rem;
  color: ${() => random()};
`;

export default Title;
