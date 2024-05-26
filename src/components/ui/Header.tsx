import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ROUTE_PATH from '../../constants/route';
import useUser from '../../hooks/auth/useUser';
import useDarkMode, { DARK_MODE } from '../../hooks/useDarkMode';
import { media } from '../../styles/media';
import { MovieListType } from '../../types/movie';
import scrollTolTop from '../../utils/scrollTolTop';

const Header = () => {
  const { handleToggleDarkMode, localStorageValue: currentThemeMode } = useDarkMode();

  const { isLoggedIn, logOut } = useUser();
  const handleLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      logOut();
    }
  };
  const { pathname } = useLocation();
  const isPopularType = pathname.slice(1) === MovieListType.POPULAR || pathname.slice(1, 6) === 'movie';
  const isUpcomingType = pathname.includes(MovieListType.UPCOMING);
  const isNowPlayingType = pathname.match(MovieListType.NOW_PLAYING);

  const NavigatorData = [
    { condition: isPopularType, navigate: MovieListType.POPULAR, text: 'POPULAR' },
    { condition: isUpcomingType, navigate: MovieListType.UPCOMING, text: 'COMING SOON' },
    { condition: isNowPlayingType, navigate: MovieListType.NOW_PLAYING, text: 'NOW PLAYING' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HeaderContainer>
      <Logo to={`/`}>DAM</Logo>
      <LinkContainer>
        {NavigatorData.map(navigator => (
          <LinkAndCircle key={navigator.navigate} onClick={scrollTolTop}>
            <Navigator state={navigator.condition} to={navigator.navigate}>
              {navigator.text}
            </Navigator>
            {navigator.condition && <Circle layoutId="link" />}
          </LinkAndCircle>
        ))}
      </LinkContainer>
      <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
      <MenuList $isOpen={isMenuOpen}>
        {isLoggedIn ? (
          <Navigator as="button" onClick={handleLogout}>
            로그아웃
          </Navigator>
        ) : (
          <>
            <Navigator to={`/${ROUTE_PATH.SIGN_IN}`}>로그인</Navigator>/
            <Navigator to={`/${ROUTE_PATH.SIGN_UP}`}>회원가입</Navigator>
          </>
        )}
        <DarkModeButton onClick={handleToggleDarkMode}>
          {currentThemeMode === DARK_MODE.DARK ? DARK_MODE.LIGHT : DARK_MODE.DARK}
        </DarkModeButton>
      </MenuList>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 85px;
  background-color: ${props => props.theme.color.secondary};
`;
const Logo = styled(Link)`
  color: ${props => props.theme.color.point};
  font-size: 40px;
  font-family: 'EF_jejudoldam';
  letter-spacing: -5px;
  text-shadow: -2px -2px 0 ${props => props.theme.color.primary}, 2px -2px 0 ${props => props.theme.color.primary},
    -2px 2px 0 ${props => props.theme.color.primary}, 2px 2px 0 ${props => props.theme.color.primary};

  ${media.medium`
  font-size: 30px`}
`;

const Navigator = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.color.text};
  :hover {
    color: ${props => props.theme.color.point};
  }
  :active {
    color: ${props => props.theme.color.neutral};
  }
  ${media.medium`
  font-size: 13px`}
`;

const DarkModeButton = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 50%;
  width: fit-content;
  background-color: ${props => props.theme.color.neutral};
  color: ${props => props.theme.color.text};
  transition: 0.2s ease;
  :hover {
    scale: 1.2;
  }
  :active {
    scale: 0.9;
  }
  ${media.medium`
  font-size: 13px`}
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
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
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};

  ${media.large`
    display:block;
    
  `};
`;
const MenuList = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 20px;

  ${props => media.large`
    ${css`
      display: ${props.$isOpen ? 'flex' : 'none'};
      position: absolute;
      z-index: 30;
      right: 20px;
      top: 80px;
      width: fit-content;
      padding: 20px 20px;
      background-color: ${props.theme.color.secondary};
      border-radius: 10px;
      flex-direction: column;
      align-items: center;
      border: 1px solid ${props.theme.color.text};
    `}
  `}
`;
