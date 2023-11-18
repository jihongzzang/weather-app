import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

import { StyledButton, StyledDiv, StyledText } from '@/components/atoms';
import { row } from '@/styles/utilStyles';

const HeaderContainer = styled(StyledDiv)`
  ${row}
  width: 100%;
  padding: 1.6rem 3rem;
  margin-bottom: 2.8rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.backgroundColor};
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const DarModeButton = styled(StyledButton)`
  padding: 0.2rem 0;
  border-radius: 0.4rem;
  background: ${(props) => props.theme.backgroundColor};
  margin-left: auto;
  color: ${(props) => props.theme.textColor};
`;

export default function Header() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <HeaderContainer $darkmode={isDarkMode}>
      <StyledText as="h1">오늘의 날씨</StyledText>
      <DarModeButton type="button" onClick={toggle}>
        다크모드 {isDarkMode ? '해제' : '설정'}
      </DarModeButton>
    </HeaderContainer>
  );
}
