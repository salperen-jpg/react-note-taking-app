import { notes } from '../components/data';
import { getLocalStorage } from '../Utils/localStorage';
export const initialState = {
  note: {
    title: '',
    detail: '',
    createdAt: '',
    importancy: '',
    visibility: '',
  },
  notes: getLocalStorage(),
  isLoading: false,
  isAlert: { show: false, msg: '', type: '' },
  theme: '',
  isModalOpen: false,
};
