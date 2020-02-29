import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// TODO: update for more types of weather

const WeatherIcon = (props) => {
  const { description } = props;
  let icon = null;
  switch(description) {
    case 'clear sky':
      icon = {name:'weather-sunny', color:'yellow'};
      break;
    case 'overcast clouds':
      icon = {name:'weather-partlycloudy', color:'gray'};
      break;
    case 'broken clouds':
      icon = {name:'weather-partlycloudy', color:'gray'};
      break;
    case 'scattered clouds':
      icon = {name:'weather-partlycloudy', color:'gray'};
      break;
    case 'snow': 
      icon = {name:'weather-snowy', color:'white'};
      break;
    case 'rainy':
      icon = {name:'cloud-rain', color:'blue'};
      break;
    default:
      icon = {name:'weather-sunny', color: 'yellow'};
  };
  return <MaterialCommunityIcons name={icon.name} size={18} color={icon.color} />;
}

export default WeatherIcon;