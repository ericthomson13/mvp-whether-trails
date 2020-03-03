import React from 'react';
import { StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const DifficultyIcon = ({ difficulty }) => {
  let type, color;
  switch(difficulty) {
    case 'green':
      type = 'circle';
      color = 'green';
      break;
    case 'blue':
      type = 'square';
      color = 'blue';
      break;
    case 'blueBlack':
      type = 'square';
      color = 'dark-blue';
      break;
    case 'black':
      type = 'cards-diamond';
      color = 'black';
      break;
    default:
      type = 'minus';
  };
  return (
    <MaterialCommunityIcons name={type} size={22} color={color} />
  )
};

export default DifficultyIcon;