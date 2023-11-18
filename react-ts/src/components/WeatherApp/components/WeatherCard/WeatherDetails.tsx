import { faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDarkMode } from 'usehooks-ts';

import { useWeaherStore, useGetConvertedData } from '../../hooks';

import {
  WeatherDetailsContainer,
  DetailWrraper,
  InfoWrraper,
  LeftTitle,
  Paragraph,
  RightTitle,
} from './Atoms';

export default function WeatherDetails() {
  const { renderType } = useWeaherStore();
  const { detailInfo } = useGetConvertedData();
  const { isDarkMode } = useDarkMode();

  const { humidity, humidityUnit, wind, windUnit } = detailInfo;

  return (
    <WeatherDetailsContainer $rendertype={renderType} $darkmode={isDarkMode}>
      <DetailWrraper className="humidity">
        <FontAwesomeIcon icon={faWater} />
        <InfoWrraper $darkmode={isDarkMode}>
          <LeftTitle>{`${humidity}${humidityUnit}`}</LeftTitle>
          <Paragraph as="p">습기</Paragraph>
        </InfoWrraper>
      </DetailWrraper>

      <DetailWrraper className="wind">
        <FontAwesomeIcon icon={faWind} />
        <InfoWrraper $darkmode={isDarkMode}>
          <RightTitle>{`${wind}${windUnit}`}</RightTitle>
          <Paragraph as="p">풍속</Paragraph>
        </InfoWrraper>
      </DetailWrraper>
    </WeatherDetailsContainer>
  );
}
