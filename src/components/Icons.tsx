import { SVGAttributes } from 'react';
import styled from 'styled-components';

export const Svg = styled.svg`
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
  border-radius: 50px;
  cursor: pointer;
  padding: 5px;
  width: 30px;
`;

export const XMarkIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <XIcon aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
    </XIcon>
  );
};
const XIcon = styled(Svg)`
  position: absolute;
  right: 2%;
  top: 2%;
  transition: 0.2s ease;
  :hover {
    scale: 1.2;
  }
  :active {
    scale: 0.9;
  }
`;
