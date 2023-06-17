import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useControlModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();
  const handleOpenMovie = (isFetched: boolean) => {
    if (isFetched) setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
    navigate(-1);
  };

  const useCheckModalOnOff = (isListPagePathnameMatch: boolean) => {
    useEffect(() => {
      isListPagePathnameMatch ? setIsOpenModal(false) : setIsOpenModal(true);
    }, [isListPagePathnameMatch]);
  };

  return { handleCloseModal, handleOpenMovie, isOpenModal, useCheckModalOnOff };
};

export default useControlModal;
