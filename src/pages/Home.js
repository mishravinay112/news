import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSourcesIfNeeded, updateOrder, updateSortBy } from '../actions/sources';
import DataTable, { headers } from '../components/DataTable';
import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';
import OrderNote from '../components/OrderNote';
import SortDropdown from '../components/SortDropdown';

export class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sources: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchSourcesIfNeeded());
  }

  handleClick(column, order) {
    const { dispatch } = this.props;

    if (column) {
      dispatch(updateSortBy(column));
    }

    if (order) {
      dispatch(updateOrder(order));
    }
  }

  render() {
    const { sources } = this.props;

    return (<div className="container">
      <Choose>
        <When condition={sources.data.length}>
          <SortDropdown sortBy={sources.sortBy} handleClick={this.handleClick} />
          <OrderNote />
          <DataTable
            data={sources.data}
            sortBy={sources.sortBy}
            order={sources.order}
            handleClick={this.handleClick} />
        </When>
        <When condition={sources.error}>
          <ErrorMsg />
        </When>
        <Otherwise>
          <Loader />
        </Otherwise>
      </Choose>
    </div>);
  }
}

export default connect(state => ({
  sources: state.sources
}), null)(Home);
