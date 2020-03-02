import React from 'react';
import { StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

// TODO: update to allow for 45 degree granularity in direction

const WindDirection = (props) => {
  let direction;
  switch(true) {
    case (props < 45 || props > 315):
      direction = 'arrow-up';
      break;
    case (props < 135):
      direction = 'arrow-right';
      break;
    case (props < 215):
      direction = 'arrow-down';
      break;
    case (props < 315):
      direction = 'arrow-left';
      break;
    default:
      direction =  'minus';
  }
  return <MaterialCommunityIcons name={direction} size={12} color="#BFD1E5" style={styles.arrow} />
};

const styles = StyleSheet.create({
  arrow: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 3,
    
  }
});

export default WindDirection;
