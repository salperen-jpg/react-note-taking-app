import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import '../styles/singleNote.scss';
import { MdPublic, MdPrivateConnectivity } from 'react-icons/md';

const SingleNote = () => {
  const { notes } = useGlobalContext();
  const { id } = useParams();
  const note = notes.find((note) => note.id === parseInt(id));
  const { title, detail, createdAt, visibility } = note;
  return (
    <div className='single-note'>
      <div className='single-center'>
        <div className='single-header'>
          <span className='single-title'>{title}</span>
          <div className='single-created'>{createdAt}</div>
          <div className='single-btn-container'>
            <button type='button' className='delete-btn single-btn'>
              delete
            </button>
            <button type='button' className='edit-btn single-btn'>
              edit
            </button>
          </div>
        </div>
        <div className='single-down'>
          <div className='single-visibility'>
            <p className=''>
              {' '}
              {visibility ? (
                <span className='visibility green-color'>
                  <MdPublic className='visibility-icon' />
                  Public
                </span>
              ) : (
                <span className='visibility red-color'>
                  <MdPrivateConnectivity className='visibility-icon' />
                  Private
                </span>
              )}
            </p>
          </div>
          <p className='single-detail'>{detail}</p>
        </div>
        <Link to='/' className='btn single-back'>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default SingleNote;
