import { notes } from '../components/data';
export const initialState = {
  note: {
    title: '',
    detail: '',
    createdAt: '',
    importancy: '',
    visibility: null,
  },
  notes: notes,
  isLoading: false,
  isAlert: { show: false, msg: '', type: '' },
  theme: '',
  isModalOpen: false,
};
