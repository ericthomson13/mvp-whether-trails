import { SET_SCREEN } from '../actions/screenActions';

const initialState = {
  screen: 'welcomeView',
};

const screenReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SCREEN:
      return (
        {
          ...state,
          screen: payload,
        }
      );
    default:
      return state;
  }
};

export default screenReducers;
