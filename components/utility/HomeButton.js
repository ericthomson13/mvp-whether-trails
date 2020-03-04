import React from 'react';
import { View, TouchableOpacity, StyleSheet, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useDispatch, } from 'react-redux';
import { setScreen } from '../../store/actions/screenActions';
import { setSelectedActivity, updateActivityArr, } from '../../store/actions/activityActions';

import { colors } from '../../Constants/Colors';

const HomeButton = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container} >
      <TouchableOpacity 
        onPress={() => {
          dispatch(setScreen('welcomeView')); 
          dispatch(setSelectedActivity(null)); 
          dispatch(updateActivityArr(null));
        }}
        style={styles.button}
      >
        <MaterialCommunityIcons name="home" size={20} color="#BFD1E5" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.buttonBackground,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});

export default HomeButton;