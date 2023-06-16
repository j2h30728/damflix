import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import { GetMovieDetailResponseData, GetResponse } from '../../types/movies';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieImage } from '../index.styled';

const MovieDetail = () => {
  const { data: movie } = useLoaderData() as GetResponse<GetMovieDetailResponseData>;
  console.log(movie);

  return (
    <MovieWrapper>
      <MovieImage imagePath={makeImagePath(movie.backdrop_path, ImageFormat.ORIGINAL)}></MovieImage>
      <h2>{movie.original_title}</h2>
      <p>{movie.overview}</p>
      <p>Budget: ${movie.budget}</p>
      <p>Revenue: ${movie.revenue}</p>
      <p>Runtime: {movie.runtime}minutes</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Homepage: {movie.homepage}</p>
    </MovieWrapper>
  );
};

export default MovieDetail;

const MovieWrapper = styled.div`
  background-color: ${props => props.theme.color.background};
  width: 900px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;
