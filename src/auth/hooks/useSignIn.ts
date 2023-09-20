import { useMutationSignInWithEmail } from '../mutations';
import useUser from './useUser';

const useSignIn = () => {
  const { signIn } = useUser();
  const signInMutation = useMutationSignInWithEmail({
    onSuccess: async responseData => {
      const token = await responseData.user.getIdToken();
      signIn(token);
    },
  });

  return signInMutation;
};

export default useSignIn;
