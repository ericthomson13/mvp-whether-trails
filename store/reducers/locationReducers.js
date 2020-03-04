import { SET_LOCATION, } from '../actions/locationActions';

const initialState = {
  location: {
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
    default:
      return state;
  }
};

export default locationReducers;