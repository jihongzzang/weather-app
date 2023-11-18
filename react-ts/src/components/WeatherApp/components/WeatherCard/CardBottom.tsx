import { faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledDiv from '@/components/atoms/Div';
import StyledText from '@/components/atoms/Text';

export default function CardBottom() {
  return (
    <StyledDiv className="weather-details">
      <StyledDiv className="humidity">
        <FontAwesomeIcon icon={faWater} />
        <StyledDiv className="text">
          <StyledText>hi</StyledText>
          <StyledText as="p">Humidity</StyledText>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv className="wind">
        <FontAwesomeIcon icon={faWind} />
        <StyledDiv className="text">
          <StyledText>hi</StyledText>
          <StyledText as="p">wind</StyledText>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}
