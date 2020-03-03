import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { updateActivityArr } from '../store/actions/activityActions';
import { setScreen } from '../store/actions/screenActions';
import { hikingProject, mountainBikeProject, trailRunProject, } from '../Keys';

import ActivityList from '../components/activity/ActivityList';

// TODO: update fetch to axios
// TODO: update getList to be in reducer

const ActivityView = () => {
  const activityArray = useSelector((state) => state.activity.activityItems);
  const location = useSelector((state) => state.location.location);
  const activity = useSelector((state) => state.activity.activity);
  const [activityCall, setActivityCall] = useState(0);


  const dispatch = useDispatch();

  const getList = async (location) => {
    let key, base
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

  if (activityArray.length === 0 && activityCall === 0) {
    getList(location);
    setActivityCall(1);
  };

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
      <TouchableOpacity onPress={() => {dispatch(setScreen('welcomeView'))}}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
    
  )
};

const styles = StyleSheet.create({
  activityView: {
    flex: 1,
    padding: 10,
    maxHeight: '90%',
  },
});

export default ActivityView;