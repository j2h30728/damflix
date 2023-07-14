import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { useMutationSignInWithEmail } from '../../queries/auth';

const useSignIn = () => {
  const { logIn } = useContext(AuthContext);

  const signInMutation = useMutationSignInWithEmail({
    onSuccess: async responseData => {
      const token = await responseData.user.getIdToken();
      logIn(token);
    },
  });

  return signInMutation;
};

export default useSignIn;
