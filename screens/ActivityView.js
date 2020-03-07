import React, { useEffect, } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { useSelector, } from 'react-redux';
import { useGetList, } from '../Constants/APICalls';

import ActivityList from '../components/activity/ActivityList';
import HomeButton from '../components/utility/HomeButton';

// TODO: update getList to be in apiCalls
  // attempted but issues with unresolved promises and object returning not expected array
  // create custom hook so can have dispatches and selectors inside

const ActivityView = () => {
  const activityArray = useSelector((state) => state.activity.activityItems);
  const location = useSelector((state) => state.location.location);
  const activity = useSelector((state) => state.activity.activity);
  useGetList(location, activity);

  let list = null;
  if (activityArray.length > 0) {
    list = <ActivityList />
  }
  
  return (
    <View>
      <View style={styles.activityView}>
        <Text></Text>
        {list}
      </View>
      <HomeButton />
    </View>
  )
};

const styles = StyleSheet.create({
  activityView: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
});

export default ActivityView;