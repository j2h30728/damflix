import { AnimatePresence } from 'framer-motion';
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
      <AnimatePresence>
        <MoviesWrapper animate="visible" initial="hidden" variants={containerVariants}>
          {nowPlayingMoviesData?.results?.map(movie => (
            <MovieContainer
              key={movie.id}
              layoutId={`${movie.id}`}
              onClick={() => handleOpenMovie(isFetched)}
              to={`${movie.id}`}
              variants={itemVariants}
            >
              <MovieImage imagePath={makeImagePath(movie.poster_path, ImageFormat.W500)}></MovieImage>
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieContainer>
          ))}
        </MoviesWrapper>
      </AnimatePresence>

      <Modal isOpen={isOpenModal} layoutId={`${movieDetailData?.id}`} onClose={handleCloseModal}>
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
const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
