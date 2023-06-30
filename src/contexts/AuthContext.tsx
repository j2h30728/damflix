/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getTokenFromLocalStorage, removeTokenFromLocalStorage, setTokenFromLocalStorage } from '../utils/localStorage';

interface AuthContextType {
  isLoggedIn: boolean;
  logIn: (accessToken: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  logIn: (accessToken: string) => {
    accessToken;
  },
  logOut: () => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const logIn = (accessToken: string) => {
    setTokenFromLocalStorage(accessToken);
    setIsLoggedIn(true);
    return navigate('/');
  };

  const logOut = () => {
    removeTokenFromLocalStorage();
    setIsLoggedIn(false);
    return navigate('/');
  };

  const checkedLogInState = () => {
    const accessToken = getTokenFromLocalStorage();
    return typeof accessToken === 'string';
  };

  useEffect(() => {
    checkedLogInState() ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>{children}</AuthContext.Provider>;
};
