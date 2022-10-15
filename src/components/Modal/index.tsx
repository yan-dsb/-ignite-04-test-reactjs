import { ReactNode, useEffect, useRef, useState } from "react";
import ReactModal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  setIsOpen(): void;
  children: ReactNode;
}

export function Modal({ isOpen, setIsOpen, children }: ModalProps){
  const [modalStatus, setModalState] = useState(isOpen)

  const prevModalRef = useRef<boolean>();

  useEffect(() => {
    prevModalRef.current = isOpen;
  });

  const modalPreviousValue = prevModalRef.current ?? isOpen;

  useEffect(() => {
    if (modalPreviousValue !== isOpen) {
      console.log(isOpen)
      setModalState(isOpen)
    }
  }, [isOpen, modalPreviousValue]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
