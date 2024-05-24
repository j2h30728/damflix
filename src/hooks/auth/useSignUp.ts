import { useNavigate } from 'react-router-dom';

import ROUTE_PATH from '../../constants/route';
import { useMutationSignUpWithEmail } from './mutations';

const useSignUp = () => {
  const navigate = useNavigate();
  const signUpMutation = useMutationSignUpWithEmail({
    onSuccess: () => navigate(ROUTE_PATH.ROOT),
  });

  return signUpMutation;
};

export default useSignUp;
