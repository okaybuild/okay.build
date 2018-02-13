// @flow
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import * as constants from '../constants';

const PostLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 1rem;
  margin-bottom: 1.4rem;
  background: #f8f8f8;

  & *:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: ${constants.JS_YELLOW};
  }
`;

export default function Blog({ data }: any) {
  return (
    <div>
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <PostLink key={edge.node.id} to={edge.node.frontmatter.path}>
            <h3>{edge.node.frontmatter.title}</h3>
            <p>{edge.node.excerpt}</p>
          </PostLink>
        );
      })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
