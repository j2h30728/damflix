import { useNavigate } from 'react-router-dom';

import { ACCESS_TOKEN } from '../../constants/auth';
import ROUTE_PATH from '../../constants/route';
import useStoreLocalStorage from './useStoreLocalStorage';

const useUser = () => {
  const { deleteValueInLocalStorage, localStorageValue, setValueInLocalStorage } = useStoreLocalStorage(ACCESS_TOKEN);
  const navigate = useNavigate();

  const signIn = (accessToken: string) => {
    setValueInLocalStorage(accessToken);
    return navigate(ROUTE_PATH.ROOT);
  };

  const logOut = () => {
    deleteValueInLocalStorage();
    return navigate(ROUTE_PATH.ROOT);
  };
  const isLoggedIn = !!localStorageValue;

  return { isLoggedIn, logOut, signIn };
};
export default useUser;
