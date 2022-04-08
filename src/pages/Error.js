import React from 'react';
import '../styles/error.scss';
import img from '../assets/404.svg';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <aside className='error'>
      <div className='container'>
        <img src={img} alt='error' />
        <Link className='btn error-btn' to='/'>
          Go Home
        </Link>
      </div>
    </aside>
  );
};

export default Error;
