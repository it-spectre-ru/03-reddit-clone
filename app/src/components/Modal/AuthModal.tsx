import { authModalState } from '@/src/atoms/authModalAtom';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Sign UP'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>modal body here</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
