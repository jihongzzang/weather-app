import { useMemo } from 'react';
import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

import { useWeaherStore } from '../../hooks';

import ClearPath from '@/assets/images/clear.png';
import CloudPath from '@/assets/images/cloud.png';
import MistPath from '@/assets/images/mist.png';
import RainPath from '@/assets/images/rain.png';
import SnowPath from '@/assets/images/snow.png';
import { StyledText, StyledDiv } from '@/components/atoms';
import { fadeIn } from '@/styles/keyFrames';

const TemperatureText = styled(StyledText)`
  position: relative;
  font-size: 4rem;
  font-weight: 800;
  margin-top: 3rem;

  span {
    position: absolute;
    margin-left: 0.4rem;
    font-size: 1.5rem;
  }
`;

const DescriptionText = styled(StyledText)`
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: capitalize;
`;

const WeatherBoxContainer = styled(StyledDiv)`
  text-align: center;
  scale: 0;
  opacity: 0;

  > img {
    width: 60%;
    margin-top: 3rem;
  }

  span,
  p {
    color: ${({ $darkmode, theme }) =>
      $darkmode ? theme.textColor : theme.palette['cyan-1000']};
  }

  display: ${(props) => (props.$rendertype === 'card' ? '' : 'none')};
  animation: ${fadeIn} 0.5s 0.5s forwards;
`;

export default function WeatherBox() {
  const { data, renderType } = useWeaherStore();
  const { isDarkMode } = useDarkMode();

  const imgSrc = useMemo(() => {
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

  const info = useMemo(() => {
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

  return (
    <WeatherBoxContainer $rendertype={renderType} $darkmode={isDarkMode}>
      <img src={imgSrc} alt="weather" />

      <TemperatureText as="p">
        {info.temperature}
        <StyledText>{info.unit}</StyledText>
      </TemperatureText>

      <DescriptionText as="p">{info.description}</DescriptionText>
    </WeatherBoxContainer>
  );
}
