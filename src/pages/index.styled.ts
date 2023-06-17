import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const MovieContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const MovieImage = styled.div<{ imagePath?: string }>`
  width: 250px;
  height: 350px;
  border-radius: 5px;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
`;

export const MovieTitle = styled.h3`
  font-size: 1.3rem;
  font-family: 'EF_jejudoldam';
`;
