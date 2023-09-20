import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import useStoreLocalStorage from '../auth/hooks/useStoreLocalStorage';
import { darkTheme, lightTheme } from '../styles/theme';

const DARK_MODE = {
  DARK: 'DARK',
  KEY: 'darkMode',
  LIGHT: 'LIGHT',
} as const;
interface DarkModeContextType {
  handleChangeDarkMode: () => void;
  isDark: boolean;
}

export const DarkModeContext = createContext<DarkModeContextType>({} as DarkModeContextType);

export const DarkModeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { localStorageValue, setValueInLocalStorage } = useStoreLocalStorage(DARK_MODE.KEY);

  const [isDark, setIsDark] = useState(() => localStorageValue === DARK_MODE.DARK);
  const handleChangeDarkMode = () => {
    setIsDark(prev => !prev);
    setValueInLocalStorage(isDark ? DARK_MODE.LIGHT : DARK_MODE.DARK);
  };

  return (
    <DarkModeContext.Provider value={{ handleChangeDarkMode, isDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};
