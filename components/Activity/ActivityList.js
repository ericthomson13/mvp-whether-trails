import React, { useState, } from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import ActivityItem from './ActivityItem';

// TODO: refactor to not render selected in list
// TODO: refactor to flatlist
// TODO: refactor so that selected expands but is still in list

const ActivityList = () => {
  const listItems = useSelector((state) => state.activity.activityItems);

  let list = listItems.map((item, i) => {
    return (
      <ActivityItem 
        key={i}
        index={i}
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
  };

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
    maxHeight: '85%',
    maxWidth: '100%',
  },
  scrollList: {
    maxHeight: '80%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#9D3A48',
  },
});

export default ActivityList;