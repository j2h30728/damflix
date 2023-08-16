import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const MovieContainer = styled(motion(Link))`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  width: 380px;
`;

export const MovieImage = styled(motion.div)<{ imagePath?: string }>`
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
  height: 30px;
`;

export const FetchingNextPage = styled.div`
  margin: 20px 0;
`;
