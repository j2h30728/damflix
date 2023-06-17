/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ModalControlContextType {
  handleCloseModal: () => void;
  handleOpenMovie: (isFetched: boolean) => void;
  isOpenModal: boolean;
  useCheckModalOnOff: (isListPagePathnameMatch: boolean) => void;
}

export const ModalControlContext = createContext<ModalControlContextType>({
  handleCloseModal: () => {},
  handleOpenMovie: isFetched => {
    isFetched;
  },
  isOpenModal: false,
  useCheckModalOnOff: isListPagePathnameMatch => {
    isListPagePathnameMatch;
  },
});

export const ModalControlContextProvider = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <ModalControlContext.Provider value={{ handleCloseModal, handleOpenMovie, isOpenModal, useCheckModalOnOff }}>
      {children}
    </ModalControlContext.Provider>
  );
};
