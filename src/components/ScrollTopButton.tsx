import { SVGAttributes } from 'react';
import styled from 'styled-components';

import { Svg } from './Icons';

const ScrollTopButton = (props: SVGAttributes<SVGElement>) => {
  const handleScrollTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  const ScrollTopButtonIcon = styled(Svg)`
    position: fixed;
    right: 60px;
    bottom: 4%;
    background-color: ${props => props.theme.color.text};
    color: ${props => props.theme.color.background};
    padding: 13px;
  `;
  return (
    <ScrollTopButtonIcon
      aria-hidden="true"
      fill="currentColor"
      onClick={handleScrollTop}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/Svg"
      {...props}
    >
      <path
        clip-rule="evenodd"
        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
        fill-rule="evenodd"
      ></path>
    </ScrollTopButtonIcon>
  );
};

export default ScrollTopButton;
