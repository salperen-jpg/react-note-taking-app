import React from 'react';
import { BiNote } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import '../styles/navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='left-side'>
          <div className='logo-container'>
            <BiNote className='logo' />
          </div>
          <h4>NOTE</h4>
        </div>
        {/* AUTHORIZATION LATER */}
        <div>
          <BsSun className='theme-icon' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
