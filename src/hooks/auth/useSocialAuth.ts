import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { useGitHubAuthSignInWithPopup, useGoogleAuthSignInWithPopup } from '../../queries/auth';

const useSocialAuth = () => {
  const { logIn } = useContext(AuthContext);

  const useGoogleAuth = () =>
    useGoogleAuthSignInWithPopup({
      onSuccess: async responseData => {
        const accessToken = await responseData.user.getIdToken();
        return logIn(accessToken);
      },
    });

  const useGitHubAuth = () => {
    return useGitHubAuthSignInWithPopup({
      onSuccess: async responseData => {
        const accessToken = await responseData.user.getIdToken();
        return logIn(accessToken);
      },
    });
  };

  return { useGitHubAuth, useGoogleAuth };
};
export default useSocialAuth;
