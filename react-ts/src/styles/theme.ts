import { DefaultTheme } from 'styled-components';

import palette from './palette';

export const darkTheme: DefaultTheme = {
  palette,
  bodyColor: palette['grey-900'],
  backgroundColor: palette['cyan-1000'],
  textColor: palette['grey-900-contrast'],
  borderColor: palette['grey-900-contrast'],
  buttonColor: palette['grey-900-contrast'],
};

export const lightTheme: DefaultTheme = {
  palette,
  bodyColor: palette['blue-100'],
  backgroundColor: palette.white,
  textColor: palette['grey-900'],
  borderColor: palette['grey-900'],
  buttonColor: palette['grey-900'],
};
