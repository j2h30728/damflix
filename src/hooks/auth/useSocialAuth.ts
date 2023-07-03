import { FirebaseError } from 'firebase/app';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { gitHubAuth, googleAuth } from '../../fbase';

const useSocialAuth = () => {
  const { logIn } = useContext(AuthContext);
  const socialLogin = async (socialName: string) => {
    try {
      if (socialName === 'github') {
        const response = await gitHubAuth();
        const accessToken = await response.user.getIdToken();
        if (response.user.email) {
          return logIn(accessToken);
        }
      }

      if (socialName === 'google') {
        const response = await googleAuth();
        const accessToken = await response.user.getIdToken();
        if (response.user.email) {
          return logIn(accessToken);
        }
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/account-exists-with-different-credential') {
          return `[ERROR] 이미 존재하는 이메일 입니다.`;
        }
        return error.message;
      }
    }
  };
  return socialLogin;
};
export default useSocialAuth;
