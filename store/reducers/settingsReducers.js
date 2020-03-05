import { SET_UNITS, SET_TRAILHEAD_RANGE, SET_NUM_TRAILS, SET_ALL_SETTINGS, } from '../actions/settingsActions';

const initialState = {
  units: 'imperial',
  trailheadRange: 30,
  numberTrails: 10,
};

// REVIEW - should spread payload even with this instance being only primitives?

const settingsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_UNITS:
      return ({
          ...state,
          units: payload,
      });
    case SET_TRAILHEAD_RANGE:
      return ({
        ...state,
        trailheadRange: payload,
      });
    case SET_NUM_TRAILS:
      return ({
        ...state,
        numberTrails: payload
      });
    case SET_ALL_SETTINGS:
      return ({
        ...payload,
      });
    default:
      return state;
  }
};

export default settingsReducers;