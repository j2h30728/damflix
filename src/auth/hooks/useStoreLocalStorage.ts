import { useSyncExternalStore } from 'react';

const useStoreLocalStorage = (key: string) => {
  const subscribe = (listener: () => void) => {
    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    };
  };

  const getSnapShot = () => {
    return localStorage.getItem(key);
  };
  const setValueInLocalStorage = (value: string) => {
    return localStorage.setItem(key, value);
  };

  const deleteValueInLocalStorage = () => {
    return localStorage.removeItem(key);
  };

  const localStorageValue = useSyncExternalStore(subscribe, getSnapShot);

  return { deleteValueInLocalStorage, localStorageValue, setValueInLocalStorage };
};

export default useStoreLocalStorage;
