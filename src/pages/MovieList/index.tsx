import { Outlet, useParams } from 'react-router-dom';

import { useQueryMoviesData } from '../../queries/movies';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from './styles';

const MovieList = () => {
  const { listType } = useParams();
  const { data: popularMoviesData } = useQueryMoviesData(listType);

  return (
    <>
      <MoviesWrapper animate="visible" initial="hidden" key={listType} variants={containerVariants}>
        {popularMoviesData?.results?.map(movie => (
          <MovieContainer
            key={`${listType}${movie.id}`}
            layoutId={`${listType}${movie.id}`}
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
