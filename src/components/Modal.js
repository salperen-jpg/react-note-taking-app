import React from 'react';
import { useGlobalContext } from '../context';
import '../styles/modal.scss';
import { MdClose } from 'react-icons/md';
import NoteForm from './NoteForm';
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <section className={`${isModalOpen ? 'modal show' : 'modal'}`}>
      <div className=' btn-container'>
        <button type='button' className='btn modal-close' onClick={closeModal}>
          <MdClose />
        </button>
      </div>
      <NoteForm />
    </section>
  );
};

export default Modal;
