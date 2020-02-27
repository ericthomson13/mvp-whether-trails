import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { hikingProject } from '../Keys';

import TrailList from '../components/TrailsList';

const ActivityView = (props) => {
  const [activityArray, setActivityArray] = useState([]);

  return (
    <View style={styles.trailheadView}>
      <Text >Trailhead View Will Be Here</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  trailheadView: {

  },

});

export default ActivityView;