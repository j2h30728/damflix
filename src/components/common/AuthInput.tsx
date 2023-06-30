import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

interface AuthInputProps {
  errorMessage?: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  title: string;
  type: 'email' | 'password';
}

const AuthInput = ({ errorMessage, id, placeholder, register, title, type }: AuthInputProps) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <Input id={id} {...register} placeholder={placeholder} type={type} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};

export default AuthInput;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  border-radius: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  height: 10px;
  font-size: 15px;
  margin-left: 5px;
  margin-bottom: 10px;
  font-family: 'Pretendard-Regular';
`;
