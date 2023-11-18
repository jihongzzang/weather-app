import { ErrorResponse, WeatherData } from '../types';

import useWeaherStore from './useWeaherStore';
import useWeatherStoreDispatch from './useWeatherStoreDispatch';

import { API_KEY } from '@/config';

export default function useFetchWeather() {
  const { searchValue } = useWeaherStore();
  const dispatch = useWeatherStoreDispatch();

  const handleFetch = async () => {
    const city = searchValue;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
      );

      if (response.status === 200) {
        const data: WeatherData = await response.json();
        dispatch({ type: 'fetch_data', payload: data });
        dispatch({ type: 'render_type', payload: 'card' });
      } else if (response.status === 404) {
        const data: ErrorResponse = await response.json();
        dispatch({ type: 'fetch_data', payload: data });
        dispatch({ type: 'render_type', payload: 'notFound' });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching data:', error);
    }
  };

  return { handleFetch };
}
