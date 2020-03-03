
export const SET_WEATHER_VIEW = 'SET_VIEW';
export const SET_WEEKDAY = 'SET_WEEKDAY';

export const setView = (view) => {
  return ({
    type: SET_WEATHER_VIEW,
    payload: view,
  })
};

export const setWeekday = (weekday) => {
  return ({
    type: SET_WEEKDAY,
    payload: weekday,
  })
}