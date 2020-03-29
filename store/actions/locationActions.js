
export const SET_LOCATION = 'SET_LOCATION';
export const SET_CURRENT_LOCATION = 'SET_SEARCH_LOCATION';

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: { ...location },
});

export const setCurrentLocation = (location) => ({
  type: SET_CURRENT_LOCATION,
  payload: { ...location },
});
