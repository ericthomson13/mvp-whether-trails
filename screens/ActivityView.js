import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { hikingProject } from '../keys';

import ActivityList from '../components/Activity/ActivityList';

const ActivityView = (props) => {
  const [activityArray, setActivityArray] = useState([]);
  const [activityCall, setActivityCall] = useState(0);
  const { location } = props;

  // eventually allow user to set search radius
  const getList = async (location) => {
    const result = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${location.latitude}&lon=${location.longitude}&key=${hikingProject}`)
    const trails = await result.json()
    setActivityArray(trails.trails);
  };

  if (activityArray.length === 0 && activityCall === 0) {
    getList(location);
    setActivityCall(1);
  };

  let list = null;
  if (activityArray.length > 0) {
    list = <ActivityList list={activityArray} />
  }
  
  return (
    <View style={styles.activityView}>
      <Text></Text>
      {/* <MapWindow /> */}
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
  list: {

  },

});

export default ActivityView;