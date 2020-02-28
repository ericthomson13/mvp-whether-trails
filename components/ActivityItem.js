import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivityItem = ({ id, name, summary, difficulty, stars, location, url, length, latitude, longitude, }) => {
  return (
    <View>
        <Text style={styles.name}>{name}</Text>
        <Text>{difficulty}</Text>
        <Text>{summary}</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
  name: {

  },
  summary: {

  },
  difficulty: {

  },
  url: {

  },
  length: {

  }
});

export default ActivityItem;