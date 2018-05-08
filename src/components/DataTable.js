import React from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';

export const headers = [
  'id',
  'name',
  'description',
  'url',
  'category',
  'language',
  'country',
  'sortBysAvailable'
];

const DataTable = ({ data, sortBy, order, handleClick }) => (
  <div>
    <table className="table table-hover ">
      <thead className="text-center">
        <tr>
          <For each="header" of={headers}>
            <th
              key={header}
              onClick={() => header === sortBy ? handleClick(null, order === 'asc' ? 'desc' : 'asc') : null}>
              {header}
              <If condition={header === sortBy}>
                <Choose>
                  <When condition={order === 'asc'}>
                    <span className="glyphicon glyphicon-arrow-down" />
                  </When>
                  <Otherwise>
                    <span className="glyphicon glyphicon-arrow-up" />
                  </Otherwise>
                </Choose>
              </If>
            </th>
          </For>
        </tr>
      </thead>
      <tbody>
        <For each="source" of={orderBy(data, sortBy, order)}>
          <tr key={index}>
            <td>{source.id}</td>
            <td>{source.name}</td>
            <td>{source.description}</td>
            <td><a href={source.url} target="_blank">{source.url}</a></td>
            <td>{source.category}</td>
            <td>{source.language}</td>
            <td>{source.country}</td>
            <td>{source.sortBysAvailable[0]}</td>
          </tr>
        </For>
      </tbody>
    </table>
  </div>
);

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortBy: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default DataTable;
