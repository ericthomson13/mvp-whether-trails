/* eslint-disable no-constant-condition */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  View, Text, StyleSheet, Platform, SafeAreaView, ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

import ActivityItem from './ActivityItemView';
import colors from '../../Constants/Colors';

// TODO: refactor to flatlist

const ActivityList = () => {
  const listItems = useSelector((state) => state.activity.activityItems);

  let list = listItems.map((item, i) => (
    <ActivityItem
      key={i}
      index={i}
      {...item}
    />
  ));

  if (Platform.OS === 'ios') {
    list = (
      <SafeAreaView>
        {list}
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.trailList}>
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
    color: colors.titleFont,
  },
});

export default ActivityList;
