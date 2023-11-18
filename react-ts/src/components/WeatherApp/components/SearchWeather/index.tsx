import {
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import StyledDiv from '@/components/atoms/Div';

const SearchBox = styled(StyledDiv)`
  width: 100%;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    color: #06283d;
    width: 80%;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    padding-left: 32px;
  }

  > input::placeholder {
    font-size: 20px;
    font-weight: 500;
    color: #06283d;
    text-transform: capitalize;
  }

  > button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: #06283d;
    background: #dff6ff;
    border-radius: 50%;
    font-size: 22px;
    transition: 0.4s ease;
  }

  > button:hover {
    color: #fff;
    background: #06283d;
  }

  > svg {
    position: absolute;
    color: #06283d;
    font-size: 28px;
  }
`;

function WeatherSearch() {
  return (
    <SearchBox>
      <FontAwesomeIcon icon={faLocationDot} />
      <input type="text" placeholder="Enter your location" />
      <button type="button" aria-label="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </SearchBox>
  );
}

export default WeatherSearch;
