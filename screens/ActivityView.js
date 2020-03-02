import React, { useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { updateActivityArr } from '../store/actions/activityActions';
import { hikingProject } from '../Keys';

import ActivityList from '../components/Activity/ActivityList';

// TODO: move activityArr to list component with redux refactor
// TODO: update fetch to axios

const ActivityView = () => {
  const activityArray = useSelector((state) => state.activity.activityItems);
  const location = useSelector((state) => state.location.location);
  const [activityCall, setActivityCall] = useState(0);


  const dispatch = useDispatch();

  const getList = async (location) => {
    const result = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${location.latitude}&lon=${location.longitude}&key=${hikingProject}`)
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
    <View style={styles.activityView}>
      <Text></Text>
      {list}
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