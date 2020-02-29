const initialState = null;

const locationReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_LOCATION':
      return (
        {
          ...state,
          location: payload,
        }
      );
    default:
      return state;
  }
};

export default locationReducers;