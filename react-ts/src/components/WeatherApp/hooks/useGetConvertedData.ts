import { useMemo } from 'react';

import useWeaherStore from './useWeaherStore';

import ClearPath from '@/assets/images/clear.png';
import CloudPath from '@/assets/images/cloud.png';
import MistPath from '@/assets/images/mist.png';
import RainPath from '@/assets/images/rain.png';
import SnowPath from '@/assets/images/snow.png';

export default function useGetConvertedData() {
  const { data } = useWeaherStore();

  const detailInfo = useMemo(() => {
    if (data && 'weather' in data) {
      const { main, wind } = data;
      return {
        humidity: `${main.humidity}`,
        humidityUnit: '%',
        wind: `${wind.speed}`,
        windUnit: 'Km/h',
      };
    }
    return {
      humidity: '',
      humidityUnit: '',
      wind: '',
      windUnit: '',
    };
  }, [data]);

  const mainInfo = useMemo(() => {
    if (data && 'weather' in data) {
      const { main, weather } = data;
      return {
        temperature: `${parseInt(main.temp.toString(), 10)}`,
        unit: '°C',
        description: `${weather[0].description}`,
      };
    }
    return {
      temperature: '',
      unit: '',
      description: '',
    };
  }, [data]);

  const src = useMemo(() => {
    if (data && 'weather' in data) {
      switch (data.weather[0].main) {
        case 'Clear':
          return ClearPath;

        case 'Rain':
          return RainPath;

        case 'Snow':
          return SnowPath;

        case 'Clouds':
          return CloudPath;

        case 'Haze':
          return MistPath;

        default:
          return '';
      }
    }

    return '';
  }, [data]);

  return {
    mainInfo,
    detailInfo,
    src,
  };
}
