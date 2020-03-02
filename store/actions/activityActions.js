import axios from 'axios';

export const updateSelectedActivity = (activity) => {
  return {
    type: 'SET_ACTIVITY',
    payload: activity
  }
};

export const updateActivityArr = () => {

};
