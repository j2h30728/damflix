import { ReactNode, useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header, ScrollTopButton } from '.';
import { DarkModeContext, DarkModeContextProvider } from '../contexts/DarkModeContext';
import GlobalStyle from '../styles/GlobalStyle';
import { darkTheme, lightTheme } from '../styles/theme';

const Layout = ({ children }: { children: ReactNode }) => {
  const { isDark } = useContext(DarkModeContext);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <DarkModeContextProvider>
        <GlobalStyle />
        <Wrapper>
          <Header />
          {children}
          <ScrollTopButton />
        </Wrapper>
      </DarkModeContextProvider>
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
