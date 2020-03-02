import { combineReducers } from 'redux';

import locationReducers from './locationReducers';
import activityReducers from './activityReducers';
import screenReducers from './screenReducers';

const rootReducer = combineReducers({
  activity: activityReducers,
  location: locationReducers,
  screen: screenReducers,
});

export default rootReducer;