
export const SET_LOCATION = 'SET_LOCATION';
export const SET_SEARCH_LOCATION = 'SET_SEARCH_LOCATION';

export const setLocation = (location) => {
  return {
    type: SET_LOCATION,
    payload: { ...location },
  };
};

export const setSearchLocation = (location) => {
  return {
    type: SET_SEARCH_LOCATION,
    payload: { ...location },
  };
}