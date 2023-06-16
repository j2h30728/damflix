/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ModalControlContextType {
  handleCloseModal: () => void;
  handleMovieClick: () => void;
  isOpenModal: boolean;
}

export const ModalControlContext = createContext<ModalControlContextType>({
  handleCloseModal: () => {},
  handleMovieClick: () => {},
  isOpenModal: false,
});

export const ModalControlContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleMovieClick = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
    navigate(-1);
  };

  return (
    <ModalControlContext.Provider value={{ handleCloseModal, handleMovieClick, isOpenModal }}>
      {children}
    </ModalControlContext.Provider>
  );
};
