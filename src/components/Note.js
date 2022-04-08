import React from 'react';
import '../styles/note.scss';
import { MdPublic, MdPrivateConnectivity } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Note = ({ id, title, detail, createdAt, visibility }) => {
  return (
    <>
      <Link to={`/notes/${id}`}>
        <aside className='note'>
          <span className='created'>{createdAt}</span>
          <h3>{title}</h3>
          <p>
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
        </aside>
      </Link>
    </>
  );
};

export default Note;
