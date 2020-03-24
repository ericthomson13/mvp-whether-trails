import { useDispatch } from 'react-redux';
import { setScreen } from '../store/actions/screenActions';
import { setSelectedActivity, updateActivityArr } from '../store/actions/activityActions';

export const useHomeButton = () => {
  const dispatch = useDispatch();
  dispatch(setScreen('welcomeView')); 
  dispatch(setSelectedActivity(null)); 
  dispatch(updateActivityArr([]));
};

export const useSettingsButton = () => {
  const dispatch = useDispatch();
  dispatch(setScreen('settingsView'));
};