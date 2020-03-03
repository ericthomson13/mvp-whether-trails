import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { useDispatch, } from 'react-redux';
import { setScreen } from '../../store/actions/screenActions';
import { setSelectedActivity, updateActivityArr, } from '../../store/actions/activityActions';

const HomeButton = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity 
        onPress={() => {
          dispatch(setScreen('welcomeView')); 
          dispatch(setSelectedActivity(null)); 
          dispatch(updateActivityArr(null));
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {

  }
});

export default HomeButton;