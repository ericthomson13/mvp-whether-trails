export const SET_ACTIVITY = 'SET_ACTIVITY';
export const GET_ACTIVITY_ITEMS = 'GET_ACTIVITY_ITEMS';
export const SET_MAP_ITEM = 'SET_MAP_ITEM';

export const setSelectedActivity = (activity) => ({
  type: SET_ACTIVITY,
  payload: activity,
});

export const updateActivityArr = (list) => ({
  type: GET_ACTIVITY_ITEMS,
  payload: list,
});

export const setMapItem = (item) => ({
  type: SET_MAP_ITEM,
  payload: item,
});
