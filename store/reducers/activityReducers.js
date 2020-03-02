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
    case 'GET_ACTIVITY_ITEMS':
      return (
        {
          ...state,
          activityItems: payload,
        }
      );
    default:
      return state;
  }
};

export default activityReducers;