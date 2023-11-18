import notFoundImagePath from '@/assets/images/404.png';
import StyledDiv from '@/components/atoms/Div';
import StyledText from '@/components/atoms/Text';

export default function NotFound() {
  return (
    <StyledDiv className="not-found">
      <img src={notFoundImagePath} alt="" />
      <StyledText as="p">Oops! Invalid loaction:/</StyledText>
    </StyledDiv>
  );
}
