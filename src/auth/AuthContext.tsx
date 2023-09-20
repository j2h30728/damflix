import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  setTokenFromLocalStorage,
} from './tokenWithLocalStorage';

interface AuthContextType {
  isLoggedIn: boolean;
  logOut: () => void;
  signIn: (accessToken: string) => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const signIn = (accessToken: string) => {
    setTokenFromLocalStorage(accessToken);
    setIsLoggedIn(true);
    return navigate('/');
  };

  const logOut = () => {
    removeTokenFromLocalStorage();
    setIsLoggedIn(false);
    return navigate('/');
  };

  const checkedSignInState = () => {
    const accessToken = getTokenFromLocalStorage();
    return typeof accessToken === 'string';
  };

  useEffect(() => {
    checkedSignInState() ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return <AuthContext.Provider value={{ isLoggedIn, logOut, signIn }}>{children}</AuthContext.Provider>;
};
