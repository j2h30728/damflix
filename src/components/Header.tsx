import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { DarkModeContext } from '../contexts/DarkModeContext';
import { MovieListType } from '../types/movies';

const Header = () => {
  const { handleChangeDarkMode, isDark } = useContext(DarkModeContext);
  const { pathname } = useLocation();
  return (
    <HeaderContainer>
      <Logo>DAMFLIX</Logo>
      <LinkContainer>
        <LinkAndCircle>
          <Link state={MovieListType.POPULAR} to={MovieListType.POPULAR}>
            POPULAR
          </Link>
          {pathname.slice(1) === MovieListType.POPULAR && <Circle layoutId="link" />}
        </LinkAndCircle>
        <LinkAndCircle>
          <Link state={MovieListType.UPCOMING} to={MovieListType.UPCOMING}>
            COMING SOON
          </Link>
          {pathname.includes(MovieListType.UPCOMING) && <Circle layoutId="link" />}
        </LinkAndCircle>

        <LinkAndCircle>
          <Link state={MovieListType.NOW_PLAYING} to={MovieListType.NOW_PLAYING}>
            NOW PLAYING
          </Link>
          {pathname.includes(MovieListType.NOW_PLAYING) && <Circle layoutId="link" />}
        </LinkAndCircle>
      </LinkContainer>

      <DarkModeButton onClick={handleChangeDarkMode}>{isDark ? 'DARK' : 'LIGHT'}</DarkModeButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: 4fr 5fr 1fr;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 85px;
  background-color: ${props => props.theme.color.secondary};
`;
const Logo = styled.div`
  color: ${props => props.theme.color.point};
  font-size: 40px;
  font-family: 'EF_jejudoldam';
  letter-spacing: -5px;
  text-shadow: -2px -2px 0 ${props => props.theme.color.primary}, 2px -2px 0 ${props => props.theme.color.primary},
    -2px 2px 0 ${props => props.theme.color.primary}, 2px 2px 0 ${props => props.theme.color.primary};
`;

const DarkModeButton = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 50%;
  width: fit-content;
  justify-self: end;
  margin-right: 30px;
  background-color: ${props => props.theme.color.neutral};
  color: ${props => props.theme.color.text};
  transition: 0.2s ease;
  :hover {
    scale: 1.2;
  }
  :active {
    scale: 0.9;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 5px;
  bottom: -18px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: red;
`;
const LinkAndCircle = styled.div`
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
