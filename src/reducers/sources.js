import { REQUEST_SOURCES, RECIEVE_SOURCES, FETCHING_SOURCES_FAIL, UPDATE_ORDER, UPDATE_SORTBY } from '../actions/constants';
import { updateOrder } from '../actions/sources';

const initialState = {
  isLoading: false,
  error: null,
  sortBy: 'id',
  order: 'asc',
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_SOURCES: return {
    ...state,
    error: null,
    isLoading: true
  };
  case RECIEVE_SOURCES: return {
    ...state,
    data: action.payload,
    error: null,
    isLoading: false
  };
  case FETCHING_SOURCES_FAIL: return {
    ...state,
    error: action.payload,
    isLoading: false
  };
  case UPDATE_ORDER: return {
    ...state,
    order: action.payload,
  };
  case UPDATE_SORTBY: return {
    ...state,
    sortBy: action.payload
  };
  default: return state;
  }
};

