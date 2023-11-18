import StyledContainer from '../atoms/Container';

import { SearchWeather, WeatherCard } from './components';

function WeatherApp() {
  const APIKey = 'c49c1d4c94495eaabd6da2fd59590de0';
  const a = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

  return (
    <StyledContainer className="container">
      <SearchWeather />
      <WeatherCard />
    </StyledContainer>
  );
}

export default WeatherApp;
