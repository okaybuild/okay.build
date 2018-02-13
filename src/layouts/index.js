// @flow
import React, { type Node } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

injectGlobal`
  *,
  ::before,
  ::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    color: #323330;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  img, h1, h2, h3, h4, h5, h6, hgroup, ul, ol, dl, dd, p, figure, pre, table,
  fieldset, blockquote, address {
    margin-top: 0;
    margin-bottom: 1.45rem;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    text-rendering: optimizeLegibility;
  }

  h1 { font-size: 2.25rem; line-height: 1.1; }
  h2 { font-size: 1.62671rem; line-height: 1.1; }
  h3 { font-size: 1.38316rem; line-height: 1.1; }
  h4 { font-size: 1rem; line-height: 1.1; }
  h5 { font-size: 0.85028rem; line-height: 1.1; }
  h6 { font-size: 0.78405rem; line-height: 1.1; }

  ul, ol {
    margin-left: 1.45rem;
  }

  dd {
    margin-left: 0;
  }

  pre {
    font-size: 0.85em;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }

  table {
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }

  blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
  }

  hr {
    margin-top: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  b, strong, dt, th {
    font-weight: 600;
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }

  ol li {
    padding-left: 0;
  }

  ul li {
    padding-left: 0;
  }

  li > ol, li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  blockquote *:last-child,
  li *:last-child,
  p *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

  code, kbd, samp {
    font-size: 0.85em;
    line-height: 1.45em;
  }

  pre code,
  pre kbd,
  pre samp {
    font-size: 1em;
  }

  abbr, acronym, abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  abbr[title] {
    text-decoration: none;
  }

  thead {
    text-align: left;
  }

  td, th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: "tnum";
    -moz-font-feature-settings: "tnum";
    -ms-font-feature-settings: "tnum";
    -webkit-font-feature-settings: "tnum";
    padding-left: 0.725rem 0.96667rem calc(0.725rem - 1px);
  }

  th:first-child, td:first-child { padding-left: 0; }
  th:last-child, td:last-child { padding-right: 0; }

  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
      "Liberation Mono", Menlo, Courier, monospace;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }

  pre code {
    background: none;
    line-height: 1.42;
  }

  code:before, code:after, tt:before, tt:after {
    letter-spacing: -0.2em;
    content: " ";
  }

  pre code:before, pre code:after, pre tt:before, pre tt:after {
    content: "";
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`;

const Content = styled.div`
  margin-top: 2rem;
`;

export default function TemplateWrapper({ children, location }: () => Node) {
  return (
    <div>
      <Helmet
        title="okay.build"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'javascript, build' },
        ]}
      />
      <Header />
      {location.pathname === '/' ? (
        children()
      ) : (
        <Container>
          <Content>{children()}</Content>
        </Container>
      )}
      <Footer />
    </div>
  );
}
