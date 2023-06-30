import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 35px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 450px;
`;

export const AuthButton = styled.button`
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${props => props.theme.color.neutral};
  color: ${props => props.theme.color.text};
  border: 1px solid ${props => props.theme.color.text};
  :hover {
    background-color: ${props => props.theme.color.text};
    color: ${props => props.theme.color.background};
  }
  :active {
    color: ${props => props.theme.color.point};
  }
`;

export const Navigator = styled(Link)`
  :hover {
    color: ${props => props.theme.color.point};
  }
  :active {
    color: ${props => props.theme.color.neutral};
  }
`;

export const AnotherLink = styled.div`
  display: flex;
  gap: 20px;
`;
