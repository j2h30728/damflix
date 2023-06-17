import { useMatch, useParams } from 'react-router-dom';

import useControlModal from '../../../hooks/useControlModal';
import Modal from '../../components/Modal';
import { useQueryMovieDetailData, useQueryUpComingMoviesData } from '../../queries/movies';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import {
  MovieContainer,
  MovieContents,
  MovieDetailImage,
  MovieDetailTitle,
  MovieImage,
  MovieTitle,
  MovieWrapper,
  MoviesWrapper,
} from '../index.styled';

const Upcoming = () => {
  const { data: nowPlayingMoviesData } = useQueryUpComingMoviesData();

  const { movieId } = useParams();
  const { data: movieDetailData, isFetched } = useQueryMovieDetailData(movieId);

  const { handleCloseModal, handleOpenMovie, isOpenModal, useCheckModalOnOff } = useControlModal();

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
        <MovieWrapper>
          <MovieDetailImage
            imagePath={makeImagePath(movieDetailData?.backdrop_path || '', ImageFormat.ORIGINAL)}
          ></MovieDetailImage>
          <MovieContents>
            <MovieDetailTitle>{movieDetailData?.original_title}</MovieDetailTitle>
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

export default Upcoming;
