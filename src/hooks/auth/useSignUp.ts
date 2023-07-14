import { useNavigate } from 'react-router-dom';

import { useMutationSignUpWithEmail } from '../../queries/auth';
import ROUTE_PATH from '../../router/ROUTE_PATH';

const useSignUp = () => {
  const navigate = useNavigate();
  const signUpMutation = useMutationSignUpWithEmail({
    onSuccess: () => navigate(ROUTE_PATH.ROOT),
  });

  return signUpMutation;
};

export default useSignUp;
