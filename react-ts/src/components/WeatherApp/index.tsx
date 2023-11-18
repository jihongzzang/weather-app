import { WeatherCard } from './components';
import WeatherAppProvider from './provider';

function WeatherApp() {
  return (
    <WeatherAppProvider>
      <WeatherCard />
    </WeatherAppProvider>
  );
}

export default WeatherApp;
