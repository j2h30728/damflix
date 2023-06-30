/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/theme';

interface DarkModeContextType {
  handleChangeDarkMode: () => void;
  isDark: boolean;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  handleChangeDarkMode: () => {},
  isDark: true,
});

export const DarkModeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const handleChangeDarkMode = () => setIsDark(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ handleChangeDarkMode, isDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};
