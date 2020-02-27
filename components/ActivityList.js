import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, SafeAreaView } from 'react-native';

import ActivityItem from './ActivityItem';

const ActivityList = (props) => {
  const DATA = [...props.list];
  const list = (
    <View style={styles.trailList} >
      <FlatList 
        data={DATA} 
        renderItem={({ item }) => (
          <ActivityItem {...item} />
        )} 
        keyExtractor={item.id}
        extraData={props.list}
      />
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