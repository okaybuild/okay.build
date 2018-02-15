// @flow
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Title from '../components/Title';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import { BlockLink } from '../components/BlockLink';

const PostLink = BlockLink.extend`
  padding: 2rem 0;
  margin-bottom: 1.4rem;

  & *:last-child {
    margin-bottom: 0;
  }
`;

const PostHeading = styled.h3`
  font-size: 3rem;
  font-weight: 800;
`;

const PostExcerpt = styled.p`
  font-size: 1.2rem;
`;

export default function Blog({ data }: any) {
  return (
    <div>
      <PageHeader>
        <Title>Blog</Title>
      </PageHeader>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <PostLink key={edge.node.id} to={edge.node.frontmatter.path}>
            <Container>
              <PostHeading>{edge.node.frontmatter.title}</PostHeading>
              <PostExcerpt>{edge.node.excerpt}</PostExcerpt>
            </Container>
          </PostLink>
        );
      })}
    </div>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { id: { regex: "/blog/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
