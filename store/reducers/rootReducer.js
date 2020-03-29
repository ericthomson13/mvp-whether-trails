import { combineReducers } from 'redux';

import locationReducers from './locationReducers';
import activityReducers from './activityReducers';
import screenReducers from './screenReducers';
import settingsReducers from './settingsReducers';

const rootReducer = combineReducers({
  activity: activityReducers,
  location: locationReducers,
  screen: screenReducers,
  settings: settingsReducers,
});

export default rootReducer;
