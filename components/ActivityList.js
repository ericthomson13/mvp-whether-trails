import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, SafeAreaView, ScrollView } from 'react-native';

import ActivityItem from './ActivityItem';
import SelectedItem from './SelectedItem';

const ActivityList = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  // would like to use FlatList in long run attempted to get to work
  let list =  props.list.map((item, i) => {
    if (selectedItem !== null && selectedItem.id === item.id) {
      return;
    }
    return (
      <ActivityItem 
        key={item.id}
        index={i}
        {...item}
        select={setSelectedItem}
      />
    )
  });
  let selected = null;
  if (selectedItem !== null) {
    selected = <SelectedItem {...selectedItem} key={selectedItem.id} select={setSelectedItem} selected={true} />
  };

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
      {selected}
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