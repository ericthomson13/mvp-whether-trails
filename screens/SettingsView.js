import React from 'react';
import { View, Text, StyleSheet, AsyncStorage, } from 'react-native';
import { useDispatch, } from 'react-redux';
import DropdownMenu from 'react-native-dropdown-menu';

import { setUnits, setTrailheadRange, setNumTrails, } from '../store/actions/settingsActions';

import HomeButton from '../components/utility/HomeButton';

const SettingsView = () => {
  const dispatch = useDispatch();
  const units = [['imperial', 'metric']];
  const trailheadRange = [[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]];
  const numTrails = [[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
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
        <View style={styles.dropdownList}>
          <View style={styles.dropView}>
            <Text style={styles.title}>Units</Text>
            <DropdownMenu 
              data={units} 
              handler={(selection, row) => { _storeSettings('units', units[selection][row]); dispatch(setUnits(units[selection][row]))}}
            />
          </View>
          <View style={styles.dropView}>
            <Text style={styles.title}>Trailhead Distance</Text>
            <DropdownMenu 
              data={trailheadRange}
              handler={(selection, row) => { _storeSettings('trailheadRange', trailheadRange[selection][row]); dispatch(setTrailheadRange(trailheadRange[selection][row]))}}
            />
          </View>
          <View style={styles.dropView} >
            <Text style={styles.title}>Max Number Trails</Text>
            <DropdownMenu 
              data={numTrails}
              handler={(selection, row) => { _storeSettings('numTrails', numTrails[selection][row]); dispatch(setNumTrails(numTrails[selection][row]))}}
            />
          </View>
        </View>
      </View>
      {/* <HomeButton /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  heading: {

  },
  dropView: {
    padding: 5,
    margin: 5,
  },
  dropdownList: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
  },
});

export default SettingsView;