import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WeatherIcon = (props) => {
  const { description } = props
  let icon = null;
  switch(description) {
    case 'clear sky':
      icon = (<MaterialCommunityIcons name="weather-sunny" size={18} color="yellow" />);
      break;
    case 'overcast clouds':
      icon = (<MaterialCommunityIcons name="weather-partlycloudy" size={18} color="gray" />);
      break;
    case 'broken clouds':
      icon = (<MaterialCommunityIcons name="weather-partlycloudy" size={18} color="gray" />);
      break;
    case 'scattered clouds':
      icon = (<MaterialCommunityIcons name="weather-partlycloudy" size={18} color="gray" />);
      break;
    case 'snow': 
      icon = (<MaterialCommunityIcons name="weather-snowy" size={18} color="white" />);
      break;
    case 'rainy':
      icon = (<MaterialCommunityIcons name="cloud-rain" size={18} color="blue"/>);
      break;
    default:
      icon = (<MaterialCommunityIcons name="weather-sunny" size={18} color="yellow" />);
  };
  return icon;
}

export default WeatherIcon;