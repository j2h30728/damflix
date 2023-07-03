import { useForm } from 'react-hook-form';

import { AuthInput } from '../../components';
import { ErrorMessage } from '../../components/auth/AuthInput';
import SocialLogin from '../../components/auth/SocialLogin';
import useAuth from '../../hooks/auth/useAuth';
import useSocialAuth from '../../hooks/auth/useSocialAuth';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { AnotherLink, AuthButton, AuthForm, Container, Navigator, Title } from './auth.styled';

type AuthInput = Record<'email' | 'password' | 'passwordConform', string>;

const SignUp = () => {
  const socialLogin = useSocialAuth();
  const { signUpFireBasWitheEmail } = useAuth();
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<AuthInput>({ defaultValues: { email: '', password: '' } });

  const onSubmit = async ({ email, password, passwordConform }: AuthInput) => {
    if (password !== passwordConform) {
      return setError('passwordConform', { message: '동일한 비밀번호를 입력해주세요.' });
    }
    const signUpResponse = await signUpFireBasWitheEmail(email, password);
    if (typeof signUpResponse === 'string') {
      setError('root', { message: signUpResponse });
      alert(signUpResponse);
    } else {
      alert('회원가입 축하드립니다.');
    }
  };
  const handleClickSocialAuthButton = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const socialLoginResponse = await socialLogin(event.currentTarget.name);
    if (typeof socialLoginResponse === 'string') {
      setError('root', { message: socialLoginResponse });
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
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
        <AuthInput
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
        <AuthInput
          register={{
            ...register('passwordConform', {
              required: '비밀번호를 입력해주세요',
            }),
          }}
          errorMessage={errors.passwordConform?.message}
          id="password"
          placeholder="동일한 비밀번호 입력해주세요."
          title="비밀번호 확인"
          type="password"
        />
        <AuthButton>가입하기</AuthButton>
      </AuthForm>
      <AnotherLink>
        <span>계정이 있으신가요?</span>
        <Navigator to={`/${ROUTE_PATH.SIGN_IN}`}>로그인</Navigator>
      </AnotherLink>
      <SocialLogin onClickSocialAuthButton={handleClickSocialAuthButton} />
      <ErrorMessage>{errors.root?.message}</ErrorMessage>
    </Container>
  );
};

export default SignUp;
