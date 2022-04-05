import React from 'react';
import { useGlobalContext } from '../context';
import Note from './Note';
import '../styles/notes.scss';
import { MdAddCircle } from 'react-icons/md';

const Notes = () => {
  const { notes, openModal } = useGlobalContext();

  return (
    <>
      <article className='notes'>
        <div className='notes-center'>
          {notes.map((note) => {
            return <Note key={note.id} {...note}></Note>;
          })}
        </div>
        <div className='addMore note' onClick={openModal}>
          <MdAddCircle /> Add More Note
        </div>
      </article>
    </>
  );
};

export default Notes;
