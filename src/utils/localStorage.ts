const ACCESS_TOKEN = 'accessToken';

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const setTokenFromLocalStorage = (value: string) => {
  return localStorage.setItem(ACCESS_TOKEN, value);
};

export const removeTokenFromLocalStorage = () => {
  return localStorage.removeItem(ACCESS_TOKEN);
};
