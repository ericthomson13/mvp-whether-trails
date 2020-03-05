import { SET_ACTIVITY, GET_ACTIVITY_ITEMS, SET_MAP_ITEM, } from '../actions/activityActions';

const initialState = {
  activity: null,
  activityItems: [],
  activityOptions: [
    {name: 'hiking'},
    {name: 'mountain biking'},
    {name: 'trail running'},
  ],
  mapView: null,
};

const activityReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVITY:
      return ({
          ...state,
          activity: payload,
      });
    case GET_ACTIVITY_ITEMS:
      return ({
          ...state,
          activityItems: payload,
      });
    case SET_MAP_ITEM:
      return ({
        ...state,
        mapView: payload,
      })
    default:
      return state;
  }
};

export default activityReducers;