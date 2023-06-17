import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { Header } from './components';
import { DarkModeContext } from './contexts/DarkModeContext';
import { ModalControlContextProvider } from './contexts/ModalControlContext';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const { isDark } = useContext(DarkModeContext);

  return (
    <ModalControlContextProvider>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Layout>
          <Header />
          <Outlet />
        </Layout>
      </ThemeProvider>
    </ModalControlContextProvider>
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
