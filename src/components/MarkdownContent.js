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

  h2 { font-size: 2.6rem; margin-top: 4rem; }
  h3 { font-size: 2.4rem; margin-top: 3.6rem; }
  h4 { font-size: 2.2rem; margin-top: 3.2rem; }
  h5 { font-size: 2.0rem; margin-top: 2.8rem; }
  h6 { font-size: 1.8rem; margin-top: 2.4rem; }

  @media (min-width: 720px) {
    h2 { font-size: 3.0rem; }
    h3 { font-size: 2.8rem; }
    h4 { font-size: 2.6rem; }
    h5 { font-size: 2.4rem; }
    h6 { font-size: 2.2rem; }
  }
`;

export default MarkdownContent;
