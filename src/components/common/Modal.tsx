import { forwardRef, useImperativeHandle, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

const Modal = forwardRef((props: ModalProps, ref) => {
  const [isOpen, setIsOpen] = useState(false); 

  
  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true),  
    closeModal: () => setIsOpen(false), 
  }));

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm transition-opacity" />
      <div className="fixed inset-0 z-10 max-w-screen-xl mx-auto overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              <FaTimes className="h-6 w-6" />
            </button>

            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
      
                  <Dialog.Title as="h3" className="text-lg font-semibold text-gray-900">
                    {props.title}
                  </Dialog.Title>
                  
                  <div className="mt-2">{props.children}</div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
});

export default Modal;
