import { SET_LOCATION, SET_SEARCH_LOCATION, } from '../actions/locationActions';

const initialState = {
  location: {
    latitude: '40.0150',
    longitude: '-105.2705'
  },
  search: null,
};

const locationReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOCATION:
      return ({
          ...state,
          location: { ...payload },
      });
    case SET_SEARCH_LOCATION:
      return ({
        ...state,
        search: { ...payload },
      })
    default:
      return state;
  }
};

export default locationReducers;