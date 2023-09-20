import { useContext } from 'react';

import { AuthContext } from '../AuthContext';
import { useGitHubAuthSignInWithPopup, useGoogleAuthSignInWithPopup } from '../mutations';

const useSocialAuth = () => {
  const { signIn } = useContext(AuthContext);

  const useGoogleAuth = () =>
    useGoogleAuthSignInWithPopup({
      onSuccess: async responseData => {
        const accessToken = await responseData.user.getIdToken();
        return signIn(accessToken);
      },
    });

  const useGitHubAuth = () => {
    return useGitHubAuthSignInWithPopup({
      onSuccess: async responseData => {
        const accessToken = await responseData.user.getIdToken();
        return signIn(accessToken);
      },
    });
  };

  return { useGitHubAuth, useGoogleAuth };
};
export default useSocialAuth;
