import React from 'react';

import { SocialSignInButton, SocialSignInContainer } from '../../pages/Auth/auth.styled';
import { GitHubIcon, GoogleIcon } from './Icons';

const SocialSignIn = ({
  onClickSocialAuthButton,
}: {
  onClickSocialAuthButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <SocialSignInContainer>
      <SocialSignInButton name="google" onClick={onClickSocialAuthButton}>
        <span>Continue with google</span>
        <GoogleIcon width={20} />
      </SocialSignInButton>
      <SocialSignInButton name="github" onClick={onClickSocialAuthButton}>
        <span>Continue with github</span>
        <GitHubIcon width={20} />
      </SocialSignInButton>
    </SocialSignInContainer>
  );
};

export default SocialSignIn;
