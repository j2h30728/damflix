import { useLoaderData } from 'react-router-dom';

import { GetMoviesResponseData, GetResponse } from '../../types/movies';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from '../index.styled';

const NowPlaying = () => {
  const {
    data: { results: nowPlayingMovies },
  } = useLoaderData() as GetResponse<GetMoviesResponseData>;

  return (
    <>
      <MoviesWrapper>
        {nowPlayingMovies.map(movie => (
          <MovieContainer key={movie.id}>
            <MovieImage imagePath={makeImagePath(movie.poster_path, ImageFormat.W500)}></MovieImage>
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieContainer>
        ))}
      </MoviesWrapper>
    </>
  );
};

export default NowPlaying;
