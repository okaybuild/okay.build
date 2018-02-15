import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import Title from '../components/Title';

const Content = styled.div`
  margin-top: 4rem;
`;

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <div>
      <Helmet title={`okay.build - blog - ${post.frontmatter.title}`} />
      <PageHeader>
        <Title>{post.frontmatter.title}</Title>
      </PageHeader>
      <Container>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`;
