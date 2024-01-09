import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/globals';
import { BrowserRouter as RouterWrapper } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterWrapper>
        <Router />
      </RouterWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}
