import styled from 'styled-components';

import { StyledDiv } from '@/components/atoms';
import { fadeIn } from '@/styles/keyFrames';

export const NotFoundContainer = styled(StyledDiv)`
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
