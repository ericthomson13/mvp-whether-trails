import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActivityList from './ActivityList';

const ActivityItem = ({ id, name, summary, difficulty, stars, location, url, length, latitude, longitude, }) => {
  return (
    <View>
      <Text>This will be an activity item</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default ActivityItem;