
export const SET_LOCATION = 'SET_LOCATION';
export const SET_CURRENT_LOCATION = 'SET_SEARCH_LOCATION';

export const setLocation = (location) => {
  return {
    type: SET_LOCATION,
    payload: { ...location },
  };
};

export const setCurrentLocation = (location) => {
  return {
    type: SET_CURRENT_LOCATION,
    payload: { ...location },
  };
};
