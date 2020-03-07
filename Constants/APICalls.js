import { hikingProject, mountainBikeProject, trailRunProject, } from '../Keys';
import { updateActivityArr, } from '../store/actions/activityActions';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const useGetList = async (loc, act) => {
  const dispatch = useDispatch();
  let key, base;
  switch(act) {
    case 'hiking':
      key = hikingProject;
      base = 'hikingproject';
      break;
    case 'mountain biking':
      key = mountainBikeProject;
      base = 'mtbproject';
      break;
    case 'trail running':
      key = trailRunProject;
      base = 'trailrunproject';
      break;
    default:
      key = hikingProject;
      base = 'hikingproject';
      return;
  };

  const url = `https://www.${base}.com/data/get-trails?lat=${loc.latitude}&lon=${loc.longitude}&key=${key}`
  const result = await axios({
    method: 'get',
    url,
    responseType: 'stream',
  });
  dispatch(updateActivityArr(result.data.trails));
};