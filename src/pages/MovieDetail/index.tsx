import { useMatch, useOutletContext, useParams } from 'react-router-dom';

import useControlModal from '../../../hooks/useControlModal';
import Modal from '../../components/Modal';
import { useQueryMovieDetailData } from '../../queries/movies';
import ROUTE_PATH from '../../router/ROUTE_PATH';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContents, MovieDetailImage, MovieDetailTitle, MovieWrapper } from '../index.styled';

const MovieDetail = () => {
  const { listType } = useOutletContext() as { listType: string | undefined };
  const { movieId } = useParams();
  const { data: movieDetailData } = useQueryMovieDetailData(movieId);

  const { handleCloseModal, isOpenModal, useCheckModalOnOff } = useControlModal();

  const isListPagePathnameMatch = useMatch(ROUTE_PATH.HOME) !== null;
  useCheckModalOnOff(isListPagePathnameMatch);

  return (
    <Modal isOpen={isOpenModal} layoutId={`${listType}${movieDetailData?.id}`} onClose={handleCloseModal}>
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
          {movieDetailData?.homepage && (
            <p>
              Homepage: <a href={`${movieDetailData?.homepage}`}>이동하기</a>
            </p>
          )}
        </MovieContents>
      </MovieWrapper>
    </Modal>
  );
};

export default MovieDetail;
