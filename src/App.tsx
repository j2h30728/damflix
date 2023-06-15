import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { DarkModeContext } from './contexts/darkModeContext';
import ROUTE_PATH from './router/ROUTE_PATH';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const { handleChangeDarkMode, isDark } = useContext(DarkModeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <nav>
        <button onClick={handleChangeDarkMode}>{isDark ? 'DARK' : 'LIGHT'}</button>
        <div>
          <Link to={ROUTE_PATH.COMING_SOON}>ROUTE_PATH.COMING_SOON</Link>
        </div>
        <div>
          <Link to={ROUTE_PATH.NOW_PLAYING}>ROUTE_PATH.NOW_PLAYING</Link>
        </div>
      </nav>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
