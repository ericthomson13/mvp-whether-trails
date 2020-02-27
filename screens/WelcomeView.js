import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import OptionButton from '../components/OptionButton';

const WelcomeView = (props) => {
  
  return (
    <View style={styles.welcomeView}>
      <Text style={styles.welcomeTitle}>
        Please Select an Activity
      </Text>
      <View>
        <ScrollView style={styles.optionsList} >
          {props.children.map((option, i) => {
            return (
              <OptionButton key={i} name={option.name} setSelectedActivity={props.setSelectedActivity} />
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
    
  },

});

export default WelcomeView;
