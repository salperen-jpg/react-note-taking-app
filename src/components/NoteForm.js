import React from 'react';
import { useGlobalContext } from '../context';
import '../styles/noteForm.scss';

const NoteForm = () => {
  const {
    note: { title, detail, createdAt, importancy, visibility },
    handleChange,
    closeModal,
    handleSubmit,
  } = useGlobalContext();
  return (
    <section className='note-form-container'>
      <h3>New Note</h3>

      <form className='note-form' onSubmit={handleSubmit}>
        {/* TITLE */}
        <div className='form-action'>
          <label>Title</label>
          <input
            type='text'
            value={title}
            name='title'
            className='form-input'
            onChange={handleChange}
          />
        </div>
        {/* DETAIL */}
        <div className='form-action'>
          <label>Detail</label>
          <textarea
            cols='300'
            rows='5'
            value={detail}
            name='detail'
            onChange={handleChange}
          ></textarea>
        </div>
        {/* TITLE */}
        <div className='form-action'>
          <label>Importancy</label>
          <input
            type='text'
            value={importancy}
            name='importancy'
            className='form-input'
            onChange={handleChange}
          />
        </div>
        {/* created at */}
        <div className='form-action'>
          <label>Created At</label>
          <input
            type='date'
            value={createdAt}
            name='createdAt'
            onChange={handleChange}
            className='form-input'
          />
        </div>
        {/* VISIBILITY */}
        <div className='form-action'>
          <label htmlFor='select'>Visibility</label>
          <select
            name='visibility'
            id='visibility'
            value={visibility}
            className='select'
            onChange={handleChange}
          >
            <option value='public'>Public</option>
            <option value='private'>Private</option>
          </select>
        </div>
        <div className='form-btn-container'>
          <button type='button' className='btn cancel-btn' onClick={closeModal}>
            Cancel
          </button>
          <button type='submit' className='btn submit-btn'>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default NoteForm;
