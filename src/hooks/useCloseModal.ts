import { useNavigate } from 'react-router-dom';

const useCloseModal = () => {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate(-1);
  };
  return handleCloseModal;
};

export default useCloseModal;
