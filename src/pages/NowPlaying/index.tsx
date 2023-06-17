import { useContext } from 'react';
import { useMatch, useParams } from 'react-router-dom';

import Modal from '../../components/Modal';
import { ModalControlContext } from '../../contexts/ModalControlContext';
import { useQueryMovieDetailData, useQueryNowPlayingMoviesData } from '../../queries/movies';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from '../index.styled';

const NowPlaying = () => {
  const isListPagePathnameMatch = useMatch(ROUTE_PATH.NOW_PLAYING);

  const { data: nowPlayingMoviesData } = useQueryNowPlayingMoviesData();
  const { movieId } = useParams();
  const { data: movieDetailData } = useQueryMovieDetailData(movieId);

  const { handleCloseModal, handleOpenMovie, isOpenModal, useCheckModalOnOff } = useContext(ModalControlContext);
  useCheckModalOnOff(!!isListPagePathnameMatch);
  return (
    <>
      <MoviesWrapper>
        {nowPlayingMoviesData?.results?.map(movie => (
          <MovieContainer key={movie.id} onClick={handleOpenMovie} to={`${movie.id}`}>
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

export default NowPlaying;
