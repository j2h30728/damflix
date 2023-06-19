import { PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  size: number;
}

const Spinner = ({ size }: PropsWithChildren<SpinnerProps>) => {
  return (
    <SpinnerContainer>
      <Dot size={size} />
    </SpinnerContainer>
  );
};

export default Spinner;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div<SpinnerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ size }) => size / 10}px solid ${props => props.theme.color.point};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s infinite linear;
`;
