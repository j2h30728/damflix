import { FirebaseError } from 'firebase/app';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { signInWithEmail, signUpWithEmail } from '../../fbase';
import ROUTE_PATH from '../../router/ROUTE_PATH';

const useAuth = () => {
  const navigate = useNavigate();
  const { logIn } = useContext(AuthContext);

  const signUpFireBasWitheEmail = async (email: string, password: string) => {
    try {
      await signUpWithEmail(email, password);
      return navigate(`/${ROUTE_PATH.SIGN_IN}`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          return '[ERROR] 이미 존재하는 이메일 입니다.';
        }
        return `[ERROR] 이메일 또는 비밀번호 확인부탁드립니다.`;
      }
    }
  };
  const signInFireBaseWithEmail = async (email: string, password: string) => {
    try {
      const response = await signInWithEmail(email, password);
      const accessToken = await response.user.getIdToken();
      return logIn(accessToken);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          return '[ERROR] 이미 존재하는 이메일 입니다.';
        }
        return `[ERROR] 이메일 또는 비밀번호 확인부탁드립니다.`;
      }
    }
  };
  return { signInFireBaseWithEmail, signUpFireBasWitheEmail };
};

export default useAuth;
