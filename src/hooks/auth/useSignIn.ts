import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { useMutationSignInWithEmail } from '../../queries/auth';

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
