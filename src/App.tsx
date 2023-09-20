import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContextProvider } from './auth/AuthContext';
import { Header, ScrollTopButton } from './components';
import { DarkModeContextProvider } from './contexts/DarkModeContext';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <DarkModeContextProvider>
      <AuthContextProvider>
        <GlobalStyle />
        <Layout>
          <Header />
          <Outlet />
          <ScrollTopButton />
        </Layout>
      </AuthContextProvider>
    </DarkModeContextProvider>
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
