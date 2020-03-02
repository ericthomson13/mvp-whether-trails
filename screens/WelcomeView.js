import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { setSelectedActivity } from '../store/actions/activityActions';

import OptionButton from '../components/utility/OptionButton';


const WelcomeView = () => {
  const dispatch = useDispatch();
  const children = useSelector((state) => state.activity.activityOptions);

  const setActivity = (activity) => dispatch(setSelectedActivity(activity));

  return (
    <View style={styles.welcomeView}>
      <Text style={styles.welcomeTitle}>
        Please Select an Activity
      </Text>
      <View>
        <ScrollView style={styles.optionsList} >
          {children.map((option, i) => {
            return (
              <OptionButton key={i} name={option.name} setSelectedActivity={setActivity} />
            );
          })}
        </ScrollView>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    padding: 10,
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
    maxHeight: '75%',
  },
  welcomeTitle: {
    padding: 10,
    color: '#9d3a48',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default WelcomeView;
