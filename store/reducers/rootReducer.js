import { combineReducers } from 'redux';

import weatherReducers from './weatherReducers';
import locationReducers from './locationReducers';
import activityReducers from './activityReducers';
import screenReducers from './screenReducers';

const rootReducer = combineReducers({
  activity: activityReducers,
  location: locationReducers,
  screen: screenReducers,
  weather: weatherReducers,
});

export default rootReducer;