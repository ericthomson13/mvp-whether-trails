import { combineReducers } from 'redux';

import locationReducers from './locationReducers';
import activityReducers from './activityReducers';
import screenReducers from './screenReducers';
import settingsReducers from './settingsReducers';
import weatherReducers from './weatherReducers';

const rootReducer = combineReducers({
  activity: activityReducers,
  location: locationReducers,
  screen: screenReducers,
  settings: settingsReducers,
  weather: weatherReducers,
});

export default rootReducer;