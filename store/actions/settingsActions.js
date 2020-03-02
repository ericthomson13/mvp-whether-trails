export const SET_UNITS = 'SET_UNITS';
export const SET_RANGE = 'SET_RANGE';

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
}