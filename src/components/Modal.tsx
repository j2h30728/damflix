import { AnimatePresence, motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  layoutId: string;
  onClose: () => void;
}

const Modal = ({ children, isOpen, layoutId, onClose }: ModalProps) => {
  const modalRoot = document.querySelector('#modal-root');

  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay onClick={onClose}>
          <ModalContent
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: 20 }}
            layoutId={layoutId}
            onClick={e => e.stopPropagation()}
            transition={{ duration: 0.3 }}
          >
            {children}
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>,
    modalRoot
  );
};
export default Modal;

const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled(motion.div)`
  background-color: ${props => props.theme.color.background};
  border-radius: 10px;
  width: 60%;
  height: 80%;
  overflow: hidden;
`;
