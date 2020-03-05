export const SET_UNITS = 'SET_UNITS';
export const SET_NUM_TRAILS = 'SET_NUM_TRAILS';
export const SET_TRAILHEAD_RANGE = 'SET_TRAILHEAD_RANGE';

export const setUnits = (units) => {
  return ({
    type: SET_UNITS,
    payload: units,
  });
};

export const setTrailheadRange = (range) => {
  return ({
    type: SET_TRAILHEAD_RANGE,
    payload: range,
  })
};

export const setNumTrails = (number) => {
  return ({
    type: SET_NUM_TRAILS,
    payload: number,
  })
}