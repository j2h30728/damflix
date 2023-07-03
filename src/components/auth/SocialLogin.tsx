import React from 'react';

import { AuthContainer, AuthSocialButton } from '../../pages/Auth/auth.styled';
import { GitHubIcon, GoogleIcon } from './Icons';

const SocialLogin = ({
  onClickSocialAuthButton,
}: {
  onClickSocialAuthButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <AuthContainer>
      <AuthSocialButton name="google" onClick={onClickSocialAuthButton}>
        <span>Continue with google</span>
        <GoogleIcon width={20} />
      </AuthSocialButton>
      <AuthSocialButton name="github" onClick={onClickSocialAuthButton}>
        <span>Continue with github</span>
        <GitHubIcon width={20} />
      </AuthSocialButton>
    </AuthContainer>
  );
};

export default SocialLogin;
