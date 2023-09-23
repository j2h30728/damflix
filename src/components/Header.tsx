import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import useUser from '../auth/hooks/useUser';
import ROUTE_PATH from '../constants/route';
import useDarkMode, { DARK_MODE } from '../hooks/useDarkMode';
import { MovieListType } from '../movies/types';
import scrollTolTop from '../utils/scrollTolTop';

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

  return (
    <HeaderContainer>
      <Logo to={`/`}>DAMFLIX</Logo>
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
      {isLoggedIn ? (
        <LogOutButton onClick={handleLogout}>로그아웃</LogOutButton>
      ) : (
        <div>
          <Navigator to={`/${ROUTE_PATH.SIGN_IN}`}>로그인</Navigator>/
          <Navigator to={`/${ROUTE_PATH.SIGN_UP}`}>회원가입</Navigator>
        </div>
      )}
      <DarkModeButton onClick={handleToggleDarkMode}>
        {currentThemeMode === DARK_MODE.DARK ? DARK_MODE.LIGHT : DARK_MODE.DARK}
      </DarkModeButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  z-index: 1;
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 140px;
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
`;

const Navigator = styled(Link)`
  :hover {
    color: ${props => props.theme.color.point};
  }
  :active {
    color: ${props => props.theme.color.neutral};
  }
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
const LogOutButton = styled.div``;
