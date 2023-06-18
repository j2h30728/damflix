import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { Header, ScrollTopButton } from './components';
import { DarkModeContext } from './contexts/DarkModeContext';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const { isDark } = useContext(DarkModeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Layout>
        <Header />
        <Outlet />
        <ScrollTopButton />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

const Layout = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
