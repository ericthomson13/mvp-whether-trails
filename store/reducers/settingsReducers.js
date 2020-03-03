import { SET_UNITS, SET_RANGE, } from '../actions/settingsActions';

const initialState = {
  units: 'imperial',
  trailheadRange: 30,
};

const settingsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_UNITS:
      return ({
          ...state,
          units: payload,
      });
    case SET_RANGE:
      return ({
        ...state,
        trailheadRange: payload,
      });
    default:
      return state;
  }
};

export default settingsReducers;