import { useDarkMode } from 'usehooks-ts';

import StyledText from '../atoms/Text';

function Home() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <div>
      <button type="button" onClick={toggle}>
        Toggle
      </button>
      <StyledText $darkmode={isDarkMode}>다크모드</StyledText>
    </div>
  );
}

export default Home;
