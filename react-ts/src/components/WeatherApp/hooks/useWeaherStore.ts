import { useContext } from 'react';

import { WeatherAppContext } from '../provider';

export default function useWeatherStore() {
  return useContext(WeatherAppContext);
}
