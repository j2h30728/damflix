import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesWrapper = styled(motion.div)`
  display: grid;
  padding: 0 20px;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  place-items: center;
`;

export const MovieContainer = styled(motion(Link))`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  width: 220px;
`;

export const MovieImage = styled(motion.div)<{ imagePath?: string }>`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
`;

export const MovieTitle = styled.h3`
  font-size: 1.3rem;
  font-family: 'EF_jejudoldam';
  height: 30px;
`;

export const FetchingNextPage = styled.div`
  margin: 20px 0;
`;

export const ListContainer = styled.div`
  width: 100vw;
`;
