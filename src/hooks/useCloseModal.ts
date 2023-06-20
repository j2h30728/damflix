import { useLocation, useNavigate } from 'react-router-dom';

const useCloseModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseModal = () => {
    if (location.key === 'default') {
      navigate('/', { replace: true });
    } else {
      navigate(-1);
    }
  };
  return handleCloseModal;
};

export default useCloseModal;
