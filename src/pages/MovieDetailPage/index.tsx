import { useParams } from 'react-router-dom';

import { Modal } from '../../components';
import { XMarkIcon as ModalCloseButton } from '../../components/ui/Icons';
import { useQueryMovieDetailData } from '../../hooks/movie/queries';
import useCloseModal from '../../hooks/useCloseModal';
import { ImageFormat, makeImagePath } from '../../utils/makeImagePath';
import { MovieContents, MovieDetailImage, MovieDetailTitle, MovieWrapper } from './styles';

const MovieDetail = () => {
  const { listType } = useParams();
  const { movieId } = useParams();
  const { data: movieDetailData } = useQueryMovieDetailData(movieId);

  const handleCloseModal = useCloseModal();

  return (
    <Modal layoutId={`${listType}${movieDetailData?.id}`} onClose={handleCloseModal}>
      <MovieWrapper>
        <ModalCloseButton onClick={handleCloseModal} />
        <MovieDetailImage src={makeImagePath(movieDetailData?.backdrop_path, ImageFormat.ORIGINAL)}></MovieDetailImage>
        <MovieContents>
          <MovieDetailTitle>{movieDetailData?.original_title}</MovieDetailTitle>
          <span>{movieDetailData?.overview}</span>
          <span>Budget: ${movieDetailData?.budget.toLocaleString()}</span>
          <span>Revenue: ${movieDetailData?.revenue.toLocaleString()}</span>
          <span>Runtime: {movieDetailData?.runtime}minutes</span>
          <span>Rating: {movieDetailData?.vote_average}</span>
          {movieDetailData?.homepage && (
            <p>
              Homepage: <a href={`${movieDetailData?.homepage}`}>{movieDetailData?.homepage}</a>
            </p>
          )}
        </MovieContents>
      </MovieWrapper>
    </Modal>
  );
};

export default MovieDetail;
