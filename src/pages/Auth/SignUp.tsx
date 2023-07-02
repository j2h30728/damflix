import { FirebaseError } from 'firebase/app';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AuthInput } from '../../components';
import { signUpWithEmail } from '../../fbase';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { AnotherLink, AuthButton, AuthForm, Container, Navigator, Title } from './auth.styled';

type AuthInput = Record<'email' | 'password' | 'passwordConform', string>;

const SignUp = () => {
  const navigate = useNavigate();
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
    try {
      const user = await signUpWithEmail(email, password);
      navigate('/');
      alert(`${user.email}님. 회원가입 되었습니다!`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        alert(`[ERROR]${error.message}\n이메일 또는 비밀번호 확인부탁드립니다.`);
        console.log(error.message);
      }
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
    </Container>
  );
};

export default SignUp;
