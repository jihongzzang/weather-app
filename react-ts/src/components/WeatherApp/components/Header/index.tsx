import { useDarkMode } from 'usehooks-ts';

import { HeaderContainer, DarModeButton } from './Atoms';

import { StyledText } from '@/components/atoms';

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
