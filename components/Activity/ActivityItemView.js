import React, { useState, } from 'react';
import axios from 'axios';

import { openWeather } from '../../Keys';

import NormalItem from './NormalItem';
import ExpandedItem from './ExpandedItem';

const ActivityItem = ({ 
  index, name, summary, difficulty, imgSqSmall, stars, location, url, length, latitude, longitude,
}) => {

  const [weatherDisplay, setWeatherDisplay] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=Imperial&appid=${openWeather}`;

      const result = await axios({
        method: 'get',
        url,
        responseType: 'stream',
      });
      const forecastObj = JSON.parse(result.request.responseText);
      setWeatherData(forecastObj.list);
    } catch {
      console.error('error in getting weather');
    }
  };

  if (weatherDisplay) {
    if (!weatherData) {
      getWeather();
    }
    return (
      <ExpandedItem 
        index={index} 
        name={name} 
        summary={summary} 
        difficulty={difficulty} 
        imgSqSmall={imgSqSmall}
        stars={stars}
        location={location}
        url={url}
        length={length}
        latitude={latitude}
        longitude={longitude}
        setWeatherDisplay={() => setWeatherDisplay(false)}
        weather={weatherData}
      />
    );
  } else {
    return (
      <NormalItem 
        index={index} 
        name={name} 
        summary={summary} 
        difficulty={difficulty} 
        imgSqSmall={imgSqSmall}
        stars={stars}
        location={location}
        url={url}
        length={length}
        latitude={latitude}
        longitude={longitude}
        setWeatherDisplay={() => setWeatherDisplay(true)}
      />
    );
  } 
}

export default ActivityItem;