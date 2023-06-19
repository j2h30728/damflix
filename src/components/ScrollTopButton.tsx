import { SVGAttributes } from 'react';
import styled from 'styled-components';

import scrollTolTop from '../utils/scrollTolTop';
import { Svg } from './Icons';

const ScrollTopButton = (props: SVGAttributes<SVGElement>) => {
  return (
    <ScrollTopButtonIcon
      aria-hidden="true"
      fill="currentColor"
      onClick={scrollTolTop}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/Svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
        fillRule="evenodd"
      ></path>
    </ScrollTopButtonIcon>
  );
};

export default ScrollTopButton;

const ScrollTopButtonIcon = styled(Svg)`
  position: fixed;
  right: 60px;
  bottom: 4%;
  background-color: ${props => props.theme.color.text};
  color: ${props => props.theme.color.background};
  padding: 13px;
`;
