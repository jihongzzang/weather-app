import styled from 'styled-components';

import StyledDiv from '../Div';

const Container = styled(StyledDiv)`
  position: relative;
  width: 400px;
  background: ${({ $darkmode, theme }) =>
    $darkmode ? theme.backgroundColor : theme.backgroundColor};
  padding: 30px 32px;
  overflow: hidden;
  border-radius: 18px;
  transition: 0.6s ease-out;

  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;

  height: ${({ $rendertype }) =>
    $rendertype === 'card'
      ? '590px'
      : $rendertype === 'notFound'
        ? '400px'
        : '120px'};
`;

export default Container;
