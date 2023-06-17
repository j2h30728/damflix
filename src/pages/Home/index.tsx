import { useContext } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../../components/Modal';
import { ModalControlContext } from '../../contexts/ModalControlContext';
import { useQueryMovieDetailData, useQueryMoviesData } from '../../queries/movies';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from '../index.styled';

const Home = () => {
  const { data: popularMoviesData } = useQueryMoviesData();

  const { movieId } = useParams();
  const { data: movieDetailData, isFetched } = useQueryMovieDetailData(movieId);

  const { handleCloseModal, handleOpenMovie, isOpenModal, useCheckModalOnOff } = useContext(ModalControlContext);
  const isListPagePathnameMatch = useMatch(ROUTE_PATH.HOME);
  useCheckModalOnOff(!!isListPagePathnameMatch);
  return (
    <>
      <MoviesWrapper>
        {popularMoviesData?.results?.map(movie => (
          <MovieContainer key={movie.id} onClick={() => handleOpenMovie(isFetched)} to={`${movie.id}`}>
            <MovieImage imagePath={makeImagePath(movie.poster_path, ImageFormat.W500)}></MovieImage>
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieContainer>
        ))}
      </MoviesWrapper>

      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <MovieWrapper>
          <MovieDeatilImage
            imagePath={makeImagePath(movieDetailData?.backdrop_path || '', ImageFormat.ORIGINAL)}
          ></MovieDeatilImage>
          <MovieContents>
            <h2>{movieDetailData?.original_title}</h2>
            <p>{movieDetailData?.overview}</p>
            <p>Budget: ${movieDetailData?.budget}</p>
            <p>Revenue: ${movieDetailData?.revenue}</p>
            <p>Runtime: {movieDetailData?.runtime}minutes</p>
            <p>Rating: {movieDetailData?.vote_average}</p>
            <p>Homepage: {movieDetailData?.homepage}</p>
          </MovieContents>
        </MovieWrapper>
      </Modal>
    </>
  );
};

export default Home;

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MovieContents = styled.div``;

const MovieDeatilImage = styled.div<{ imagePath?: string }>`
  width: 100%;
  height: 50%;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
`;
