import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, SafeAreaView } from 'react-native';

import ActivityItem from './ActivityItem';

const ActivityList = (props) => {
  // would like to use FlatList in long run attempted to get to work
  console.log('props.list: ', props.list);
  const items = props.list
  const list = (
    <View style={styles.trailList} >
      {items.forEach((item) => {
        return(
          <ActivityItem key={item.id} />
        )
      })}
    </View>
  );
  
  let render = list;

  if (Platform.OS === 'ios') {
    render = (
      <SafeAreaView>
        {list}
      </SafeAreaView>
    );
  };

  return (
    {render}
  );
};

const styles = StyleSheet.create({
  trailList: {

  },

});

export default ActivityList;