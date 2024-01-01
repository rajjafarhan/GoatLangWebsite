import React from 'react';
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute bg-gray-800 bg-opacity-50 inset-0" ></div>
      

      <div className="bg-white p-4  z-10 rounded-md shadow-md w-[90%] lg:w-[50%] md:w-[50%] sm:w-[70%]  ">
      <RxCross2  onClick={onClose} className="text-xl float-right cursor-pointer text-teal-700 font-bold" />
        {children}
        
      </div>
    </div>
  );
};

export default Modal;
