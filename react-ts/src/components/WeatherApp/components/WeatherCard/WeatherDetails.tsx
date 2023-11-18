import { faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

import { useWeaherStore } from '../../hooks';

import { StyledDiv, StyledText } from '@/components/atoms';
import { fadeIn } from '@/styles/keyFrames';

const StyledTitle = styled(StyledText)`
  font-size: 2.2rem;
`;

const Paragraph = styled(StyledText)`
  font-size: 1.4rem;
`;

const LeftTitle = styled(StyledTitle)`
  justify-content: flex-start;
`;

const RightTitle = styled(StyledTitle)`
  justify-content: flex-end;
`;

const DetailWrraper = styled(StyledDiv)`
  display: flex;
  align-items: center;
  width: 50%;
  height: 10rem;
`;

const InfoWrraper = styled(StyledDiv)`
  span,
  p {
    color: ${({ $darkmode, theme }) =>
      $darkmode ? theme.textColor : theme.palette['cyan-1000']};
    font-weight: 500;
  }
`;

const WeatherDetailsContainer = styled(StyledDiv)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  scale: 0;
  opacity: 0;

  .humidity {
    justify-content: flex-start;
  }

  .wind {
    justify-content: flex-end;
  }

  svg {
    color: ${({ $darkmode, theme }) =>
      $darkmode ? theme.textColor : theme.palette['cyan-1000']};
    font-size: 2.6rem;
    margin-right: 1rem;
    margin-top: 0.6rem;
  }

  display: ${(props) => (props.$rendertype === 'card' ? '' : 'none')};
  animation: ${fadeIn} 0.5s 0.5s forwards;
`;

export default function WeatherDetails() {
  const { data, renderType } = useWeaherStore();
  const { isDarkMode } = useDarkMode();

  const info = useMemo(() => {
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

  return (
    <WeatherDetailsContainer $rendertype={renderType} $darkmode={isDarkMode}>
      <DetailWrraper className="humidity">
        <FontAwesomeIcon icon={faWater} />
        <InfoWrraper $darkmode={isDarkMode}>
          <LeftTitle>{`${info.humidity}${info.humidityUnit}`}</LeftTitle>
          <Paragraph as="p">습기</Paragraph>
        </InfoWrraper>
      </DetailWrraper>

      <DetailWrraper className="wind">
        <FontAwesomeIcon icon={faWind} />
        <InfoWrraper $darkmode={isDarkMode}>
          <RightTitle>{`${info.wind}${info.windUnit}`}</RightTitle>
          <Paragraph as="p">풍속</Paragraph>
        </InfoWrraper>
      </DetailWrraper>
    </WeatherDetailsContainer>
  );
}
