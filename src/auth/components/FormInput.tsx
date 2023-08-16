import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

interface FormInputProps {
  errorMessage?: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  title: string;
  type: 'email' | 'password';
}

const FormInput = ({ errorMessage, id, placeholder, register, title, type }: FormInputProps) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <Input id={id} {...register} placeholder={placeholder} type={type} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};

export default FormInput;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  border-radius: 10px;
`;

export const ErrorMessage = styled.p`
  width: 400px;
  color: red;
  height: 10px;
  font-size: 15px;
  margin-left: 5px;
  margin-bottom: 10px;
  font-family: 'Pretendard-Regular';
`;
