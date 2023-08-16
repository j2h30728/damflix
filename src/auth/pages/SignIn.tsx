import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import ROUTE_PATH from '../../constants/route';
import { FormInput, SocialSignIn } from '../components';
import { ErrorMessage } from '../components/FormInput';
import { SOCIAL_SIGN_IN } from '../constants';
import { useSignIn, useSocialAuth } from '../hooks';
import { AnotherLink, Container, Form, FormButton, Navigator, Title } from './auth.styled';

type FormInput = Record<'email' | 'password', string>;

const SignIn = () => {
  const signInMutation = useSignIn();
  const { useGitHubAuth, useGoogleAuth } = useSocialAuth();
  const { error: googleAuthError, mutate: googleAuthSignInMutate } = useGoogleAuth();
  const { error: gitHubAuthError, mutate: gitHubAuthSignInMutate } = useGitHubAuth();

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<FormInput>({ mode: 'onBlur' });

  const onSubmit = ({ email, password }: FormInput) => {
    signInMutation.mutate({ email, password });
  };

  const handleClickSocialAuthButton = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.name === SOCIAL_SIGN_IN.GOOGLE) {
      googleAuthSignInMutate();
    }
    if (event.currentTarget.name === SOCIAL_SIGN_IN.GITHUB) {
      gitHubAuthSignInMutate();
    }
  };

  useEffect(() => {
    if (signInMutation.error) setError('root', { message: signInMutation.error.message });
    if (gitHubAuthError) setError('root', { message: gitHubAuthError.message });
    if (googleAuthError) setError('root', { message: googleAuthError.message });
  }, [signInMutation.error, setError, gitHubAuthError, googleAuthError]);

  return (
    <Container>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={{
            ...register('email', {
              pattern: { message: '이메일 형식으로 입력부탁드립니다.', value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ },
              required: '이메일을 입력해주세요.',
            }),
          }}
          errorMessage={errors.email?.message}
          id="email"
          placeholder="이메일을 입력해주세요."
          title="이메일"
          type="email"
        />
        <FormInput
          errorMessage={errors.password?.message}
          id="password"
          placeholder="비밀번호를 입력해주세요."
          register={{ ...register('password', { required: '비밀번호를 입력해주세요.' }) }}
          title="비밀번호"
          type="password"
        />
        <FormButton>로그인하기</FormButton>
      </Form>
      <AnotherLink>
        <span>계정이 없으신가요?</span>
        <Navigator to={`/${ROUTE_PATH.SIGN_UP}`}>회원가입</Navigator>
      </AnotherLink>
      <SocialSignIn onClickSocialAuthButton={handleClickSocialAuthButton} />
      <ErrorMessage>{errors.root?.message}</ErrorMessage>
    </Container>
  );
};

export default SignIn;
