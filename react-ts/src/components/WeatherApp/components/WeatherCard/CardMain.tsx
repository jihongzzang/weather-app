import styled from 'styled-components';

import StyledDiv from '@/components/atoms/Div';
import StyledText from '@/components/atoms/Text';

const WeatherBox = styled(StyledDiv)`
  text-align: center;

  > img {
    width: 60%;
    margin-top: 30px;
  }

  .temperature {
    position: relative;
    color: #06283d;
    font-size: 4rem;
    font-weight: 800;
    margin-top: 30px;
    margin-left: -16px;
  }
`;

export default function CardMain() {
  return (
    <WeatherBox>
      <img src="" alt="" />
      <StyledText as="p" className="temperature">
        hi
      </StyledText>
      <StyledText as="p" className="temperature" />
    </WeatherBox>
  );
}
