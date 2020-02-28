import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, SafeAreaView, ScrollView } from 'react-native';

import ActivityItem from './ActivityItem';

const ActivityList = (props) => {
  // would like to use FlatList in long run attempted to get to work
  let list =  props.list.map((item) => {
    return (
      <ActivityItem 
        key={item.id}
        {...item}
      />
    )
  });
  if (Platform.OS = 'ios') {
    list = (
      <SafeAreaView>
        {list}
      </SafeAreaView>
    )
  }
  return (
    <View style={styles.trailList} >
      <Text style={styles.header}>Trails Near You:</Text>
      <ScrollView styles={styles.scrollList}>
        {list}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  trailList: {
    flex: 1,
    maxHeight: '60%',
  },
  scrollList: {
    maxHeight: '75%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#9D3A48',
  },
});

export default ActivityList;