import { createContext, useState } from 'react';

interface DarkModecontextType {
  handleChangeDarkMode?: () => void;
  isDark: boolean;
}

export const DarkModeContext = createContext<DarkModecontextType>({
  isDark: false,
});

export const DarkModeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const handleChangeDarkMode = () => setIsDark(prev => !prev);

  return <DarkModeContext.Provider value={{ handleChangeDarkMode, isDark }}>{children}</DarkModeContext.Provider>;
};
