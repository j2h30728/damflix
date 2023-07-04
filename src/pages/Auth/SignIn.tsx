import { useForm } from 'react-hook-form';

import { FormInput } from '../../components';
import { ErrorMessage } from '../../components/auth/FormInput';
import SocialLogin from '../../components/auth/SocialLogin';
import useAuth from '../../hooks/auth/useAuth';
import useSocialAuth from '../../hooks/auth/useSocialAuth';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { AnotherLink, Container, Form, FormButton, Navigator, Title } from './auth.styled';

type FormInput = Record<'email' | 'password', string>;

const SignIn = () => {
  const socialLogin = useSocialAuth();
  const { signInFireBaseWithEmail } = useAuth();
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<FormInput>();

  const onSubmit = async ({ email, password }: FormInput) => {
    const signInResponse = await signInFireBaseWithEmail(email, password);
    if (typeof signInResponse === 'string') {
      setError('root', { message: signInResponse });
      alert(signInResponse);
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
      <SocialLogin onClickSocialAuthButton={handleClickSocialAuthButton} />
      <ErrorMessage>{errors.root?.message}</ErrorMessage>
    </Container>
  );
};

export default SignIn;
