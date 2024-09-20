import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createWeatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://wttr.in/" }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: () => `kolkata?format=j1`,
    }),
    getWeatherByCity: builder.query({
      query: () => `delhi?format=j1`,
    }),
  }),
});

export const { useGetWeatherByCityQuery, useGetCurrentWeatherQuery } =
  createWeatherApi;
