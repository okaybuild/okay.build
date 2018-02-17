// @flow
import styled from 'styled-components';
import * as colors from '../utils/colors';

const MarkdownContent = styled.div`
  margin-top: 4rem;
  -webkit-font-smoothing: antialiased;
  font-size: 1.2rem;
  line-height: 1.8;

  @media (min-width: 720px) {
    font-size: 1.4rem;
  }

  a {
    color: ${colors.PRIMARY_COLORS.purple};
    text-decoration: none;

    &:hover {
      color: ${colors.PRIMARY_COLORS.pink};
      text-decoration: underline;
    }
  }

  hr {
    margin: 3rem 0;
  }
`;

export default MarkdownContent;
