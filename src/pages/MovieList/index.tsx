import { Outlet, useParams } from 'react-router-dom';

import { Spinner } from '../../components';
import useLoadMoreInfiniteScroll from '../../hooks/useLoadMoreInfiniteScroll';
import { useQueryMoviesData } from '../../queries/movies';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { FetchingNextPage, MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from './styles';

const MovieList = () => {
  const { listType } = useParams();
  const {
    data: movieListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useQueryMoviesData(listType);
  const { ref } = useLoadMoreInfiniteScroll(fetchNextPage);

  const movieListArray = movieListData?.pages?.flatMap(page => page.results);
  return (
    <>
      <MoviesWrapper animate="visible" initial="hidden" key={listType} variants={containerVariants}>
        {movieListArray?.map(movie => (
          <MovieContainer
            key={`${listType}${movie.id}`}
            layoutId={`${listType}${movie.id}`}
            to={`movie/${movie.id}`}
            variants={itemVariants}
          >
            <MovieImage
              imagePath={makeImagePath(movie.poster_path, ImageFormat.W500)}
              variants={imageVariants}
              whileHover="hover"
            ></MovieImage>
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieContainer>
        ))}
      </MoviesWrapper>
      <FetchingNextPage ref={ref}>
        {isFetching && isFetchingNextPage && hasNextPage ? <Spinner size={50} /> : null}
      </FetchingNextPage>
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
const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};
