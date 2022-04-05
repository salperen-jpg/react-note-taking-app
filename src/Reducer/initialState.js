import { notes } from '../components/data';
export const initialState = {
  note: {
    title: '',
    detail: '',
    createdAt: '',
    importancy: null,
    visibility: null,
  },
  notes: notes,
  isLoading: false,
  isAlert: { show: false, msg: '', type: '' },
  theme: '',
  isModalOpen: false,
};