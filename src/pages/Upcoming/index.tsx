import { useContext } from 'react';
import { useMatch, useParams } from 'react-router-dom';

import Modal from '../../components/Modal';
import { ModalControlContext } from '../../contexts/ModalControlContext';
import { useQueryMovieDetailData, useQueryUpComingMoviesData } from '../../queries/movies';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from '../index.styled';

const Upcoming = () => {
  const { data: nowPlayingMoviesData } = useQueryUpComingMoviesData();

  const { movieId } = useParams();
  const { data: movieDetailData, isFetched } = useQueryMovieDetailData(movieId);

  const { handleCloseModal, handleOpenMovie, isOpenModal, useCheckModalOnOff } = useContext(ModalControlContext);

  const isListPagePathnameMatch = useMatch(ROUTE_PATH.COMING_SOON);
  useCheckModalOnOff(!!isListPagePathnameMatch);
  return (
    <>
      <MoviesWrapper>
        {nowPlayingMoviesData?.results?.map(movie => (
          <MovieContainer key={movie.id} onClick={() => handleOpenMovie(isFetched)} to={`${movie.id}`}>
            <MovieImage imagePath={makeImagePath(movie.poster_path, ImageFormat.W500)}></MovieImage>
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieContainer>
        ))}
      </MoviesWrapper>

      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <MoviesWrapper>
          <MovieImage
            imagePath={makeImagePath(movieDetailData?.backdrop_path || '', ImageFormat.ORIGINAL)}
          ></MovieImage>
          <h2>{movieDetailData?.original_title}</h2>
          <p>{movieDetailData?.overview}</p>
          <p>Budget: ${movieDetailData?.budget}</p>
          <p>Revenue: ${movieDetailData?.revenue}</p>
          <p>Runtime: {movieDetailData?.runtime}minutes</p>
          <p>Rating: {movieDetailData?.vote_average}</p>
          <p>Homepage: {movieDetailData?.homepage}</p>
        </MoviesWrapper>
      </Modal>
    </>
  );
};

export default Upcoming;
