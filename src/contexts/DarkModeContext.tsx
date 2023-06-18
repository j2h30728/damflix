/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';

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

  return <DarkModeContext.Provider value={{ handleChangeDarkMode, isDark }}>{children}</DarkModeContext.Provider>;
};
