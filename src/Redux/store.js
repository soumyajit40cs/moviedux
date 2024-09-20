import { configureStore } from "@reduxjs/toolkit";
import { createWeatherApi } from "./weatherApi";

export const store = configureStore({
  reducer: {
    [createWeatherApi.reducerPath]: createWeatherApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createWeatherApi.middleware),
});
