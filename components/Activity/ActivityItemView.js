/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { openWeather } from '../../Keys';

import NormalItem from './NormalItem';
import ExpandedItem from './ExpandedItem';

// TODO: show weather expands with motion

const ActivityItem = ({
  index, name, summary, difficulty, imgSmallMed, stars, location, url, length, latitude, longitude,
}) => {
  const [weatherDisplay, setWeatherDisplay] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const string = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=Imperial&appid=${openWeather}`;

      const result = await axios({
        method: 'get',
        url: string,
        responseType: 'stream',
      });
      const forecastObj = JSON.parse(result.request.responseText);
      setWeatherData(forecastObj.list);
    } catch {
      console.error('error in getting weather');
    }
  };

  useEffect(() => {
    if (!weatherData && weatherDisplay) {
      getWeather();
    }
  });

  if (weatherDisplay) {
    return (
      <ExpandedItem
        index={index}
        name={name}
        summary={summary}
        difficulty={difficulty}
        imgSmallMed={imgSmallMed}
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
  }
  return (
    <NormalItem
      index={index}
      name={name}
      summary={summary}
      difficulty={difficulty}
      imgSmallMed={imgSmallMed}
      stars={stars}
      location={location}
      url={url}
      length={length}
      latitude={latitude}
      longitude={longitude}
      setWeatherDisplay={() => setWeatherDisplay(true)}
    />
  );
};

export default ActivityItem;
