import { Outlet, useMatch, useParams } from 'react-router-dom';

import useControlModal from '../../../hooks/useControlModal';
import { useQueryMovieDetailData, useQueryMoviesData } from '../../queries/movies';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from './styles';

const MovieList = () => {
  const { listType, movieId } = useParams();
  const { data: popularMoviesData } = useQueryMoviesData(listType);
  const { isFetched } = useQueryMovieDetailData(movieId);

  const { handleOpenMovie, useCheckModalOnOff } = useControlModal();

  const isListPagePathnameMatch = useMatch(ROUTE_PATH.HOME);
  useCheckModalOnOff(!!isListPagePathnameMatch);

  return (
    <>
      <MoviesWrapper animate="visible" initial="hidden" key={listType} variants={containerVariants}>
        {popularMoviesData?.results?.map(movie => (
          <MovieContainer
            key={`${listType}${movie.id}`}
            layoutId={`${listType}${movie.id}`}
            onClick={() => handleOpenMovie(isFetched)}
            to={`movie/${movie.id}`}
            variants={itemVariants}
          >
            <MovieImage imagePath={makeImagePath(movie.poster_path, ImageFormat.W500)}></MovieImage>
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieContainer>
        ))}
      </MoviesWrapper>

      <Outlet context={{ listType: `${listType}` }} />
    </>
  );
};

export default MovieList;

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.15,
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
