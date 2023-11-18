import { useDarkMode } from 'usehooks-ts';

import { useWeaherStore } from '../../hooks';

import { NotFoundContainer } from './Atoms';

import notFoundImagePath from '@/assets/images/404.png';
import { StyledText } from '@/components/atoms';

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
