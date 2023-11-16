import { DefaultTheme } from 'styled-components';

import palette from './palette';

export const darkTheme: DefaultTheme = {
  palette,

  bodyColor: palette.white,
  backgroundColor: palette['grey-900'],
  textColor: palette['grey-900-contrast'],
};

export const lightTheme: DefaultTheme = {
  palette,

  bodyColor: palette.white,
  backgroundColor: palette.white,
  textColor: palette['grey-900'],
};
