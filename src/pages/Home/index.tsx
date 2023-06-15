import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

import { GetMoviesResponseData, GetResponse } from "../../types/movies";
import { ImageFormat, makeImagePath } from "../../utils/makeImagePath";

const Home = () => {
  const {
    data: { results: popularMovies },
  } = useLoaderData() as GetResponse<GetMoviesResponseData>;
  console.log(popularMovies);

  return (
    <>
      <h2>Popular</h2>
      {popularMovies.map(movie => (
        <MovieContainer key={movie.id}>
          <MovieImage
            imagePath={makeImagePath(
              movie.poster_path,
              ImageFormat.W500
            )}></MovieImage>
          <p>{movie.title}</p>
        </MovieContainer>
      ))}
    </>
  );
};

export default Home;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieImage = styled.div<{ imagePath: string }>`
  width: 300px;
  height: 500px;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
`;
