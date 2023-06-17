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
  gap: 20px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
`;

export const MovieImage = styled.div<{ imagePath?: string }>`
  width: 290px;
  height: 390px;
  border-radius: 5px;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
`;

export const MovieTitle = styled.h3`
  font-size: 1.3rem;
  font-family: 'EF_jejudoldam';
`;
export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MovieContents = styled.div`
  padding: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  p {
    font-family: 'IM_Hyemin-Bold';
  }
  overflow: auto;
`;

export const MovieDetailImage = styled.div<{ imagePath?: string }>`
  width: 100%;
  height: 50%;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
`;

export const MovieDetailTitle = styled.h2`
  font-size: 30px;
`;
