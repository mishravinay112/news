import React from 'react';
import PropTypes from 'prop-types';

import  { headers } from './DataTable';

const SortDropdown = ({ handleClick, sortBy}) => (
  <div className="form-group">
    <label> Sorted By </label>
    <select
      defaultValue={sortBy}
      className="form-control"
      onChange={(e) => handleClick(e.target.value)}>
      <For each="header" of={headers}>
        <option
          key={header}
          value={header}>
          {header}
        </option>
      </For>
    </select>
  </div>
);

SortDropdown.propTypes = {
  sortBy: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SortDropdown;
