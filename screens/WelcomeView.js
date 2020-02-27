import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import OptionButton from '../utility/OptionButton';

const WelcomeView = (props) => {
  
  return (
    <View style={styles.welcomeView}>
      <Text style={styles.welcomeTitle}>

      </Text>
      <View>
        <ScrollView style={styles.optionsList} >
          {props.children.map((option, i) => {
            return (
              <OptionButton name={option.name} onPress={() =>  {props.setViewMode(option.name)}} />
            );
          })}
        </ScrollView>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  welcomeView: {

  },
  welcomeTitle: {

  },

});

export default WelcomeView;
