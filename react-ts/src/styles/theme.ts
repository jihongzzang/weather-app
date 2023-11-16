import { DefaultTheme } from 'styled-components';

// Light Theme
const lightTheme: DefaultTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  cardBackground: '#F8F8F8',
  buttonBackground: '#E0E0E0',
  buttonText: '#363537',
};

// Dark Theme
const darkTheme: DefaultTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  cardBackground: '#424242',
  buttonBackground: '#555',
  buttonText: '#FAFAFA',
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
