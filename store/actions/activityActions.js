export const SET_ACTIVITY = 'SET_ACTIVITY';
export const GET_ACTIVITY_ITEMS = 'GET_ACTIVITY_ITEMS';
export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';

export const setSelectedActivity = (activity) => {
  return {
    type: SET_ACTIVITY,
    payload: activity
  }
};

export const updateActivityArr = (list) => {
  return {
    type: GET_ACTIVITY_ITEMS,
    payload: list
  };
};

export const setSelectedItem = (item) => {
  return {
    type: SET_SELECTED_ITEM,
    payload: item
  }
}
