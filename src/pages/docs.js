// @flow
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Title from '../components/Title';
import PageHeader from '../components/PageHeader';

export default function Blog({ data }: any) {
  return (
    <div>
      <PageHeader>
        <Title>Docs</Title>
      </PageHeader>
    </div>
  );
}
