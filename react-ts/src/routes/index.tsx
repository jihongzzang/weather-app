import { Route, Routes } from 'react-router-dom';

import WeatherApp from '@/components/WeatherApp';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<WeatherApp />} />
    </Routes>
  );
}
