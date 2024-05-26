import { Outlet, useParams } from 'react-router-dom';

import { Spinner } from '../../components';
import useLoadMoreInfiniteScroll from '../../hooks/movie/useLoadMoreInfiniteScroll';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { FetchingNextPage, ListContainer, MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from './styles';

const MovieList = () => {
  const { listType } = useParams();
  const { hasNextPage, isFetching, isFetchingNextPage, movieListData, ref } = useLoadMoreInfiniteScroll(listType);

  return (
    <ListContainer>
      <MoviesWrapper animate="visible" initial="hidden" key={listType} variants={containerVariants}>
        {movieListData?.map(movie => (
          <MovieContainer
            key={`${listType}${movie.id}`}
            layoutId={`${listType}${movie.id}`}
            to={`movie/${movie.id}`}
            variants={itemVariants}
            whileHover="hover"
          >
            <MovieImage imagePath={makeImagePath(movie.poster_path, ImageFormat.W300)} whileHover="hover"></MovieImage>
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieContainer>
        ))}
      </MoviesWrapper>
      <FetchingNextPage ref={ref}>
        {isFetching && isFetchingNextPage && hasNextPage ? <Spinner size={50} /> : null}
      </FetchingNextPage>
      <Outlet />
    </ListContainer>
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
  hover: {
    scale: 1.1,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
