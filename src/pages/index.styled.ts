import styled from 'styled-components';

export const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieImage = styled.div<{ imagePath: string }>`
  width: 300px;
  height: 500px;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
`;

export const MovieTitle = styled.h3`
  font-size: 40px;
`;
