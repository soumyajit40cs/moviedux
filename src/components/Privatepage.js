import React from "react";
import { useGetWeatherByCityQuery } from "../Redux/weatherApi";
import { useGetCurrentWeatherQuery } from "../Redux/weatherApi";

export default function Privatepage() {
  //const { data: currentWeather, isFetching } = useGetWeatherByCityQuery();
  const { data: api1, isLoading, error } = useGetWeatherByCityQuery();
  const { data: currentWeather, isFetching } = useGetCurrentWeatherQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!api1) {
    return <p>Please Enter City</p>;
  }

  

  const currentCondition = api1?.current_condition[0];
  const currentArea = api1?.nearest_area[0];

  //console.log(currentWeather.nearest_area[0].areaName[0].value);

  return (
    <div>
      <h2>my private page</h2>
      <div className="weather-info">
        <h2>Weather in {currentArea.areaName[0].value}</h2>
        <p>Temperature: {currentCondition.temp_C} °C</p>
        <p>Weather Conditions are: {currentCondition.weatherDesc[0].value}</p>
      </div>
    </div>
  );
}
