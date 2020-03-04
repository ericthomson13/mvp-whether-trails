import { SET_LOCATION, SET_CURRENT_LOCATION, } from '../actions/locationActions';

const initialState = {
  location: {
    latitude: '40.0150',
    longitude: '-105.2705'
  },
  current: null,
  default: {
    latitude: '40.0150',
    longitude: '-105.2705'
  },
};

const locationReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOCATION:
      return ({
          ...state,
          location: { ...payload },
      });
    case SET_CURRENT_LOCATION:
      return ({
        ...state,
        current: { ...payload },
      })
    default:
      return state;
  }
};

export default locationReducers;