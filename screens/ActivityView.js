import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { hikingProject } from '../Keys';

import MapWindow from '../components/MapWindow';
import ActivityList from '../components/ActivityList';

import hikingProjectData from '../SampleData/hikingProject';

const ActivityView = (props) => {
  const [activityArray, setActivityArray] = useState(hikingProjectData.getTrails.trails);
  const [activityCall, setActivityCall] = useState(0);
  console.log(activityArray);
  const { location } = props;

  // eventually allow user to set search radius
  const getList = async (location, distance = 20) => {
    const result = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${location.latitude}&lon=${location.longitude}&key=${hikingProject}`)
    // const reader = result.body.getReader();
    // const trails = await reader.read();
    const trails = await result.json()
    console.log(trails.body);
    setActivityArray(trails);
    // await reader.closed();
  };
  if (activityArray.length === 0 && activityCall === 0) {
    getList(location);
    setActivityCall(1);
  };

  return (
    <View style={styles.trailheadView}>
      <Text>Trailhead View Will Be Here</Text>
      {/* <MapWindow /> */}
      {activityArray.length === 0 ? null : <ActivityList list={activityArray}/>}
    </View>
  )
};

const styles = StyleSheet.create({
  activityView: {

  },
  list: {

  },

});

export default ActivityView;