import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import Title from '../components/Title';
import MarkdownContent from '../components/MarkdownContent';

const Author = styled.p`
  font-size: 1.8rem;
  font-family: silom;
`;

export default function Template({ data }) {
  let post = data.markdownRemark;
  let { title, author } = post.frontmatter;

  return (
    <div>
      <Helmet title={`okay.build - blog - ${post.frontmatter.title}`} />
      <PageHeader>
        <Title>{title}</Title>
        <Author>By {author}</Author>
      </PageHeader>
      <Container>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`;
