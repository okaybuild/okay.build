// @flow
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Container from './Container';
import * as constants from '../constants';

const HeaderContainer = styled.div`
  z-index: 1;
  width: 100%;
  top: 0;
  padding: 1rem 0;
  background: #1e00ff;
  color: white;
  font-family: silom;
  -webkit-font-smoothing: antialiased;

  @media (min-width: 720px) {
    position: sticky;
    padding: 0;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: -0.05em;

  @media (min-width: 720px) {
    display: inline-block;
    margin-right: 1em;
  }
`;

const HeaderLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  color: inherit;
  text-decoration: inherit;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 720px) {
    display: inline-block;
    padding: 1rem 1rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <HeaderTitle>
        <HeaderLink to="/">okay.build</HeaderLink>
      </HeaderTitle>

      <HeaderLink to="/projects">Projects</HeaderLink>
      <HeaderLink to="/docs">Docs</HeaderLink>
      <HeaderLink to="/plans">Plans</HeaderLink>
      <HeaderLink to="/blog">Blog</HeaderLink>
    </Container>
  </HeaderContainer>
);

export default Header;
