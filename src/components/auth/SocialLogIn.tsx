import React from 'react';

import { SocialLoginButton, SocialLoginContainer } from '../../pages/Auth/auth.styled';
import { GitHubIcon, GoogleIcon } from './Icons';

const SocialLogin = ({
  onClickSocialAuthButton,
}: {
  onClickSocialAuthButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <SocialLoginContainer>
      <SocialLoginButton name="google" onClick={onClickSocialAuthButton}>
        <span>Continue with google</span>
        <GoogleIcon width={20} />
      </SocialLoginButton>
      <SocialLoginButton name="github" onClick={onClickSocialAuthButton}>
        <span>Continue with github</span>
        <GitHubIcon width={20} />
      </SocialLoginButton>
    </SocialLoginContainer>
  );
};

export default SocialLogin;
