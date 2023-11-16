import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

import { ErrorBoundary } from '@/components/atoms/ErrorBoundary';
import GlobalStyles from '@/styles/GlobalStyles';
import { darkTheme, lightTheme } from '@/styles/theme';

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
        <GlobalStyles />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
