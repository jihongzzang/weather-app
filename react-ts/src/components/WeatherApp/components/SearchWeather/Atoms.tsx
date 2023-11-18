import styled from 'styled-components';

import { StyledDiv, StyledInput, StyledButton } from '@/components/atoms';
import { center } from '@/styles/utilStyles';

export const SearchBox = styled(StyledDiv)`
  position: relative;

  svg {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    margin: 0 1.2rem;
    color: ${({ theme, $darkmode }) =>
      $darkmode ? theme.palette['grey-300'] : theme.palette['grey-900']};
    font-size: 2.8rem;
  }
`;

export const Input = styled(StyledInput)`
  width: 100%;
  height: 6rem;
  font-size: 2.4rem;
  font-weight: 500;

  padding-left: 4.5rem;
  padding-right: 6.4rem;

  border: none;
  color: ${({ theme }) => theme.textColor};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  background: ${({ theme }) => theme.backgroundColor};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  &:hover {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  &::placeholder {
    font-size: 1.4rem;
    color: ${({ theme, $darkmode }) =>
      $darkmode ? theme.palette['grey-300'] : theme.palette['grey-900']};
  }
`;

export const Button = styled(StyledButton)`
  ${center}
  position: absolute;
  transform: translateY(-50%);
  margin: 0 1.2rem;
  top: 50%;
  right: 0;
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
  font-size: 2.2rem;

  background: transparent;

  svg {
    color: ${({ theme, $darkmode }) =>
      $darkmode ? theme.palette['grey-300'] : theme.palette['grey-900']};
    font-size: 2.4rem;
  }

  &:hover svg {
    color: ${({ $darkmode, theme }) =>
      $darkmode ? theme.palette.white : theme.palette['cyan-1000']};
  }
`;
