export const SET_WEATHER = 'SET_WEATHER';

export const setWeather = (weather) => {
  return {
    type: SET_WEATHER,
    payload: weather,
  }
};

