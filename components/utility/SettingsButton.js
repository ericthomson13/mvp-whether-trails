import React from 'react';
import { View, TouchableOpacity, StyleSheet, } from 'react-native';

import { MaterialCommunityIcons, } from '@expo/vector-icons'; 
 
const SettingsButton = () => {

  return (
    <View style={styles.settting} >
      <TouchableOpacity onPress={() => dispatch(setScreen('settingsView'))} >
        <MaterialCommunityIcons name='settings' size={12} color='black'/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
    padding: 10,
    margin: 10,
  },
});

export default SettingsButton;
 