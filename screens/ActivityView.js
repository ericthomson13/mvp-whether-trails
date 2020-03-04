import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { updateActivityArr } from '../store/actions/activityActions';
import { hikingProject, mountainBikeProject, trailRunProject, } from '../Keys';

import ActivityList from '../components/activity/ActivityList';
import HomeButton from '../components/utility/HomeButton';

// TODO: update fetch to axios
// TODO: update getList to be in reducer
// TODO: fix bug that occurs if switch to home and then pick different activity - useEffect for unmount and clear activity store?

const ActivityView = () => {
  const activityArray = useSelector((state) => state.activity.activityItems);
  const location = useSelector((state) => state.location.location);
  const activity = useSelector((state) => state.activity.activity);
  
  const dispatch = useDispatch();

  const getList = async (location) => {
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
    const result = await fetch(url);
    const trails = await result.json()
    dispatch(updateActivityArr(trails.trails));
  };

  useEffect(() => {
    getList(location);
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