import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import Modal from '../../components/Modal';
import { ModalControlContext } from '../../contexts/ModalControlContext';
import { useQueryMovieDetailData, useQueryMoviesData } from '../../queries/movies';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContainer, MovieImage, MovieTitle, MoviesWrapper } from '../index.styled';

const Home = () => {
  const { data: popularMoviesData } = useQueryMoviesData();
  const { movieId } = useParams();
  const { data: movieDetailData } = useQueryMovieDetailData(movieId);

  const { handleCloseModal, handleMovieClick, isOpenModal } = useContext(ModalControlContext);
  return (
    <>
      <MoviesWrapper>
        {popularMoviesData?.results?.map(movie => (
          <MovieContainer key={movie.id} onClick={handleMovieClick} to={`movie/${movie.id}`}>
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

export default Home;
