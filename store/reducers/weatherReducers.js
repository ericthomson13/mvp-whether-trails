const initialState = {
  weather: null,
};

const weatherReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_WEATHER':
      return (
        {
          ...state,
          weather: payload,
        }
      );
    default:
      return state;
  }
};

export default weatherReducers;