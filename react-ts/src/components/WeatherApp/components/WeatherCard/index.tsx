import { useWeaherStore } from '../../hooks';
import Header from '../Header';
import NotFound from '../NotFound';
import SearchWeather from '../SearchWeather';

import WeatherBox from './WeatherBox';
import WeatherDetails from './WeatherDetails';

import { ContainerProps } from '@/components/atoms';

function WeatherCard() {
  const { renderType } = useWeaherStore();

  return (
    <>
      <Header />
      <ContainerProps $rendertype={renderType}>
        <SearchWeather />
        <NotFound />
        <WeatherBox />
        <WeatherDetails />
      </ContainerProps>
    </>
  );
}

export default WeatherCard;
