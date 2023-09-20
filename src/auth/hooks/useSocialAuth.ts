import { useGitHubAuthSignInWithPopup, useGoogleAuthSignInWithPopup } from '../mutations';
import useUser from './useUser';

const useSocialAuth = () => {
  const { signIn } = useUser();

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
