import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from '@/components/atoms/ErrorBoundary';
import GlobalStyles from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
