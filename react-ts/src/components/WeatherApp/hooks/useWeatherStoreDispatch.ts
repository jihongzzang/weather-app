import { useContext } from 'react';

import { WeatherAppDispatchDispatchContext } from '../provider';

export default function useWeatherStoreDispatch() {
  return useContext(WeatherAppDispatchDispatchContext);
}
