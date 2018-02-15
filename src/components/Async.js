// @flow
import React, { type Node } from 'react';

type AsyncProps<Data> = {
  refetch?: boolean,
  cached?: Data | null,
  fetch: () => Promise<Data>,
  children: (state: AsyncState<Data>) => Node,
};

type AsyncState<Data> = {
  loading: boolean,
  error: null | Error,
  data: null | Data,
};

export default class Async<Data> extends React.Component<
  AsyncProps<Data>,
  AsyncState<Data>,
> {
  state: AsyncState<Data> = {
    loading: false,
    error: null,
    data: this.props.cached || null,
  };

  componentDidMount() {
    if (this.state.data && !this.state.refetch) return;
    this.setState({ loading: true });
    this.props
      .fetch()
      .then(data => {
        this.setState({ loading: false, data });
      })
      .catch(error => {
        this.setState({ loading: false, error });
      });
  }

  render() {
    return this.props.children(this.state);
  }
}
