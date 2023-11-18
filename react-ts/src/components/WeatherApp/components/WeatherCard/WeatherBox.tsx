import { useDarkMode } from 'usehooks-ts';

import { useGetConvertedData, useWeaherStore } from '../../hooks';

import { WeatherBoxContainer, TemperatureText, DescriptionText } from './Atoms';

import { StyledText } from '@/components/atoms';

export default function WeatherBox() {
  const { renderType } = useWeaherStore();
  const { isDarkMode } = useDarkMode();
  const { src, mainInfo } = useGetConvertedData();

  return (
    <WeatherBoxContainer $rendertype={renderType} $darkmode={isDarkMode}>
      <img src={src} alt="weather" />

      <TemperatureText as="p">
        {mainInfo.temperature}
        <StyledText>{mainInfo.unit}</StyledText>
      </TemperatureText>

      <DescriptionText as="p">{mainInfo.description}</DescriptionText>
    </WeatherBoxContainer>
  );
}
