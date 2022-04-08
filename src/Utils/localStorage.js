import { notes } from '../components/data';
export const getLocalStorage = () => {
  let note = localStorage.getItem('note');
  if (note) {
    return JSON.parse(localStorage.getItem('note'));
  } else {
    return notes;
  }
};
