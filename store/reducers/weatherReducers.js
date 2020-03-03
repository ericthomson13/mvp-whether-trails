import { SET_WEATHER_VIEW, SET_WEEKDAY, } from '../actions/weatherActions';

// TODO: figure out how to update state for each index in weather
  // might want to use regular state management hooks to manage this in each List

const initialState = {
  // true displays weekday false displays daily
  view: true,
  weekday: null,
  days: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
};

const weatherReducers = (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_WEATHER_VIEW:
      return ({
        ...state,
        days: [ ...state.days ],
        view: payload,
      });
    case SET_WEEKDAY:
      return ({
        ...state,
        days: [ ...state.days ],
        weekday: payload,
      });
    default: 
      return state;
  }
}

export default weatherReducers;