import api from '../lib/api';
import { REQUEST_SOURCES, RECIEVE_SOURCES, FETCHING_SOURCES_FAIL, UPDATE_SORTBY, UPDATE_ORDER } from './constants';
import { SOURCES_ENDPOINT } from '../util/api-endpoints';

export const requestSources = () => ({
  type: REQUEST_SOURCES
});

export const recieveSources = sources => ({
  type: RECIEVE_SOURCES,
  payload: sources
});

export const fetchSourcesFail = error => ({
  type: FETCHING_SOURCES_FAIL,
  payload: error
});

export const updateSortBy = column => ({
  type: UPDATE_SORTBY,
  payload: column
});

export const updateOrder = order => ({
  type: UPDATE_ORDER,
  payload: order
});

const fetchSources = url => async dispatch => {
  dispatch(requestSources());
  await api(url).then(response => response.json())
    .then(jsonResponse => dispatch(recieveSources(jsonResponse.sources)))
    .catch(error => dispatch(fetchSourcesFail(error)));
};

export const fetchSourcesIfNeeded = () => (dispatch, getState) => {
  if (!getState().sources.data.length) {
    dispatch(fetchSources(SOURCES_ENDPOINT));
  }
};
