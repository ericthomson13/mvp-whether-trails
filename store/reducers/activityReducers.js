import { SET_ACTIVITY, GET_ACTIVITY_ITEMS, SET_SELECTED_ITEM, } from '../actions/activityActions';

const initialState = {
  activity: null,
  activityItems: [],
  activityOptions: [
    {name: 'hiking'},
  ],
  selectedItem: null,
};

const activityReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVITY:
      return (
        {
          ...state,
          activity: payload,
        }
      );
    case GET_ACTIVITY_ITEMS:
      return (
        {
          ...state,
          activityItems: payload,
        }
      );
    case SET_SELECTED_ITEM:
      return (
        {
          ...state,
          selectedItem: payload,
        }
      )
    default:
      return state;
  }
};

export default activityReducers;