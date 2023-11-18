import styled from 'styled-components';

import { StyledText, StyledDiv } from '@/components/atoms';
import { fadeIn } from '@/styles/keyFrames';

/** WeatherDetails */

export const StyledTitle = styled(StyledText)`
  font-size: 2.2rem;
`;

export const Paragraph = styled(StyledText)`
  font-size: 1.4rem;
`;

export const LeftTitle = styled(StyledTitle)`
  justify-content: flex-start;
`;

export const RightTitle = styled(StyledTitle)`
  justify-content: flex-end;
`;

export const DetailWrraper = styled(StyledDiv)`
  display: flex;
  align-items: center;
  width: 50%;
  height: 10rem;
`;

export const InfoWrraper = styled(StyledDiv)`
  span,
  p {
    color: ${({ $darkmode, theme }) =>
      $darkmode ? theme.textColor : theme.palette['cyan-1000']};
    font-weight: 500;
  }
`;

export const WeatherDetailsContainer = styled(StyledDiv)`
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

/** WeatherBox */

export const TemperatureText = styled(StyledText)`
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

export const DescriptionText = styled(StyledText)`
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export const WeatherBoxContainer = styled(StyledDiv)`
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
