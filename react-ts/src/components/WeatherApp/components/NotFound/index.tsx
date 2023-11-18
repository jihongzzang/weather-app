import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

import { useWeaherStore } from '../../hooks';

import notFoundImagePath from '@/assets/images/404.png';
import { StyledDiv, StyledText } from '@/components/atoms';
import { fadeIn } from '@/styles/keyFrames';

const NotFoundContainer = styled(StyledDiv)`
  width: 100%;
  text-align: center;
  margin-top: 5rem;
  scale: 0;
  opacity: 0;

  > img {
    width: 70%;
  }

  > p {
    color: ${({ $darkmode, theme }) =>
      $darkmode ? theme.textColor : theme.palette['cyan-1000']};
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1.2rem;
  }

  display: ${(props) => (props.$rendertype === 'notFound' ? 'block' : 'none')};
  animation: ${fadeIn} 0.5s 0.5s forwards;
`;

export default function NotFound() {
  const { renderType, searchValue } = useWeaherStore();
  const { isDarkMode } = useDarkMode();

  return (
    <NotFoundContainer
      className="not-found"
      $rendertype={renderType}
      $darkmode={isDarkMode}
    >
      <img src={notFoundImagePath} alt="notFound" />
      <StyledText as="p">
        {`'${searchValue}' 에 대한 검색 결과가 없습니다.`}
      </StyledText>
    </NotFoundContainer>
  );
}
