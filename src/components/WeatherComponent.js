import React from 'react';
import WeatherIcon from 'react-icons-weather';

const WeatherComponent = (props) => {
  return (
    <div>
      <WeatherIcon name="owm" iconId={props.iconId}flip="horizontal" rotate="90" />
    </div>
  )
}

export default WeatherComponent;