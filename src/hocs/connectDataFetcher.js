import React from 'react';
import PropTypes from 'prop-types';
import Promise from 'bluebird';

export default function connectDataFetchers(Component, actionCreators) {
  return class DataFetcherWrapper extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
    };
    static fetchData({ dispatch, params = {}, query = {} }) {
      return Promise.all(actionCreators.map(actionCreator => dispatch(actionCreator({ params, query }))));
    }

    componentDidMount() {
      DataFetcherWrapper.fetchData({ dispatch: this.props.dispatch });
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}
