import React, { useState, } from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView, ScrollView } from 'react-native';

import ActivityItem from './ActivityItem';
import SelectedItem from './SelectedItem';

// TODO: refactor to not render selected in list
// TODO: refactor to flatlist

const ActivityList = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  let list =  props.list.map((item, i) => {
    if (selectedItem !== null && selectedItem.id === item.id) {
      return;
    };

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
      {selected}
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