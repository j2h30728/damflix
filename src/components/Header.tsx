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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;
