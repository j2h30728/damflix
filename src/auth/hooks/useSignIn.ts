import { useContext } from 'react';

import { AuthContext } from '../AuthContext';
import { useMutationSignInWithEmail } from '../mutations';

const useSignIn = () => {
  const { signIn } = useContext(AuthContext);

  const signInMutation = useMutationSignInWithEmail({
    onSuccess: async responseData => {
      const token = await responseData.user.getIdToken();
      signIn(token);
    },
  });

  return signInMutation;
};

export default useSignIn;
