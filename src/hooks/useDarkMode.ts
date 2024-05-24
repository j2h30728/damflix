import useStoreLocalStorage from './auth/useStoreLocalStorage';

export const DARK_MODE = {
  DARK: 'DARK',
  KEY: 'darkMode',
  LIGHT: 'LIGHT',
} as const;

const useDarkMode = () => {
  const { localStorageValue, setValueInLocalStorage } = useStoreLocalStorage(DARK_MODE.KEY);

  const handleToggleDarkMode = () => {
    setValueInLocalStorage(localStorageValue === DARK_MODE.DARK ? DARK_MODE.LIGHT : DARK_MODE.DARK);
  };

  return { handleToggleDarkMode, localStorageValue };
};

export default useDarkMode;
