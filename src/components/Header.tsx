import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DarkModeContext } from '../contexts/DarkModeContext';
import ROUTE_PATH from '../router/ROUTE_PATH';

const Header = () => {
  const { handleChangeDarkMode, isDark } = useContext(DarkModeContext);

  return (
    <HeaderContainer>
      <Logo>DAMFLIX</Logo>
      <LinkContainer>
        <Link to={ROUTE_PATH.HOME}>POPULAR</Link>
        <Link to={ROUTE_PATH.COMING_SOON}>COMING SOON</Link>
        <Link to={ROUTE_PATH.NOW_PLAYING}>NOW PLAYING</Link>
      </LinkContainer>
      <DarkModeButton onClick={handleChangeDarkMode}>{isDark ? 'DARK' : 'LIGHT'}</DarkModeButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.color.secondary};
`;
const Logo = styled.div`
  color: ${props => props.theme.color.point};
  font-size: 50px;
`;

const DarkModeButton = styled.button`
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;
