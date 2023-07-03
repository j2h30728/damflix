import React from 'react';

import { AuthContainer, AuthSocialButton } from '../../pages/Auth/auth.styled';
import { GitHubIcon, GoogleIcon } from './Icons';

const SocialLogin = ({
  OnClickSocialAuthButton,
}: {
  OnClickSocialAuthButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <AuthContainer>
      <AuthSocialButton name="google" onClick={OnClickSocialAuthButton}>
        <span>Continue with google</span>
        <GoogleIcon width={20} />
      </AuthSocialButton>
      <AuthSocialButton name="github" onClick={OnClickSocialAuthButton}>
        <span>Continue with github</span>
        <GitHubIcon width={20} />
      </AuthSocialButton>
    </AuthContainer>
  );
};

export default SocialLogin;
