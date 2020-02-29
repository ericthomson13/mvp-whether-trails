const initialState = {
  activity: null,
  activityItems: [],
  activityOptions: [
    {name: 'hiking'},
  ],
};

const activityReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_ACTIVITY':
      return (
        {
          ...state,
          activity: payload,
        }
      );
      break;
    case 'GET_ACTIVITY_ITEMS':
      return (
        {
          ...state,
          activityItems: payload,
        }
      );
      break;
    default:
      return state;
  }
};

export default activityReducers;