const initialState = {
  screen: 'welcomeView',
};

const screenReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SCREEN':
      return (
        {
          ...state,
          screen: payload
        }
      );
      break;
    default:
      return state;
  }
};

export default screenReducers;