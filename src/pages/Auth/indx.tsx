import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

import ROUTE_PATH from '../../router/ROUTE_PATH';

type AuthInput = Record<'email' | 'password', string>;

const Auth = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === `/${ROUTE_PATH.LOG_IN}`;

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<AuthInput>({ defaultValues: { email: '', password: '' } });
  const onSubmit = (authInput: AuthInput) => {
    console.log(authInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">EMAIL</label>
        <input id="email" {...register('email', { required: '이메일을 입력해주세요.' })} placeholder="Email" />
        <p>{errors.email && errors.email?.message}</p>
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          {...register('password', { required: '비밀번호를 입력해주세요' })}
          placeholder="Password"
        />
        <p>{errors.password && errors.password?.message}</p>
        <button>{isLoginPage ? '로그인하기' : '가입하기'}</button>
      </form>
      {isLoginPage ? (
        <Link to={`/${ROUTE_PATH.CREATE_ACCOUNT}`}>계정이 없으신가요? 회원가입</Link>
      ) : (
        <Link to={`/${ROUTE_PATH.LOG_IN}`}>계정이 있으신가요? 로그인</Link>
      )}
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </>
  );
};

export default Auth;
