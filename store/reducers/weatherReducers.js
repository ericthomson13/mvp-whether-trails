import { SET_WEATHER_VIEW, SET_WEEKDAY, } from '../actions/weatherActions';

const initialState = {
  view: 'weekly',
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
      break;
    case SET_WEEKDAY:
      return ({
        ...state,
        days: [ ...state.days ],
        weekday: payload,
      });
      break;
    default: 
      return state;
  }
}

export default weatherReducers;