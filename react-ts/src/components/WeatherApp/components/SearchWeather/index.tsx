import {
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDarkMode } from 'usehooks-ts';

import { useFetchWeather, useSearchWeatherInput } from '../../hooks';
import useWeatherStore from '../../hooks/useWeaherStore';

import { SearchBox, Input, Button } from './Atoms';

function WeatherSearch() {
  const { searchValue } = useWeatherStore();
  const { handleSearch } = useSearchWeatherInput();
  const { handleFetch } = useFetchWeather();
  const { isDarkMode } = useDarkMode();

  return (
    <SearchBox className="search-box" $darkmode={isDarkMode}>
      <FontAwesomeIcon icon={faLocationDot} />
      <Input
        type="text"
        placeholder="나라 또는 도시를 입력해주세요."
        value={searchValue}
        onChange={handleSearch}
        $darkmode={isDarkMode}
      />
      <Button
        type="button"
        aria-label="search"
        onClick={handleFetch}
        $darkmode={isDarkMode}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </SearchBox>
  );
}

export default WeatherSearch;
