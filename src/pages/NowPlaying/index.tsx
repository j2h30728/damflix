import { useLoaderData } from 'react-router-dom';

import { GetMoviesResponseData } from '../../types/movies';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from '../index.styled';

const NowPlaying = () => {
  const { results: nowPlayingMovies } = useLoaderData() as GetMoviesResponseData;

  return (
    <>
      <MoviesWrapper>
        {nowPlayingMovies.map(movie => (
          <MovieContainer key={movie.id} to={`movie/${movie.id}`}>
            <MovieImage imagePath={makeImagePath(movie.poster_path, ImageFormat.W500)}></MovieImage>
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieContainer>
        ))}
      </MoviesWrapper>
    </>
  );
};

export default NowPlaying;
