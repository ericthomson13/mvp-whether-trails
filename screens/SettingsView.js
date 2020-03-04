import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import DropdownMenu from 'react-native-dropdown-menu';

import HomeButton from '../components/utility/HomeButton';

const SettingsView = () => {
  const dispatch = useDispatch();

  const _storeSettings = async (target, setting) => {
    try {
      await AsyncStorage.setItem(`@whether_trails_${target}`,  setting);
    } catch (error) {
      console.log('error in storing settings ', error);
    }
  };

  return (
    <View>
      <View style={styles.container} >
        <Text style={styles.heading} >
          Settings:
        </Text>
        <View>
          <View style={styles.unitsView}>
            <Text style={styles.unitsTitle}>Units</Text>
            <DropdownMenu 
              data={['imperial', 'metric']} 
              handler={(selection, row) => { console.log('selection: ', selection, ' row: ', row);}}
            />
          </View>
        </View>
      </View>
      <HomeButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  heading: {

  },

});

export default SettingsView;