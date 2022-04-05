import React from 'react';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import Notes from '../components/Notes';
import Title from '../components/Title';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Title />
      <Notes />
      <Modal />
    </>
  );
};

export default HomePage;
