import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, SafeAreaView } from 'react-native';

import ActivityItem from './ActivityItem';

const ActivityList = (props) => {
  // would like to use FlatList in long run attempted to get to work
  let list =  props.list.map((item) => {
    return (
      <ActivityItem 
        key={item.id} 
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
      {list}
    </View>
  );
};

const styles = StyleSheet.create({
  trailList: {

  },

});

export default ActivityList;