import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { FormInput } from '../../components';
import { ErrorMessage } from '../../components/auth/FormInput';
import SocialSignIn from '../../components/auth/SocialSignIn';
import { SOCIAL_SIGN_IN } from '../../constants/auth';
import ROUTE_PATH from '../../constants/route';
import { useSignUp, useSocialAuth } from '../../hooks';
import { AnotherLink, Container, Form, FormButton, Navigator, Title } from './auth.styled';

type FormInput = Record<'email' | 'password' | 'passwordConform', string>;

const SignUp = () => {
  const signUpMutation = useSignUp();
  const { useGitHubAuth, useGoogleAuth } = useSocialAuth();
  const { error: googleAuthError, mutate: googleAuthSignInMutate } = useGoogleAuth();
  const { error: gitHubAuthError, mutate: gitHubAuthSignInMutate } = useGitHubAuth();

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<FormInput>();

  const onSubmit = ({ email, password, passwordConform }: FormInput) => {
    if (password !== passwordConform) {
      return setError('passwordConform', { message: '동일한 비밀번호를 입력해주세요.' });
    }
    signUpMutation.mutate({ email, password });
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
    if (signUpMutation.error) setError('root', { message: signUpMutation.error.message });
    if (gitHubAuthError) setError('root', { message: gitHubAuthError.message });
    if (googleAuthError) setError('root', { message: googleAuthError.message });
  }, [signUpMutation.error, setError, gitHubAuthError, googleAuthError]);

  return (
    <Container>
      <Title>회원가입</Title>
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
          register={{
            ...register('password', {
              minLength: {
                message: '8자 이상 입력 부탁드립니다.',
                value: 8,
              },
              required: '비밀번호를 입력해주세요',
            }),
          }}
          errorMessage={errors.password?.message}
          id="password"
          placeholder="비밀번호를 입력해주세요."
          title="비밀번호"
          type="password"
        />
        <FormInput
          register={{
            ...register('passwordConform', {
              required: '비밀번호를 입력해주세요',
            }),
          }}
          errorMessage={errors.passwordConform?.message}
          id="passwordConform"
          placeholder="동일한 비밀번호 입력해주세요."
          title="비밀번호 확인"
          type="password"
        />
        <FormButton>가입하기</FormButton>
      </Form>
      <AnotherLink>
        <span>계정이 있으신가요?</span>
        <Navigator to={`/${ROUTE_PATH.SIGN_IN}`}>로그인</Navigator>
      </AnotherLink>
      <SocialSignIn onClickSocialAuthButton={handleClickSocialAuthButton} />
      <ErrorMessage>{errors.root?.message}</ErrorMessage>
    </Container>
  );
};

export default SignUp;
