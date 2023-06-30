import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { AuthInput } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
import { signInWithEmail } from '../../fbase';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { AnotherLink, AuthButton, AuthForm, Container, Navigator, Title } from './auth.styled';

type AuthInput = Record<'email' | 'password', string>;

const SignIn = () => {
  const { logIn } = useContext(AuthContext);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<AuthInput>({ defaultValues: { email: '', password: '' } });

  const onSubmit = async ({ email, password }: AuthInput) => {
    try {
      const response = await signInWithEmail(email, password);
      const accessToken = await response.user.getIdToken();
      alert(`${response.user.email}님. 반갑습니다!`);
      logIn(accessToken);
    } catch (error) {
      console.log(error);
      alert('이메일 또는 비밀번호 확인부탁드립니다.');
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
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
          errorMessage={errors.password?.message}
          id="password"
          placeholder="비밀번호를 입력해주세요."
          register={{ ...register('password', { required: '비밀번호를 입력해주세요.' }) }}
          title="비밀번호"
          type="password"
        />
        <AuthButton>로그인하기</AuthButton>
      </AuthForm>
      <AnotherLink>
        <span>계정이 없으신가요?</span>
        <Navigator to={`/${ROUTE_PATH.SIGN_UP}`}>회원가입</Navigator>
      </AnotherLink>
    </Container>
  );
};

export default SignIn;
