// @flow
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

type Project = {
  name: string,
  url: string,
  desc: string,
  stars: number,
  forks: number,
};

type State = {
  loading: boolean,
  error: null | Error,
  projects: null | Array<Project>,
};

class ProjectsList extends React.Component<State> {
  state = {
    loading: false,
    error: null,
    lists: maybeGetCached(LISTS_URL),
    cards: maybeGetCached(CARDS_URL),
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      let [lists, cards] = await Promise.all([
        fetchAndCacheJson(LISTS_URL),
        fetchAndCacheJson(CARDS_URL),
      ]);

      this.setState({ loading: false, lists, cards });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  render() {
    // ...
  }
}

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
}
