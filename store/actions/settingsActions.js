export const SET_UNITS = 'SET_UNITS';
export const SET_RANGE = 'SET_RANGE';
export const SET_NUM_TRAILS = 'SET_NUM_TRAILS';

export const setUnits = (units) => {
  return ({
    type: SET_UNITS,
    payload: units,
  });
};

export const setRange = (range) => {
  return ({
    type: SET_RANGE,
    payload: range,
  })
};