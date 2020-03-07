import React, { useEffect, } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux';
import { hikingProject, mountainBikeProject, trailRunProject, } from '../Keys';
import { updateActivityArr, } from '../store/actions/activityActions';
import axios from 'axios';

import ActivityList from '../components/activity/ActivityList';
import HomeButton from '../components/utility/HomeButton';

// TODO: update getList to be in apiCalls
  // attempted but issues with unresolved promises and object returning not expected array
  // create custom hook so can have dispatches and selectors inside

const ActivityView = () => {
  const activityArray = useSelector((state) => state.activity.activityItems);
  const location = useSelector((state) => state.location.location);
  const activity = useSelector((state) => state.activity.activity);

  const dispatch = useDispatch();

  const getList = async () => {
    let key, base;
    switch(activity) {
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

    const url = `https://www.${base}.com/data/get-trails?lat=${location.latitude}&lon=${location.longitude}&key=${key}`
    const result = await axios({
      method: 'get',
      url,
      responseType: 'stream',
    });
    dispatch(updateActivityArr(result.data.trails));
  };

  useEffect(() => {
    getList();
  }, [activity]);

  let list = null;
  if (activityArray.length > 0) {
    list = <ActivityList />
  }
  
  return (
    <View>
      <View style={styles.activityView}>
        <Text></Text>
        {list}
      </View>
      <HomeButton />
    </View>
  )
};

const styles = StyleSheet.create({
  activityView: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
});

export default ActivityView;