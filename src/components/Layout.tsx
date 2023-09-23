import { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header, ScrollTopButton } from '.';
import useDarkMode, { DARK_MODE } from '../hooks/useDarkMode';
import GlobalStyle from '../styles/GlobalStyle';
import { darkTheme, lightTheme } from '../styles/theme';

const Layout = ({ children }: { children: ReactNode }) => {
  const { localStorageValue: currentThemeMode } = useDarkMode();
  const isDarkMode = currentThemeMode === DARK_MODE.DARK;
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        {children}
        <ScrollTopButton />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Layout;
